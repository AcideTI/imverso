// Función de envío de correo
const sendEmail = async (formData) => {
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_vll01bo",
          template_id: "template_kjnw9si",
          user_id: "1sEve4zn0ny6aJOvz",
          template_params: formData,
        }),
      });
  
      const contentType = response.headers.get("Content-Type") || "";
  
      if (!response.ok) {
        let errorData;
        if (contentType.includes("application/json")) {
          errorData = await response.json();
        } else {
          errorData = await response.text();
        }
        throw new Error(`Error ${response.status}: ${response.statusText} - ${errorData}`);
      }
  
      return true;
    } catch (error) {
      console.error("Error en sendEmail:", error.message);
      throw error;
    }
  };
  
  // Manejo del envío de datos al correo desde el formulario de contacto
  document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("form-submit");
  
    submitButton.addEventListener("click", async (event) => {
      event.preventDefault();
  
      let isValid = true;
  
      // Obtener los elementos del formulario
      const rucInput = document.getElementById("ruc");
      const nameInput = document.getElementById("contact-name");
      const contactNumberInput = document.getElementById("contact-number");
      const errorMessage = document.getElementById("numero_vacio");
      const phoneNumber = contactNumberInput.value.trim();
      const serviceInput = document.getElementById("service");
      const messageInput = document.getElementById("message");
  
      // Validación de RUC
      if (rucInput.value.trim() === "" || rucInput.value.length !== 11 || !/^\d+$/.test(rucInput.value)) {
        rucInput.classList.add("is-invalid");
        isValid = false;
      } else {
        rucInput.classList.remove("is-invalid");
      }
  
      // Validación del nombre
      if (nameInput.value.trim() === "") {
        nameInput.classList.add("is-invalid");
        isValid = false;
      } else {
        nameInput.classList.remove("is-invalid");
      }
  
      // Validación del número de contacto
      const iti = window.intlTelInputGlobals.getInstance(contactNumberInput); // Obtener instancia de intl-tel-input
      if (phoneNumber === "" || !iti.isValidNumber()) {
        errorMessage.style.display = "block";
        contactNumberInput.style.borderColor = "red";
        isValid = false;
      } else {
        errorMessage.style.display = "none";
        contactNumberInput.style.borderColor = "";
      }
  
      // Validación del servicio
      if (serviceInput.value === "") {
        serviceInput.classList.add("is-invalid");
        isValid = false;
      } else {
        serviceInput.classList.remove("is-invalid");
      }
  
      // Validación del mensaje
      if (messageInput.value.trim() === "") {
        messageInput.classList.add("is-invalid");
        isValid = false;
      } else {
        messageInput.classList.remove("is-invalid");
      }
  
      if (!isValid) return;
  
      // Obtener el código del país seleccionado
      const countryData = iti.getSelectedCountryData();
      const countryCode = `+${countryData.dialCode}`; // Código del país, ej: +51
  
      // Construir el mensaje
      const formattedMessage = `
      ${messageInput.value}
      Estos son mis datos:
      RUC: ${rucInput.value}
      Nombre de contacto: ${nameInput.value}
      Número de contacto: ${countryCode} ${phoneNumber}
      Servicio solicitado: ${serviceInput.value}
      `;
  
      // Crear el objeto de datos para enviar
      const formData = {
        to_name: "Consultora Imverso",
        from_name: nameInput.value,
        message: formattedMessage,
        reply_to: "",
        from_email: "inpulsainversiones@gmail.com",
      };
  
      try {
        const success = await sendEmail(formData);
        if (success) {
          Swal.fire({
            text: "¡El mensaje se envió correctamente!",
            icon: "success",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "green",
          });
          document.getElementById("contactForm").reset();
          document.querySelectorAll(".is-invalid").forEach((el) => el.classList.remove("is-invalid"));
        }
      } catch (error) {
        Swal.fire({
          text: `Ocurrió un error al enviar el mensaje: ${error.message}. Inténtalo de nuevo.`,
          icon: "error",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "black",
        });
      }
    });
  });  
document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#contact-number");

  if (input) {
    // Inicializar intl-tel-input
    const iti = window.intlTelInput(input, {
      initialCountry: "pe", // Perú por defecto
      preferredCountries: ["pe", "us", "mx"], // Países favoritos
      separateDialCode: true, // Mostrar código de país separado
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
    });

    // Validar número al enviar el formulario
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (event) {
        // Obtener datos del país seleccionado
        const countryData = iti.getSelectedCountryData();
        const dialCode = countryData.dialCode; // Código de marcado, ejemplo: "51"

        // Validar el número
        if (!iti.isValidNumber()) {
          event.preventDefault();
          input.classList.add("is-invalid");
          console.log("Número inválido:", iti.getNumber());
          console.log("Código de país seleccionado:", dialCode);
        } else {
          input.classList.remove("is-invalid");
          console.log("Número válido:", iti.getNumber());
          console.log("Código de país seleccionado:", dialCode);
        }
      });
    }
  } else {
    console.error("El input para 'contact-number' no se encontró.");
  }
});
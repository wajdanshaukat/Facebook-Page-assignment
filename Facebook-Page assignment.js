document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");

  togglePassword.addEventListener("click", function () {
    let type;
    if (passwordField.type === "password") {
      type = "text";
      togglePassword.innerHTML = "Hide";
    } else {
      type = "password";
      togglePassword.innerHTML = "Show";
    }
    passwordField.type = type;

    this.classList.toggle("fa-eye");
  });
});

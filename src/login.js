document.getElementById('login-btn').addEventListener('click', function() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Verificar las credenciales y redireccionar según el rol
  
    if (email === "cajero@salute.com" && password === "cajero") {
      window.location.href = "cajero-solicitudes.html";
    } else if (email === "admin@salute.com" && password === "admin") {
      window.location.href = "admin-solicitudes.html";
    } else if (email === "proveedor@salute.com" && password === "proveedor") {
      window.location.href = "index.html";
    } else if (email === "usuario@salute.com" && password === "usuario") {
      window.location.href = "index.html";
    } else {
      alert("Credenciales inválidas");
    }


});

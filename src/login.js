document.getElementById('login-btn').addEventListener('click', function() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Verificar las credenciales y redireccionar según el rol
  
    if (email === 'usuario' && password === 'usuario') {
      window.location.href = 'index.html';
    } else if (email === 'admin' && password === 'admin') {
      window.location.href = 'admin-solicitudes.html';
    } else {
      alert('Credenciales inválidas');
    }

});

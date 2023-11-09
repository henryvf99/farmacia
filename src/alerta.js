document
  .getElementById("solicitarButton")
  .addEventListener("click", function () {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, estoy seguro",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "¡Solicitud enviada!",
          "Tu solicitud ha sido enviada correctamente.",
          "success"
        ).then(() => {
          // Redirigir a otro HTML después de hacer clic en OK
          window.location.href = "cajero-solicitudes.html";
        });
      }
    });
  });

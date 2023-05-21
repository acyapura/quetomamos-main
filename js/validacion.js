document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario_nombre').value;
    if(usuario.length == 0) {
      alert('No has escrito tu nombre');
      return;
    }
    var email = document.getElementById('usuario_email').value;
    if (email.length == 0) {
      alert('Al menos necesitamos que escribas tu mail');
      return;
    }
    var comentario = document.getElementById('texto').value;
    if (comentario.length == 0) {
      alert('Necesitamos que nos comentes para poder ayudarte');
      return;
    }
       
    this.submit();
  }


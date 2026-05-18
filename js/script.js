// JavaScript simple: validación del formulario y mejora de accesibilidad
document.addEventListener('DOMContentLoaded',function(){
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var message = document.getElementById('message');
      var status = document.getElementById('formStatus');

      // Validación simple
      var errors = [];
      if(!name.value || name.value.trim().length < 2) errors.push('Ingresa un nombre válido.');
      if(!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) errors.push('Ingresa un correo electrónico válido.');
      if(!message.value || message.value.trim().length < 10) errors.push('El mensaje debe tener al menos 10 caracteres.');

      if(errors.length){
        status.textContent = errors.join(' ');
        status.style.color = 'crimson';
        return;
      }

      // Simular envío
      status.textContent = 'Enviando...';
      status.style.color = 'var(--muted)';

      setTimeout(function(){
        status.textContent = 'Gracias, tu mensaje se ha recibido (ejemplo).';
        status.style.color = 'green';
        form.reset();
      },800);
    });
  }
});

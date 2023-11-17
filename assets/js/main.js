const body = document.body;
const modoSwitch = document.getElementById('modoSwitch');

// Función para cambiar el modo de visualización del sitio
function cambiarModo() {
      if (modoSwitch.checked) {
            body.classList.add("modo-oscuro");
      } else {
            body.classList.remove("modo-oscuro");
      }
}
// Agregar evento al cambio del switch para activar el modo oscuro
modoSwitch.addEventListener('change', cambiarModo);
//---------------- Fin Modo oscuro/claro ------------------


//------------------ Verificación de formulario ------------------
// Espera a que el documento esté listo
document.addEventListener('DOMContentLoaded', function() {

      // Busco el formulario por su ID
      const form = document.getElementById('contactForm');

      // Agrego un evento de escucha para el envío del formulario
      form.addEventListener('submit', function(event) {

            // Obtengo los valores de los campos del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
      
            // Verifico si los campos están vacíos y muestra una alerta si es así
            if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
                  alert('Por favor, complete todos los campos.');
                  event.preventDefault();  //-------------------- Evita que se envíe el formulario
            }
      });
});
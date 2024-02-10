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

function copiarTexto() {
      // Obtener el elemento span que contiene el email
      const emailElement = document.getElementById('emailText');    
      // Verificar si el botón ya ha sido clicado
      if (emailElement && !emailElement.dataset.copiado) {
          // Crear un área de texto temporal
            const textarea = document.createElement('textarea');
            textarea.value = emailElement.textContent;        
            document.body.appendChild(textarea);  
      
            // Seleccionar el texto en el área de texto
            textarea.select();
            textarea.setSelectionRange(0, 99999); /* Para dispositivos móviles */  
      
            // Copiar el texto al portapapeles
            document.execCommand('copy');  
      
            document.body.removeChild(textarea);  
      
            alert('Texto copiado al portapapeles: ' + emailElement.textContent);
      
            emailElement.dataset.copiado = true;
      }
}

// Agregar evento al cambio del switch para activar el modo oscuro
modoSwitch.addEventListener('change', cambiarModo);
document.getElementById('copiarTextoBtn').addEventListener('click', copiarTexto);
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
// Selecciona el body del documento
const body = document.body;

// Variable para rastrear el modo (inicialmente falso)
let modoOscuro = false;

// Función para cambiar el modo de visualización del sitio
function cambiarModo() {
      modoOscuro = !modoOscuro; //----------------------------- Invierte el estado del modo
      body.classList.toggle("modo-oscuro"); //----------------- Agrega o quita la clase "modo-oscuro" al body y se configura (aparte) en el archivo styles.css
      actualizarTextoBoton(); //----------------------------- Llama a la función para actualizar el texto del botón
}
// Busco el botón y agrego un "escuchador de eventos" para darle comportamiento al clic
const botonModoNavbar = document.getElementById('botonModo');
botonModoNavbar.addEventListener("click", cambiarModo);

//Funcion que cambia el texto del boton
function actualizarTextoBoton() {
      if (modoOscuro) {
            botonModo.innerText = "Día"; //----------------------------- Al hacer clic en "Noche" de pone en Negro el fondo y el boton dice "Dia"
      } else {
            botonModo.innerText = "Noche"; //----------------------------- Al hacer clic en "Día" de pone el fondo de colores  y el boton dice "Noche"
      }
}
// Configuro estilos para el botón
botonModo.style.top = '55px'; 
botonModo.style.right = '20px'; 
botonModo.style.zIndex = '1000'; 
botonModo.style.borderRadius = '10px'; 
actualizarTextoBoton();
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
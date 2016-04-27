/* Class */

class Saludador {
  saludar(persona = "Vos", container) {
    container.innerHTML = persona;
  }
}

/* Proto */

/*function Saludador () {
  function saludar (nombre = "Vos", container) {
    container.innerHTML = nombre;
  }

  return {
    saludar
  }
}*/

export {Saludador}
// My application logic

/* Class */

class Saludador {
  constructor (persona = "Vos", container) {
    this.persona = persona;
    this.container = container;
  }
  saludar() {
    this.container.innerHTML = "Hola " + this.persona + "!";
  }
}

/* Prototype */

/*
function Saludador () {};

Saludador.prototype.saludar = function saludar(nombre = "Vos", container) {
  container.innerHTML = nombre;
}
*/

export {Saludador}
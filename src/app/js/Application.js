class Saludador {
  constructor (persona = 'Vos', container) {
    this.persona = persona;
    this.container = container;
  }
  saludar () {
    this.container.innerHTML = `Hola ${this.persona}!`;
  }
}

export default Saludador;

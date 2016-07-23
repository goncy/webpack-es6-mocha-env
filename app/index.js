import Saludador from './Saludador';

let container = document.createElement('div');
let saludador = new Saludador('Gonzalo', container);

saludador.saludar();

document.body.appendChild(container);

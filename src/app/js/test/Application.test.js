import jsdom from 'mocha-jsdom';
import {expect} from 'chai';

import {Saludador} from '../Application.js';

describe("Testea el modulo Application", () => {

  jsdom();
  let container;
  let saludador;

  before(function(){
    container = document.createElement('div');
  });

  beforeEach(function(){
    container.innerHTML = '';
  });

  it("Deberia saludar a alguien", () => {
    saludador = new Saludador("Gonzalo", container);
    saludador.saludar();

    expect(container.innerHTML).to.equal("Hola Gonzalo!");
  });
});

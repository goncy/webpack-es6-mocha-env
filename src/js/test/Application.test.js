let expect = require("chai").expect;

import jsdom from 'mocha-jsdom';

import {Saludador} from '../Application.js';

describe("Testea el modulo Application", () => {

  jsdom();
  let container;
  let saludador;

  before(function(){
    container = document.createElement('div');
  });

  beforeEach(function(){
    saludador = new Saludador();
    container.innerHTML = '';
  });

  it("Deberia saludar a alguien", () => {
    saludador.saludar("Gonzalo", container);

    expect(container.innerHTML).to.equal("Gonzalo");
  });
});

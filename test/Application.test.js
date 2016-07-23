/* eslint-env mocha */
import expect from '../node_modules/expect.js/index';
import jsdom from 'mocha-jsdom';

import Saludador from '../app/Saludador';

describe('Testea el modulo Application', () => {
  jsdom();
  let container;
  let saludador;

  before(() => {
    container = document.createElement('div');
  });

  beforeEach(() => {
    container.innerHTML = '';
  });

  it('Deberia saludar a alguien', () => {
    saludador = new Saludador('Gonzalo', container);
    saludador.saludar();

    expect(container.innerHTML).to.contain('Hola Gonzalo!');
  });
});

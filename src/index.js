import myName from './myName';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.textContent = myName('Andres');

    return element;
  }

document.body.appendChild(component());



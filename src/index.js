import _ from 'lodash';
import './style.css';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); //output 'Toml Example'
console.log(toml.owner.name); //output 'Tom Preston-Werner'

console.log(yaml.title); // output 'YAML Example'
console.log(yaml.owner.name); // output 'Tom Preston-Werner'

console.log(json.title); //output 'JSON Example'
console.log(json.owner.name); // output 'Tom Preston-Werner'


function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //Add the image to our created div
    const image_container = document.createElement('div');
    image_container.classList.add('image');

    element.appendChild(image_container);

    console.log(Data);
    console.log(Notes);

    return element;
  }

document.body.appendChild(component());



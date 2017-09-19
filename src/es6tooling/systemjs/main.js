import { sum, kebabCase } from 'npm:lodash';
import { addTax } from './checkout'; 

console.log(kebabCase('hector palomares 12'));
console.log(addTax(200, 0.16));
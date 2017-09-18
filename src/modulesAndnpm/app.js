import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, name, old } from './src/config'

const ages = [1, 1, 2, 5, 2, 23, 33, 17, 21];

console.log(uniq(ages));
console.log(key, url);

console.log(name, old);

sayHi();
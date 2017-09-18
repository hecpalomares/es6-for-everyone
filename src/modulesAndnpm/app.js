import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, name, old } from './src/config'

import User, { createURL, gravatar } from './src/user';

const me = new User('Hector Palomares', 'hector.palomares@me.com', 'hectorpalomares.com');
const profile = createURL(me.name);
const gravatarProfile = gravatar(me.email);

console.log(me);
console.log(profile);
console.log(gravatarProfile);
import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

const ages = [1, 1, 2, 5, 2, 23, 33, 17, 21];

console.log(uniq(ages));
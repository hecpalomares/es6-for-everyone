//Named export
export const apiKey = 'abc123';
export const url = 'https://hectorpalomares.com';

export function sayHi() {
	console.log('hello!');
}

const name = 'Hector';
const age = 25;

export { name, age as old } 

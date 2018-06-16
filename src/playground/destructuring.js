// Object destructuring
const person = {
    name: 'Ahmed',
    age: 25,
    location: {
        city: 'Stockholm',
        temp: 26
    }
}

const { name: firstName = 'Anonymous', age } = person;
const { city: currentCity, temp: temprature } = person.location;

console.log(`${firstName} is ${age}`);

console.log(`The temprature in ${currentCity} is ${temprature}`);

// Array descructuring

const address = ['Ahmed','Armegatan', 'Stockholm', '17171'];

const [, street, city = 'Gothenborg', zip] = address;

console.log(`I live in ${street} in ${city} with zip code ${zip}`);
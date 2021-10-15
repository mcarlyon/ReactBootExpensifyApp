// const person = {
//     name: 'Pho',
//     age: 35,
//     location: {
//         city: 'Boomtown',
//         temp: 19
//     }
// };

// const { name = 'Anon', age, location } = person;

// const { city, temp } = location;

// console.log(`${name} is ${age} year(s) old`);

// console.log(`${city} is ${temp} year(s) old`);

// const book = {
//     title: 'Ego',
//     author: 'Ryan',
//     publisher: {
//         name: 'Bobby'
//     }
// }

// const {title, author} = book;
// const { name: publisherName = 'Self' } = book.publisher;

// console.log( publisherName)

const address = [
    '123 Fake St',
    'Fake Town',
    'Falseland',
    '1234'
]

const [street, town, land, zip] = address;

console.log(`My address is ${street}, ${town}`);

const item = ['coffee', '$5', '$7', '$9'];

const [coffee, , med] = item;

console.log(`A med ${coffee} costs ${med}`)


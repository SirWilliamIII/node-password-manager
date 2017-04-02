/**
 * Created by willcarpenter on 4/2/17.
 */
var person = {
    name: 'Will',
    age: 22,
    isMale: true,
    address: {
        street: "1201 N Clarkson",
        city: 'Denver',
        state: 'CO'
    },
    favoriteNumbers: [
        2, 22, 24, 35, 44, 5
    ]
};
var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log('type of object after JSON stringify ' + typeof personJSON);
console.log('original type of object: ' + typeof person);

var personObject = JSON.parse(personJSON);
console.log(personObject);

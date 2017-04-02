/**
 * Created by willcarpenter on 4/2/17.
 */
var animal = '{"name": "Halley"}';

animalObj = JSON.parse(animal);
console.log(animalObj);

animalObj.age = 5;

var animalStr = JSON.stringify( animalObj );
console.log(animalStr);

console.log(animal);
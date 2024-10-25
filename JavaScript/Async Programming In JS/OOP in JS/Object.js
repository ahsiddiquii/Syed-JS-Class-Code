// Default behaviour of JS is Prototypal Behaviour
// prototypal behavior refers to this inheritance mechanism in JavaScript, where objects inherit properties and methods from other objects through prototypes.

// JavaScript mein prototypal behavior ka matlab yeh hota hai kay jab kisi object (jaise dog) ko koi property ya method nahi milta, to wo apnay prototype (parent object) mein wo property dhondta hai. Agar wahan bhi nahi milay, to wo apnay parent's parent aur uss se aglay (grandparents, great-grandparents) tak jaata hai jab tak ya to wo property mil jaye, ya phir prototype chain ka end (null) milay.

// const animal = {
//     eats: "Meat"

// };

// const dog = Object.create(animal);
// console.log(dog.eats); // true

// animal object: It has a property eat with the value true.

// dog object: This object is created using Object.create(animal), which means the dog object will inherit the prototype from the animal object.

// When you try to access dog.eat, JavaScript first checks if dog has its own eat property. Since it doesn't, JavaScript looks at the prototype of dog, which is animal.

// In animal, the eat property exists and has a value of true. Hence, dog.eat returns true.

// 2.
// If you add or override properties on dog, they will be specific to dog, but it will still have access to animal's properties through prototypal inheritance.

// Example of adding a new property to dog:

// const animal = {
//     eats: "Meat"
// };

// const dog = Object.create(animal);
// // console.log(dog.eats);

// dog.bark = function () {
//     console.log("Woof!");
// };

// dog.bark(); // Woof!
// console.log(dog.eat); // true (still inherits from animal)
// This demonstrates how dog can have its own properties while still inheriting properties from animal.


// 3.
// function multipleBy5(num) {
//     // let a = 10;
//     return num * 5
// }

// multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, price){
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}

const chai = createUser("chai", 25);
const tea = new createUser("tea", 250);

tea.increment();
tea.printMe();
console.log(tea.power);
// console.log(chai.power);

// chai is created without new, which means it won't be an instance of createUser. Instead, it simply runs the function in the global context, and this will refer to the global object (or undefined in strict mode). Therefore, tea will not have any properties.
// chai.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// 26:39 / 48:07
// Let's imagine we are talking about toys to make this easy to understand.

// ### Singleton Objects

// Imagine you have a very special toy car. There's only **one** of this toy car in the entire world. Whenever you want to play with this toy car, you always play with this one unique car. You can't make another one exactly like it because it's one-of-a-kind. 

// In JavaScript, this special toy car is like a **singleton object**. There's only one instance of this object, and every time you use it, you're using the same instance. Here's a simple example:


const toyCar = {
  color: "red",
  type: "racing",
  beep: function() {
    console.log("Beep beep!");
  }
};

// No matter how many times you use `toyCar`, it's always the same one.
toyCar.beep(); // Beep beep!
toyCar.color = "blue"; // Change its color
console.log(toyCar.color); // blue


// ### Non-Singleton Objects

// Now, imagine you have a factory that makes toy cars. Every time you want a new toy car, you can go to the factory and ask for a new one. Each toy car can look the same, but they are not the same exact car. They are different instances.

// In JavaScript, this is like creating a new object from a "factory" (a function or class) each time you want a new one. Here's an example:


// This is like our factory that makes new toy cars.
class ToyCar {
    constructor(color, type) {
        this.color = color;
        this.type = type;
        this.beep = function () {
            console.log("Beep beep!");
        };
    }
}

// Every time you use `new ToyCar`, you get a different car.
const toyCar1 = new ToyCar("red", "racing");
const toyCar2 = new ToyCar("blue", "off-road");

toyCar1.beep(); // Beep beep!
toyCar2.beep(); // Beep beep!

toyCar1.color = "green"; // Change the color of the first car
console.log(toyCar1.color); // green
console.log(toyCar2.color); // blue


// In this example, `toyCar1` and `toyCar2` are like two different toy cars made by the factory. They can look similar, but they are not the same car.

// ### Summary

// - Singleton Object: One unique object that is always the same whenever you use it.
// - Non-Singleton Objects: Multiple objects created from a "factory", each one is a different instance.

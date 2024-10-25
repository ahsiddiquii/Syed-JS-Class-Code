// ### Closures and Lexical Scoping in JavaScript: A Child-Friendly Explanation

// Imagine you have a box (a function) where you can put your toys (variables). Some toys are already in the box when you first open it, and you can put more toys inside as you play. Now, let’s imagine that after you close the box, you can still remember where all the toys are, even if you open the box again later. This special memory of where your toys are is like a **closure** in JavaScript.

// #### What is Lexical Scoping?

// **Lexical Scoping** is like a set of rules about which toys you can play with based on where you are. Think of your toys being in different rooms of your house:

// - If you’re in your bedroom, you can play with all the toys in that room.
// - If you go to the living room, you can only play with the toys in the living room. But if the door to the bedroom is open, you can still reach into the bedroom and play with those toys, too.

// In JavaScript, **lexical scoping** means that a function can use variables (toys) that are in the place (scope) where the function was created, even if the function is moved somewhere else later.

// #### What is a Closure?

// Now, imagine you take a special toy out of the living room and bring it to your bedroom. Even though you’re now in your bedroom, you still remember that this toy came from the living room. This is similar to how a **closure** works in JavaScript.

// A closure is like a function that “remembers” the place where it was created and can still use the toys (variables) from that place, even if it’s now being played with in a different room (scope).

// #### Code Examples and Explanation

// **Example 1: Simple Closure**

// Let’s say you have a box with a toy inside (a function with a variable). You close the box (return the function) and later open it again (call the function). The toy is still there!


function outerBox() {
  let toy = "Toy Car"; // This is our toy in the box

  function innerBox() { // This is another box inside the first box
    console.log(toy); // The inner box can still play with the toy
  }

  return innerBox; // We close the outer box, but we can still access the toy later
}

const myBox = outerBox(); // We open the outer box
myBox(); // Now, we open the inner box and find our toy!


// **Output:**

// Toy Car


// **Explanation:**
// - `outerBox()` is like a room where we put a toy (`toy = "Toy Car"`).
// - `innerBox()` is another room inside that room, which can play with the toy.
// - Even after we close `outerBox()` and open it later, `innerBox()` still remembers where the toy is, thanks to the closure.

// **Example 2: Using Closure to Keep a Counter**

// Now imagine you have a toy counter. Every time you play with a toy, you add one to the counter. This counter is hidden inside a box, but you can still change the number even after you close the box!


function toyCounter() {
  let count = 0; // Start with no toys played with

  return function () {
    count += 1; // Each time you play, add one to the count
    console.log(`You've played with ${count} toys.`);
  };
}

const playWithToy = toyCounter(); // Open the toy counter box
playWithToy(); // Play with a toy
playWithToy(); // Play with another toy


// **Output:**

// You've played with 1 toys.
// You've played with 2 toys.


// **Explanation:**
// - `toyCounter()` creates a hidden counter (`count = 0`).
// - Each time you call `playWithToy()`, it remembers the previous count and adds one more. This is a closure at work!

// **Example 3: Advanced Closure - Making a Secret Keeper**

// Imagine you have a secret that you keep in a locked box. Only you have the key to unlock it, and you can decide who gets to know the secret.


function secretKeeper(secret) {
  return function () {
    console.log(`The secret is: ${secret}`);
  };
}

const mySecret = secretKeeper("I love ice cream!"); // Lock the secret in the box
mySecret(); // Only the person with the key can reveal the secret


// **Output:**

// The secret is: I love ice cream!


// **Explanation:**
// - `secretKeeper("I love ice cream!")` locks away the secret.
// - `mySecret()` is the key to unlock and reveal that secret. Even though the function is used later, it still remembers the secret, thanks to the closure.

// ### Summary
// - **Lexical Scoping** is like knowing which toys (variables) you can play with based on where you are (scope).
// - **Closure** is like remembering where all your toys are, even when you’ve moved to a different room. In JavaScript, it means a function can “remember” and use variables from the place where it was created.

// These concepts are super important because they let you build more powerful and flexible programs. With closures, your functions can carry some memory of where they came from, making them very useful in many situations!
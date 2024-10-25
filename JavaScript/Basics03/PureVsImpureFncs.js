// ### Pure Functions vs. Impure Functions in JavaScript

// #### **What is a Pure Function?**

// A **pure function** is like a perfectly predictable machine. Every time you give it the same input, it will always give you the same output. It doesn’t change anything outside itself (like a clean and quiet neighbor). 

// Think of it as a **smoothie recipe**. If you blend the same ingredients (like bananas and strawberries) every time, you’ll always get the same smoothie. The recipe doesn’t change anything outside the blender, and the output is always consistent.

// **Key Characteristics:**
// - **Same input, same output:** The output only depends on the input provided.
// - **No side effects:** It doesn't modify any external state (like global variables, files, or databases).

// **Example:**
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (same input gives the same output every time)


// **Explanation:**  
// Here, the `add` function is a pure function. It takes two numbers as inputs and always returns their sum without affecting anything else outside the function. No matter how many times you run it with `2` and `3`, it will always return `5`.

// ---

// #### **What is an Impure Function?**

// An **impure function** is a bit unpredictable. It might do something outside its own world (like a noisy neighbor). This means it could change or affect things outside itself, or it might not give the same output even if you give it the same input.

// Imagine a **smoothie recipe** where the ingredients change every time based on what's available in your fridge. One day you might add extra mangoes, and the next day, you might add some spinach. The output (your smoothie) changes even if you follow the same steps.

// **Key Characteristics:**
// - **Different output for the same input:** The output might change even if the input stays the same.
// - **Side effects:** It may modify external states like variables, data, or even the environment.

// **Example:**

let number = 5;

function addRandom(a) {
    return a + Math.random();
}

console.log(addRandom(number)); // Example output: 5.34857 (random value added)
console.log(addRandom(number)); // Example output: 5.90321 (random value added)


// **Explanation:**  
// The `addRandom` function is impure because it adds a random number to the input. Even if you pass the same number (`5`), the output changes every time you call the function because `Math.random()` generates a different value each time. This unpredictability makes the function impure.

// **Another Impure Function Example:**

let counter = 0;

function incrementCounter() {
    counter += 1;
    return counter;
}

console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2 (modifies the external counter variable)


// **Explanation:**  
// The `incrementCounter` function is impure because it modifies the `counter` variable outside the function. Each time you call it, the value of `counter` changes, which means the function has side effects and produces different results even if you don’t change the input.

// ---

// ### **Summary**

// - **Pure Functions:** Like a consistent smoothie recipe, they always give the same output for the same input and don’t affect the outside world.
// - **Impure Functions:** Like a smoothie recipe that changes based on what's in your fridge, they might produce different outputs for the same input and can modify things outside themselves.

// By understanding the difference between pure and impure functions, you’ll be able to write cleaner, more predictable code!
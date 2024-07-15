import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});

connectDB();






/*
// First Approach for connecting Database direct in host (index.js) file:
; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", err => {
            console.log(err);
            throw err
        })
        app.listen(process.env.PORT, () => { console.log(`App is listening on port ${process.env.PORT}`) })
    } catch (error) {
        console.log("Error connecting to the database: ", error);
        throw error
    }
})()
*/


// Define an immediately invoked async function
; (async () => {
    // Start a try-catch block to handle errors
    try {
        // Connect to the MongoDB database using the MONGODB_URI environment variable and the DB_NAME variable
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        // Set up an error handler for the Express.js app
        app.on("error", err => { 
            console.log(err); 
            throw err // Rethrow the error to propagate it up the call stack
        })
        // Start the Express.js app listening on the port specified by the PORT environment variable
        app.listen(process.env.PORT, () => { 
            console.log(`App is listening on port ${process.env.PORT}`) // Log a message to the console indicating that the app is listening
        })
    } catch (error) { // Catch any errors that occur in the try block
        console.log("Error connecting to the database: ", error); // Log the error to the console
        throw error // Rethrow the error to propagate it up the call stack
    }
})();



// app.on("error", ...)

// app.on("error", ...) is an event listener that listens for an "error" event on the Express.js app object (app). When an error occurs in the app, this event is emitted, and the callback function passed to app.on("error", ...) is called.

// err => {
//     console.log(err);
//     throw err;
//   }
// This function takes an err object as an argument, which represents the error that occurred.

// What does app.on("error", ...) do?

// When an error occurs in the app, the app.on("error", ...) event listener is triggered, and the callback function is called with the error object as an argument. This allows you to handle errors in a centralized way, rather than having to catch and handle errors individually throughout your code.

// In this case, the callback function:

// Logs the error to the console using console.log(err).
// Rethrows the error using throw err.
// What does throw err do?

// throw err rethrows the error object, which allows the error to propagate up the call stack. This means that the error will be caught by the next error handler in the call stack, or if there are no more error handlers, it will be caught by the Node.js runtime and terminate the process.

// Rethrowing the error is useful in this case because it allows the error to be handled by a higher-level error handler, such as a global error handler or a error handler in a parent context. This ensures that the error is not lost and can be properly handled and logged.

// In the context of this code, rethrowing the error allows it to be caught by the catch block in the immediately invoked async function, which logs the error to the console and rethrows it again. This ensures that the error is properly handled and logged, even if it occurs in a asynchronous context.
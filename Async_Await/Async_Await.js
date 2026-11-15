// Async Await is a way to handle asynchronous operations in JavaScript. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.

// The 'async' keyword is used to declare a function as asynchronous. This means that the function will always return a promise, and you can use the 'await' keyword inside it to pause the execution of the function until a promise is resolved.  

const fetchData = async () => {
    let num  = "hello";
    return num;
};
fetchData().then((message) => console.log(message))

// The 'await' keyword can only be used inside an async function. It is used to wait for a promise to resolve or reject before continuing with the execution of the code.
const fetchDataWithAwait = async () => {
    let y = await promise.resolve('Even Number');
    console.log(y);
}

console.log(1);
fetchDataWithAwait();
console.log(2)

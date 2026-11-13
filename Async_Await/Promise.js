let num  = 4;
let promise = new Promise((resolve, reject) => {
    if(num%2 === 0) {
        resolve('Even Number');
    } else {
        reject('Odd Number');
    }
});

promise.then((message) => console.log(message))
promise.catch((message) => console.log(message));

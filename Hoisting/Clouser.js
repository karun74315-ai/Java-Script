function outerFunction() {
    let outerVariable = 'I am from the outer function';
    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
    }   
    innerFunction();
}

console.log(outerVariable); // ReferenceError: outerVariable is not defined
const out = outerFunction(); // I am from the outer function
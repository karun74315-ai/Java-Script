console.log(b);
let b = 10;
 // refrence error  

 greet()
 function greet(){
    console.log("hello");  
}   // hello

console.log(a); 
var a = 10; // undefined


// TDZ

console.log(c);

// temporary dead zone
let c = 10; // refrence error
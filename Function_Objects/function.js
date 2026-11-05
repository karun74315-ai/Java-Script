// Named function

function greet(){
    console.log("hello");  
}
greet(); // hello

//Anonmymous function
const ab = function(){
    console.log("an");
    
} 
ab()// an

// fat-arrow 
const app = ()=>{
    console.log(0);
    
}  
app()

// IIFE
(function ab(){
    return " hii"
})();

// callback 

function ay(n, callback){
     return callback(n);
}
const double = (n) =>{
    return n*2;
}
console.log(ay(5, double()));


//counstructor function

function prerson(name){
    this.name = name;
}

const user = new prerson("arun");
console.log(user.name);

// recursive 

function fct(n){
    if(n===0) return 1;
    return n*fct(n-1);
}
console.log(fct()); //120



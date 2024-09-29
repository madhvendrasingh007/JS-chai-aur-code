// Immediately Invoked Function Expression (IIFE)

function chai(){
    console.log("DB Connecctd");
};

chai()

// if we invoke immediately without using chai(), then we user iife
(function chai2(){  
    console.log("Hello World");   
}) ();  
// JS Execution Context -> refers to how JS file will get executed, JS execute file in two phase

/*
    The working of the JavaScript works on three phases:
        1. Global Execution Context
        2. Memory phase / Creation phase
        3. Execution phase
*/

//      ********* Phase 1: Global Execution Context *********
// The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

// Types of Execution Context
// -> Global Execution Context
// -> Functional Execution Context
// -> Eval Execution Context (Not important, just to know)

//  CODE FILE   ->   Global exec. context
//              (it is stored into this variable)



//      ********* Phase 2: Memory Phase / Creation Phase *********
// During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition
// Memory gets allocated to the variables

// lets suppose const val1 = 10, const val2 = 20 and result1 = addNum(val1, val2) and result1 = addNum(11, 22)
// So, val1 -> undefined in this memory phase
// So, val2 -> undefined in this memory phase
// addNum -> defined
// result1 -> undefined
// result2 -> undefined




// ********* Phase 3: Execution phase *********
// After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
// 1. Memory phase 
// 2. Execution phase 

// The return value of the 'Function Execution' context is passed to the Global Execution Context

// lets take the above example
// val1 <- 10
// val2 <- 20

// addNum (or for any function) creates its own execution context that has new variable env. + execution thread and for each function there will be separate phase i.e memory and exec. phase which will run. and in the end it will get deleted automatically

// refer : https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25&ab_channel=ChaiaurCode







// One critical feature of JavaScript is that it is single-threaded. This means that it can only execute one task at a time. A single-threaded language is one that can execute only one task at a time. The program will execute the tasks in sequence, and each task must complete before the next task starts. Other languages, like Python or Java, are multi-threaded and can execute multiple tasks simultaneously.

// Threads are lightweight processes that run concurrently within a program. Each thread has its own stack and executes independently but shares resources such as memory, code, and data with other threads. Multithreading allows a program to perform several tasks simultaneously, which is useful for running heavy computations or handling multiple requests in a web application.

// Why is JavaScript Single Threaded?
// JavaScript was designed to be a single-threaded language because of the nature of the environment in which it runs – the browser. When JavaScript was created in 1995, the primary use case was to add interactivity to static web pages. At that time, computers were much slower than they are today, and the amount of processing power available was limited. To keep the language simple and efficient, JavaScript was made single-threaded.
const questions = [
  {
    "question": "When the context of this is described what is context actually?",
    "answers": ["The scope that this is invoked in.", "Whatever this is bound to.", "The object that is executing the javascript code."],
    "correctAnswer": "The object that is executing the javascript code.",
    "codeSnippet": null,
    "id": 1
  },
  {
    "question": "When is the value of this set in an ES5 function?",
    "answers": ["When the function is created.", "When the function is executed."],
    "correctAnswer": "When the function is executed.",
    "codeSnippet": null,
    "id": 2
  },
  {
    "question": "When is the value of this set in an ES6 (arrow) function?",
    "answers": ["When the function is created.", "When the function is executed."],
    "correctAnswer": "When the function is created.",
    "codeSnippet": null,
    "id": 3
  },
  {
    "question": "What is the default this?",
    "answers": ["The window object.", "The global object.", "Undefined."],
    "correctAnswer": "The global object.",
    "codeSnippet": null,
    "id": 4
  },
  {
    "question": "What is the default this in a web browser?",
    "answers": ["The window object.", "The object the code is executing on.", "Undefined."],
    "correctAnswer": "The window object.",
    "codeSnippet": null,
    "id": 5
  },
  {
    "question": "When ship.blastOff() is called. What will be the value of this that is console logged?",
    "answers": ["The window object.", "The ship object.", "Instance of RocketShip."],
    "correctAnswer": "The ship object.",
    // "codeSnippet": null,
    "id": 6
  },
  {
    "question": "When blastOff() is evoked. What will be the value of this that is console logged?",
    "answers": ["The window object.", "The ship object.", "Instance of RocketShip."],
    "correctAnswer": "The window object.",
    // "codeSnippet": null,,
    "id": 7
  },
  {
    "question": "If ship.blastOff is console logged what will the value of this be?",
    "answers": ["The window object.", "The ship object.", "Instance of RocketShip."],
    "correctAnswer": "Instance of RocketShip.",
    // "codeSnippet": null,
    "id": 8
  },
  {
    "question": "When an application is running in strict mode and the first two rules do not apply. What will the value of this be?",
    "answers": ["The window object.", "The global object.", "Undefined."],
    "correctAnswer": "Undefined.",
    // "codeSnippet": null,
    "id": 9
  },
  {
    "question": "What is the value of `this` when a user clicks on our button element?",
    "answers": ["The window object.", "The ship object.", "The button element."],
    "correctAnswer": "The button element.",
    // "codeSnippet": null,
    "id": 10
  },
  {
    "question": "What is the value of `this` when a user clicks on our button element?",
    "answers": ["The window object.", "The ship object.", "The button element."],
    "correctAnswer": "The window object.",
    // "codeSnippet": null,
    "id": 11
  },
  {
    "question": "What do the Call and Apply methods allow us to do in JavaScript?",
    "answers": ["Set the execution context of the function to the object provided as the first argument.", "Bind the context of this to the current context during creation phase.", "Bind context of this to the global scope."],
    "correctAnswer": "Set the execution context of the function to the object provided as the first argument.",
    "codeSnippet": null,
    "id": 12
  },
  {
    "question": "What method in Javascript permenantly sets the context of a function to its first argument?",
    "answers": [".Bind", ".Call", ".Apply"],
    "correctAnswer": ".Bind",
    "codeSnippet": null,
    "id": 13
  },
  {
    "question": "What is the first rule when figuring out the context for this?",
    "answers": ["This in function code invoked using the new operator refers to the instance of that object.", "When executing a function as a method on an object, this refers to that object.", "Default this refers to the global object"],
    "correctAnswer": "This in function code invoked using the new operator refers to the instance of that object.",
    "codeSnippet": null,
    "id": 14
  },
  {
    "question": "What is the second rule when figuring out the context for this?",
    "answers": ["This in function code invoked using the new operator refers to the instance of that object.", "When executing a function as a method on an object, this refers to that object.", "Default this refers to the global object"],
    "correctAnswer": "When executing a function as a method on an object, this refers to that object.",
    "codeSnippet": null,
    "id": 15
  },
  {
    "question": "What is the third rule when figuring out the context for this?",
    "answers": ["This in function code invoked using the new operator refers to the instance of that object.", "When executing a function as a method on an object, this refers to that object.", "Default this refers to the global object"],
    "correctAnswer": "Default this refers to the global object",
    "codeSnippet": null,
    "id": 16
  },
  {
    "question": "When the function fn is invoked what will it return?",
    "answers": ["2000", "The global window object.", "Undefined"],
    "correctAnswer": "Undefined",
    // "codeSnippet": null,
    "id": 17
  },
  {
    "question": "Often when looking at docs on MDN for iterative array prototype methods you will see a thisArg optional argument. What is the function of the argument?",
    "answers": ["It sets the value of this for every iteration", "The global window object.", "It allows the value of this to change through each iteration"],
    "correctAnswer": "It sets the value of this for every iteration",
    "codeSnippet": null,
    "id": 18
  },
  {
    "question": "Often when looking at docs on MDN for iterative array prototype methods you will see a thisArg optional argument. What is the function of the argument?",
    "answers": ["It sets the value of this for every iteration", "The global window object.", "It allows the value of this to change through each iteration"],
    "correctAnswer": "It sets the value of this for every iteration",
    "codeSnippet": null,
    "id": 19
  }
  // {
  //   "question": "Often when looking at docs on MDN for iterative array prototype methods you will see a thisArg optional argument. What is the function of the argument?",
  //   "answers": ["It sets the value of this for every iteration", "The global window object.", "It allows the value of this to change through each iteration"],
  //   "correctAnswer": "It sets the value of this for every iteration",
  //   "codeSnippet": null,
  //   "id": 20
  // },
  // {
  //   "question": "Often when looking at docs on MDN for iterative array prototype methods you will see a thisArg optional argument. What is the function of the argument?",
  //   "answers": ["It sets the value of this for every iteration", "The global window object.", "It allows the value of this to change through each iteration"],
  //   "correctAnswer": "It sets the value of this for every iteration",
  //   "codeSnippet": null,
  //   "id": 21
  // },
]

module.exports = questions
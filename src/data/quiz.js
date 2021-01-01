const questions = [
  {
    id: 1,
    prompt:
      "What special prop should always be included for lists of elements?",
    answers: ["id", "name", "key", "prop"],
    correctIndex: 2,
  },
  {
    id: 2,
    prompt: "A React component is a function that returns ______.",
    answers: ["HTML", "JSX", "props", "state"],
    correctIndex: 1,
  },
  {
    id: 3,
    prompt:
      "Which event handler will run when a user is finished filling out a form?",
    answers: ["onSubmit", "onClick", "onChange", "onForm"],
    correctIndex: 0,
  },
  {
    id: 4,
    prompt: "______ is a tool that transpiles JSX into valid JavaScript.",
    answers: ["React", "Babel", "Webpack", "ES6"],
    correctIndex: 1,
  },
  {
    id: 5,
    prompt:
      "What syntax makes it possible to unpack values from arrays, or properties from objects, into distinct variables?",
    answers: ["spread", "key-value", "coalescing", "destructuring"],
    correctIndex: 3,
  },
  {
    id: 6,
    prompt:
      "Returning different elements from a component depending on the state of your application is known as _____ rendering.",
    answers: ["voodoo", "conditional", "reactive", "controlled"],
    correctIndex: 1,
  },
];

export default questions;

# Code 301: ES6 Introduction

This hour-long assignment is designed to give you an introduction to some features in [ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/), otherwise known as ES6.

In this exercise you'll be working with the following features of ES6:

- Template literals
- Variable declarations with `let` and `const`


## Instructions

Plan to spend about 10-15 minutes reading through this document and the linked references and about 10-15 minutes going over the materials in the adjoining `examples` directory.

After that, follow the instructions below to fork and clone this repository, and then spend about 30 minutes working in the starter code.

1. If you have not yet already, set up a `~/codefellows/301/` directory that you will use for your assignments and projects for this course.
2. Fork and then clone the repository from the link provided by the instructor in Slack into that directory, and navigate into that repo.
3. Create a new branch using your name: `git checkout -b firstname-lastname`
4. Create a copy of the `starter-code` directory with the copy's name being the your first name and last name (`cp -r starter-code firstname-lastname`) and navigate into that directory (ex: `cd sam-hamm`).
5. Read through the following reference materials for each of these topics.
6. See the adjacent `examples.js` file to compare examples of these features with the notation you have been using previously.
7. In the adjacent `starter-code/js/app.js` file, find the **TODO** items and complete them using ES6 notation. Also, complete the **COMMENT** items that are in that file.
8. When finished, push your branch back to your fork on GitHub, and merge it into master. Then, make a pull request back from your branch to the original Code Fellows repo. If you are unsure what to do, ask a TA or instructor.

## Template literals

- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [caniuse.com](http://caniuse.com/#feat=template-literals)

Template literals allow for more elegant construction of strings than the traditional concatenation approach that requires numerous `+` signs and careful management of quotation marks.

## Variable declarations with `let` and `const`

- **`let`**
	- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
	- [caniuse.com](http://caniuse.com/#feat=let)
- **`const`**
	- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
	- [caniuse.com](http://caniuse.com/#feat=const)

We are familiar with the process of declaring a variable using `var`, and how that variable receives global or local scope depending on the context in which it was declared. If the variable is declared outside of any functions, it has global scope, but if it is declared inside a function, the variable is scoped to that function and not accessible globally.

With `let`, a variable declaration can be scoped to a code block `{ code }`, such as we commonly see with `for`,  `if`, or `while` constructions. As with variables declared with `var`, the values assigned to them can be reassigned to any type of value at any time, so long as the reassignment occurs within the same scope in which the variable was declared.

`const` is a little more complicated:

- Like `let`, `const` is also block-scoped.
- Variables initialized with `const` must be assigned a value at the time they are declared.
- Unlike variables declared with `var`, variables declared with `const` do not become properties of the `window` object.
- When `const` is used to assign to a variable one of the five primitive values in JavaScript (number, string, Boolean, null, undefined), the variable cannot be reassigned and attempting to do so will throw an error: "Uncaught TypeError: Assignment to constant variable."
- However, when a `const` variable is used to hold an object (and by extension arrays and functions, which are both objects in JavaScript), new properties can be assigned to the object and their values reassigned at will.

## Additional resources

- [Video from Fun Fun Function titled: “var, let and const - What, why and how.](https://www.youtube.com/watch?v=sjyJBL5fkp8)
- ["JavaScript ES6+: var, let, or const?" by Eric Elliott](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)
- ["ES6 let vs. const variables" by Wes Bos](http://wesbos.com/let-vs-const/)

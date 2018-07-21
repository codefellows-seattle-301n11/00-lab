'use strict';

// Examples of ES6 notation to use as samples for the refactoring TODO items in js/app.js

// ++++++++++++++++++++++++++++++++++++++
// TEMPLATE LITERALS

// Template literals allow for more elegant concatenation than the traditional approach that requires numerous "+" signs (string operators) and careful management of quotation marks.

/* Details:
    * Template literals are wrapped in single backticks, not single quotation marks.
    * One pair of backticks is used for the entire string regardless of how many variables are utilized.
    * Instead of using "+" signs and open/close single quotes to separate strings from variables, the variables are wrapped in this structure: ${variable} where they belong in the backticks.
    * Note that the "$" in template literal notation (often called the "bling" or "money") IS NOT from jQuery or any other library. It is native JavaScript.*/

var classrooms = ['Lovelace', 'Babbage', 'Hopper', 'Turing'];

// OLD WAY: Concatenation
var oldWay = 'Code 101 meets in ' + classrooms[0] + ', Code 201 meets in ' + classrooms[2] + ', Code 301 meets in ' + classrooms[1] + ', and Code 401 meets in ' + classrooms[3] + '.';

// NEW WAY: Template literal notation
var newWay = `Code 101 meets in ${classrooms[0]}, Code 201 meets in ${classrooms[2]}, Code 301 meets in ${classrooms[1]}, and Code 401 meets in ${classrooms[3]}.`;

document.getElementById('one').textContent = oldWay;
document.getElementById('two').textContent = newWay;
console.log('Are the two "Classrooms" strings the same?', oldWay === newWay);

// This practice becomes particularly helpful when creating HTML strings where attributes can have dynamic values.

var mmm = ['chocolate', 'vanilla', 'strawberry'];
var iceCreamCone = document.getElementById('cone');

function scoop(){
  var good = Math.floor(Math.random() * mmm.length);

  // var scoop = `<img src="img/${mmm[good]}.jpg" title="${mmm[good]}" />`;
  var scoop = '<img src="img/' + mmm[good] + '.jpg" title="' + mmm[good] + '" />';

  iceCreamCone.innerHTML = scoop;
}

document.getElementById('yum').addEventListener('click', scoop);

// ++++++++++++++++++++++++++++++++++++++
// LET & CONST

// Follow the instructions in the browser to look at some examples of using let and const.

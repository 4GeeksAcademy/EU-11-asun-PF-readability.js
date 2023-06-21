/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let getRandomElement = array => {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

let generateExcuse = options => {
  let who = options.who || [
    "The dog",
    "My grandma",
    "His turtle",
    "My pinecone"
  ];
  let action = options.action || ["ate", "peed", "crushed", "broke"];
  let what = options.what || ["my homework", "the keys", "the car"];
  let when = options.when || [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoElement = getRandomElement(who);
  let actionElement = getRandomElement(action);
  let whatElement = getRandomElement(what);
  let whenElement = getRandomElement(when);

  return (
    whoElement + " " + actionElement + " " + whatElement + " " + whenElement
  );
};

/* For the refactor to be according to what we studied together you'd have to separate this part of the code 
into a separated function that will take any array and return the random element from it:
 https://github.com/4GeeksAcademy/EU-11-asun-PF-readability.js/blob/main/src/app.js#L29

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My pinecone"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    "" +
    action[actionIndex] +
    "" +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};

*/

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

pronoun.forEach((pronombre) => {
  adj.forEach((adjetivo) => {
    noun.forEach((sujeto) => {
      console.log(pronombre + adjetivo + sujeto + ".com");
    });
  });
});


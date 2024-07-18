/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function generateDomain(pronombre, adjetivo, sujeto) {
  return `${pronombre}${adjetivo}${sujeto}.com`;
}

const domains = pronoun.flatMap((pronombre) => 
  adj.flatMap((adjetivo) => 
    noun.map((sujeto) => generateDomain(pronombre, adjetivo, sujeto))
  )
);

domains.forEach((domain) => console.log(domain));

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

pronoun.forEach(pronombre => {
    adj.forEach(adjetivo =>{
        noun.forEach(sujeto =>{
            console.log(pronombre + adjetivo + sujeto + ".com")
        });
    });
});

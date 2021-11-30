"use strict";
const repeatedWords = (string) => {
    let dictionary;
    dictionary = {};
    let arrayString = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, ' ').trim().split(" ");
    for (let i = 0; i < arrayString.length; i++) {
        let property = arrayString[i];
        if (!dictionary.hasOwnProperty(property)) {
            Object.defineProperty(dictionary, property, { value: 1, writable: true, enumerable: true });
        }
        else {
            dictionary[property]++;
        }
    }
    return dictionary;
};
console.log(repeatedWords("¿hola com12o estas? estas91 espero te encuentras con hola, what? espero como es que hablo así estas que espero te encuentras en una simulacion! hola?"));

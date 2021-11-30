"use strict";
const isPalindrome = (word) => {
    let stringChanged = word.replace(/ /g, '').toLowerCase();
    if (stringChanged == stringChanged.split("").reverse().join("").replace(/ /g, '')) {
        return true;
    }
    return false;
};
console.log(isPalindrome("Eva can I see bees in a cave"));

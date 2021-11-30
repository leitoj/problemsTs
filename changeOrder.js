"use strict";
const changeString = (string) => {
    let stringChanged = "";
    console.log(string.length);
    for (let i = string.length - 1; i >= 0; i--) {
        stringChanged += string[i];
    }
};
console.log(changeString("Hello world!"));

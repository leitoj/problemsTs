const isPalindrome = (word:string) => {
    let stringChanged = word.replace(/ /g,'').toLowerCase()
    if(stringChanged == stringChanged.split("").reverse().join("").replace(/ /g,'')){
        return true;
    }
    return false;
}

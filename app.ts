



function checkAnagram(string1, string2) {
    let string1Arr = string1.split("");
    string1Arr.sort((a, b) => (a > b ? 1 : -1));
    let string2Arr = string1.split("");
    string2Arr.sort((a, b) => (a > b ? 1 : -1));
    console.log(string2Arr, string1Arr)

    if (string1Arr.join("") === string2Arr.join("")) {
        return true;
    }else{
        return false;
    }
}

console.log(checkAnagram("apple", "paple"))
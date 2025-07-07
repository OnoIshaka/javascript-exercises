const repeatString = function(string, num) {
    if (num < 0)
        return "ERROR"
    let words = "";
    for (i = 0; i < num; i++){
        
        words += string;
    }
    return words;
};

// Do not edit below this line
module.exports = repeatString;

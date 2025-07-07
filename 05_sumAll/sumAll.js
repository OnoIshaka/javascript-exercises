const sumAll = function(a, b) {

    if ((a < 0) || (b < 0) || !(Number.isInteger(a)) || !(Number.isInteger(b))){
        return "ERROR";
    }

    let max = Math.max(a,b)
    let min = Math.min(a,b)
    let total = min;
    if (min == max){
        return total;
    }
    for (let i = min + 1; i <= max; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

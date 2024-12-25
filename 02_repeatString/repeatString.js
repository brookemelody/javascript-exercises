const repeatString = function(string, number) {
    let result = "";
    // Edge case: number is negative
    if (number < 0) {
        return "ERROR";
    }
    for (let i = 0; i < number; i++) {
        result += string;
    }    
    return result;
};

// Do not edit below this line
module.exports = repeatString;

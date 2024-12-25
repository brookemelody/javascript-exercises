const reverseString = function(string) {
    // First, break the string into an array of words using the native JavaScript array method split()
    // The delimiter here is the whitespace character
    const strArray = string.split(" ");
    // Create an empty array
    let reverseArray = [];
    let index = 0;
    // Loop through each element of strArray
    for (const strArrayElement of strArray) {
        // Initialize reversedElement as an empty String
        let reversedElement = "";
        // Loop through each letter of strArrayElement in reverse
        for (let i = strArrayElement.length - 1; i >= 0; i--) {
            // Add the character to the reversedElement String
            reversedElement += strArrayElement[i];
        }
        // Store the reversed word into the array
        reverseArray[index] = reversedElement;
        // Increment the index
        index++;
    }
    // Place the elements of reverseArray into a new array in reverse order of index
    let resultArray = [];
    index = 0;
    for (let i = reverseArray.length - 1; i >= 0; i--) {
        resultArray[index] = reverseArray[i];
        index++;
    }
    // Join the elements in resultArray back into a String
    let resultString = resultArray.join(' ');
    return resultString;
};

// Do not edit below this line
module.exports = reverseString;

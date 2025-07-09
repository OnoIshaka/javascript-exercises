const palindromes = function (sentence) {
    //replace all non-alphanumeric characters with nothing, and bring everything to lowercase
    let cleanedSentence = sentence.toLowerCase().replaceAll(/[^a-z0-9]/g, "");

    //compare now cleaned sentence with its reverse
    return cleanedSentence === cleanedSentence.split('').reverse().join('');

};

// Do not edit below this line
module.exports = palindromes;

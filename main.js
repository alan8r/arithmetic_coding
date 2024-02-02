function symbolFrequency(input) {

    // make sure the input is a string
    let inputString = input.toString();

    // grab all the characters from the string and build a set (non-repeating dictionary) of them
    let symbols = new Set(inputString.split(""));

    // set up our key/value storing object
    let freq = new Object();

    // assign all of the symbols from the set
    for (let symbol of symbols) {
        freq[symbol] = 0;
    }

    // iterate over the input string per character and 'count' each character ocurrence
    for (let chr of inputString) {
        ++freq[chr];
    }

    // return the object that contains the symbol:frequency pairs
    return freq;
}

function symbolDistributions(input) {

    // make sure input is a string
    let inputString = input.toString();

    // get the symbol frequencies
    let symbolFreq = symbolFrequency(input);

    // set up an empty object to store our symbol distribution
    let symbolDist = {}

    // iterate over all the symbols from the frequencies and assign their distribution values to the return object
    for (let symbol of Object.keys(symbolFreq)) {
        symbolDist[symbol] = symbolFreq[symbol] / inputString.length;
    }

    // return the distributions object
    return symbolDist;
}


/*
    #### TESTS ####
*/

console.log("\n##########");
let testNumber = Math.PI;
console.log(`Input (${typeof testNumber}): `, testNumber);
console.log("Symbol frequency: ", symbolFrequency(testNumber));
console.log("Symbol distribution: ", symbolDistributions(testNumber));

let testString = "Hi, my name is Alan.";
console.log("\n##########");
console.log(`Input (${typeof testString}): `, testString);
console.log("Symbol frequency: ", symbolFrequency(testString));
console.log("Symbol distribution: ", symbolDistributions(testString));

console.log("\n##########");
let testString2 = "test";
console.log(`Input (${typeof testString}): `, testString2);
console.log("Symbol frequency: ", symbolFrequency(testString2));
console.log("Symbol distribution: ", symbolDistributions(testString2));

console.log();

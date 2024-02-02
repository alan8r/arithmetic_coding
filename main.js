function symbolFrequency(input) {
    
    // make sure the input is a string
    let inputString = input.toString();
    
    // grab all the characters from the string and build a set (non-repeating dictionary) of them
    let symbols = new Set(inputString.split(""));
    
    // set up our key/value storing object
    let freq = new Object();
    
    // assign all of the symbols from the set
    for (let symbol of symbols)
        freq[symbol] = 0;

    // iterate over the input string per character and 'count' each character ocurrence
    for (let chr of inputString)
        ++freq[chr];
    
    // return the object that contains the symbol:frequency pairs
    return freq;
}


let testString = "Hi, my name is Alan.";
console.log(testString, symbolFrequency(testString));

let testNumber = Math.PI;
console.log(testNumber, symbolFrequency(testNumber))
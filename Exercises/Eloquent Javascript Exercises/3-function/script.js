// Write a Math.min function

const minimumSecond = (a, b) => {
   return a - b < 0 ? a : b 
}

console.log(minimumSecond(3,2))

// Exercise on recursion

function isEven(input) {
    input = Math.abs(input);

    if (input === 0) { 
        return true; 
    } else if (input === 1) { 
        return false; 
    } else {
       return isEven(input - 2);
    }    
}

// Bean couting exercise

function countBs(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {

        if ( string[i] === "B" ) {
            count++;
        }         
    }

    return count;
}


function countChar(string, target) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {

        if ( string[i] === target ) {
            count++;
        }         
    }

    return count;
}
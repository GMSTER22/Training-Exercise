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
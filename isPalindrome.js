// Define the isPalindrome function
var isPalindrome = function(x) {
    if(x < 0){ // check if the number is negative
        return false;
    }
    let temp = x, // Store a copy of the original number
        reverse = 0;

    while(temp > 0){
        let remainder = temp % 10;
        reverse = (reverse * 10) + remainder
        temp = Math.floor(temp / 10); // Remove the last digit from temp
    }
    return reverse === x; // Check if num and reverse are equal
};

// Call the isPalindrome function with the number 121 and log the result
console.log(isPalindrome(121));

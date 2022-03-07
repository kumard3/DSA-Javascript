function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;
  console.log(firstInteger + parseInt(secondInteger));
  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;
  console.log(firstDecimal + parseFloat(secondDecimal));
  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = "HackerRank ";
  console.log(firstString + secondString);
  // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.

  // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

  // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
}


function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 || score >= 30) {
      grade = "A"
    }
    else if (score > 20 || score >= 25) {
      grade = "B"
    }
   else if (score > 15 || score >= 20) {
      grade = "C"
    }
   else if (score > 10 || score >= 15) {
      grade = "D"
    }
   else if (score > 5 || score >= 10) {
      grade = "E"
    }
   else if (score > 0 || score >= 5) {
      grade = "F"
    }
    
    return grade;
  }

console.log(getGrade(11));

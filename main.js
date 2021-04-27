// Change the given digit element in the array
// into string representation of those digits in the same array
function numToString(){

  // Get the array from the command line
  var myArgs = process.argv.slice(2);

  // Hashmap key/value to change the numbers to strings
  var numbers = {
    1 : "One",
    2 : "Two",
    3 : "Three",
    4 : "Four",
    5 : "Five",
    6 : "Six",
    7 : "Seven",
    8 : "Eight",
    9 : "Nine",
    0 : "Zero"
  };
  var temp = [];
  // Iterate through each of the elements of the array
  for(var i=0; i<myArgs.length; i++){
    // Break each of the digits into a array for the current element
    temp = myArgs[i].split("");
    // Iterate through and check the hashmap for corresponding key/value
    // and replace the digit with the string
    for(var j=0; j<temp.length; j++){
      temp[j] = numbers[temp[j]];
    }
    // Put all the digit string into one single string
    // and empty out our temp array for the next iteration
    myArgs[i] = temp.join("");
    temp = []
  }
  // Output of the results
  console.log(myArgs.join(","));
}
// Initation of the function
numToString();

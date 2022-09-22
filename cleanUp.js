// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() {
  console.log("Hello, what is your name?");
}

askForName();
//Added semicolons and changed the function name to start with a verb

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
//added a semicolon and indented function instructions

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();
//moved the curly braces to more appropriate places, wrote out the entirety of function

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}.`);
}

average(923, 467);
//moved curly braces, aligned the function instructions, added a semicolon, wrote a function call, and moved the period into the backticks.

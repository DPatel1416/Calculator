// Initializing an empty string to store the expression
let string = "";

// Selecting all elements with class 'button' and converting the NodeList to an array
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  // Adding a click event listener to each button
  button.addEventListener('click', (e) => {
    // If the clicked button is '=', evaluate the expression and display the result
    if (e.target.innerHTML == '=') {
      string = eval(string); // Using 'eval' to calculate the expression
      document.querySelector('input').value = string; // Displaying the result in the input field
    } else if (e.target.innerHTML == 'AC') {
      // If the clicked button is 'AC', reset the string and clear the input field
      string = "";
      document.querySelector('input').value = string;
    } else {
      // For other buttons, concatenate their value to the expression string and update the input field
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});

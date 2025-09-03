const display = document.getElementById("display");
let currentInput = "";
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "AC") {
      currentInput = "";
      display.value = "";
    } 
    else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      }
       catch (err) {
        display.value = "Error";
        currentInput = "";
      }
    } 
    else if (value === "^2") {
      try {
        currentInput = Math.pow(eval(currentInput), 2).toString();
        display.value = currentInput;
      } 
      catch (err) {
        display.value = "Error";
        currentInput = "";
      }
    } 
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

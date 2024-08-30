
function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;  // Appending the value to the display's innerText
}

function clearDisplay(){
    const display = document.getElementById('display');
    display.value = '';  // Clearing the display's innerText by setting it to an empty string
}

function deleteLast(){
    let display = document.getElementById('display').value;
document.getElementById('display').value = display.substring(0, display.length - 1);  // Removing the last character from the display's innerText
}

function calculateResult(){
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}
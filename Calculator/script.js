function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.innerText += value;
}

function clearDisplay(){
    const display = document.getElementById('display');
    display.value = " ";
}
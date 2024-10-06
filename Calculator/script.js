
function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

function calculate() {
    const result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

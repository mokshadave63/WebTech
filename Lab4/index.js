function calculate() {
    try {
        const result = eval(document.calculator.display.value);
        if (result !== undefined) {
            alert('Result: ' + result);
        } else {
            alert('Error');
        }
    } catch (e) {
        alert('Error');
    }
}
function convertTemperature() {
    // Clear the previous result
    document.getElementById('convertedResult').innerHTML = '';

    // Get input values
    var temperatureInput = document.getElementById('temperatureInput').value;
    var unitSelector = document.getElementById('unitSelector');
    var selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;

    // Validate input is a number
    if (!isValidNumber(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Perform temperature conversion
    var convertedTemperature;
    if (selectedUnit === 'celsius') {
        convertedTemperature = {
            fahrenheit: (parseFloat(temperatureInput) * 9/5) + 32,
            kelvin: parseFloat(temperatureInput) + 273.15
        };
        displayResult(temperatureInput, convertedTemperature.fahrenheit.toFixed(2), '&deg Celsius', '&deg Fahrenheit');
        displayResult(temperatureInput, convertedTemperature.kelvin.toFixed(2), '&deg Celsius', '&deg Kelvin');
    } else if (selectedUnit === 'fahrenheit') {
        convertedTemperature = {
            celsius: (parseFloat(temperatureInput) - 32) * 5/9,
            kelvin: (parseFloat(temperatureInput) - 32) * 5/9 + 273.15
        };
        displayResult(temperatureInput, convertedTemperature.celsius.toFixed(2), '&deg Fahrenheit', '&deg Celsius');
        displayResult(temperatureInput, convertedTemperature.kelvin.toFixed(2), '&deg Fahrenheit', 'Kelvin');
    } else {
        convertedTemperature = {
            celsius: parseFloat(temperatureInput) - 273.15,
            fahrenheit: (parseFloat(temperatureInput) - 273.15) * 9/5 + 32
        };
        displayResult(temperatureInput, convertedTemperature.celsius.toFixed(2), 'Kelvin', '&deg Celsius');
        displayResult(temperatureInput, convertedTemperature.fahrenheit.toFixed(2), 'Kelvin', '&deg Fahrenheit');
    }
}

function isValidNumber(input) {
    return /^\d*\.?\d+$/.test(input);
}

function displayResult(input, result, fromUnit, toUnit) {
    document.getElementById('convertedResult').innerHTML +=
        input + ' ' + fromUnit + ' is ' + result + ' ' + toUnit + '.<br>';
}

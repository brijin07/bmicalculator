
// bmi calculator logic
function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var age = parseInt(document.getElementById("age").value);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        document.getElementById("result").innerHTML = "Please enter valid values.";
        return;
    }

    var bmi = weight / (height * height);

    var bmiCategory = "";
    if (gender === "male") {
        if (bmi < 20.7) {
            bmiCategory = "Underweight";
        } else if (bmi >= 20.7 && bmi < 26.4) {
            bmiCategory = "Normal weight";
        } else if (bmi >= 26.4 && bmi < 27.8) {
            bmiCategory = "Slightly overweight";
        } else if (bmi >= 27.8 && bmi < 31.1) {
            bmiCategory = "Overweight";
        } else {
            bmiCategory = "Obese";
        }
    } else if (gender === "female") {
        if (bmi < 19.1) {
            bmiCategory = "Underweight";
        } else if (bmi >= 19.1 && bmi < 25.8) {
            bmiCategory = "Normal weight";
        } else if (bmi >= 25.8 && bmi < 27.3) {
            bmiCategory = "Slightly overweight";
        } else if (bmi >= 27.3 && bmi < 32.3) {
            bmiCategory = "Overweight";
        } else {
            bmiCategory = "Obese";
        }
    }

    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>Category: " + bmiCategory;
}

// reset button
const resetAge = document.getElementById('age');
const nameInput = document.getElementById('weight');
const emailInput = document.getElementById('height');
const resultInput = document.getElementById('result');
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function() {
    // Reset the input values
    nameInput.value = '';
    emailInput.value = '';
    resultInput.innerHTML= ' ';
    resetAge.value=" " 
});
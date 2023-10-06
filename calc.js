document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const resultTitle = document.querySelector(".result-title");
    const resultText = document.querySelector(".result-text");

    const metric = document.getElementById("metric");
    const heightInput = document.getElementById("number1");
    const weightInput = document.getElementById("number2");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        calculateBMI();
    });

    function checkInputs() {
        if (heightInput.value && weightInput.value) {
            calculateBMI();
        } else {
            resultTitle.textContent = "Welcome!";
            resultText.textContent = "Enter your height and weight and you'll see your BMI result here";
        }
    }

    heightInput.addEventListener("input", checkInputs);
    weightInput.addEventListener("input", checkInputs);

    function calculateBMI() {
        let height = parseFloat(heightInput.value);
        let weight = parseFloat(weightInput.value);
        let bmi;

        bmi = metric.checked ? weight / ((height * 0.01) ** 2) : (weight / (height ** 2)) * 703;
        
        resultTitle.textContent = "Your BMI is...";
        resultText.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    }
});
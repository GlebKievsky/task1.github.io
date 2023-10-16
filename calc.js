document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const resultTitle = document.querySelector(".result-title");
    const resultText = document.querySelector(".result-text");
    const heightUnits = document.querySelector(".height-units");
    const weightUnits = document.querySelector(".weight-units");

    const metric = document.getElementById("metric");
    const imperial = document.getElementById("imperial");
    const heightInput = document.getElementById("number1");
    const weightInput = document.getElementById("number2");

    // Функция присвоения названий единиц измерения
    function units(height, weight) {
        heightUnits.textContent = height;
        weightUnits.textContent = weight;
    }
  
    // Обработчики событий для определения формата единиц измерения 
    imperial.addEventListener("change", () => units("in", "lbs"));
    metric.addEventListener("change", () => units("cm", "kg"));

    // Запрет отправки формы по умолчанию
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        calculateBMI();
    });

    // Функция подсчёта индекса массы
    function calculateBMI() {
        let height = parseFloat(heightInput.value);
        let weight = parseFloat(weightInput.value);
        let bmi;

        bmi = metric.checked ? weight / ((height * 0.01) ** 2) : (weight / (height ** 2)) * 703;
        
        resultTitle.textContent = "Your BMI is...";
        resultText.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    }

    // Функция проверки: введено ли что-то
    function checkInputs() {
        if (heightInput.value && weightInput.value) {
            calculateBMI();
        } else {
            resultTitle.textContent = "Welcome!";
            resultText.textContent = "Enter your height and weight and you'll see your BMI result here";
        }
    }

    // Функция проверки правильности формата ввода
    function handleInput(inputElement) {
        inputElement.value = inputElement.value.replace(/[+-]/g, '');
        checkInputs();
    }

    // Обработчики событий на ввод для полей 
    heightInput.addEventListener("input", () => handleInput(heightInput));
    weightInput.addEventListener("input", () => handleInput(heightInput));

});
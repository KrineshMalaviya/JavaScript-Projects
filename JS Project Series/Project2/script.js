const form = document.querySelector("#bmiForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    const rangespace = document.querySelector("#rangespace");

    if (!height || height <= 0 || isNaN(height)) {
        result.innerHTML = `<h3 style="color: red;">Height is not valid</h3>`;
        rangespace.innerHTML = "";
        return;
    }

    if (!weight || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `<h3 style="color: red;">Weight is not valid</h3>`;
        rangespace.innerHTML = "";
        return;
    }

    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<h1>Your BMI: ${BMI}</h1>`;

    if (BMI < 18.5) {
        rangespace.innerHTML = `You are underweight. <br> <strong>Maintain a balanced diet and consult a health expert.</strong> ${BMI}`;
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        rangespace.innerHTML = `Your weight is normal. <br> <strong>Great! Keep up a healthy lifestyle.</strong> ${BMI}`;
    } else if (BMI >= 25 && BMI <= 29.9) {
        rangespace.innerHTML = `You are overweight. <br> <strong>Consider regular exercise and a balanced diet.</strong> ${BMI}`;
    } else {
        rangespace.innerHTML = `You are obese. <br> <strong>Consult a health expert for guidance.</strong> ${BMI}`;
    }
});

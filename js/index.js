const element = document.getElementById('form-object');
element.addEventListener('submit', event => {
    event.preventDefault();
    const output = document.getElementById("output-message");
    output.innerHTML = "Formularz został przesłany poprawnie. Dziękujemy!";
});
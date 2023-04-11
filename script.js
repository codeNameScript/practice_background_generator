const body = document.querySelector("body");
const inputColor1 = document.querySelector(".color1");
const inputColor2 = document.querySelector(".color2");
const inputAngle = document.querySelector(".angle");

const inputAngleShowValue = document.querySelector(".angleValue");
const showSnippet = document.querySelector(".bgSnippet");

function changeBackgroundGradient() {
    body.style.backgroundImage = `linear-gradient(${inputAngle.value}deg, ${inputColor1.value}, ${inputColor2.value}) `;
}

function changeSnippet() {
    showSnippet.textContent = body.style.backgroundImage +";";
}

function changeColorInput() {
    changeBackgroundGradient();
    changeSnippet();
}

inputColor1.addEventListener("input", changeColorInput);
inputColor2.addEventListener("input", changeColorInput);

inputAngle.addEventListener("input", function() {
    inputAngleShowValue.textContent = `${inputAngle.value}`;
    changeBackgroundGradient();
    changeSnippet();
});
window.addEventListener("load", function() {
    inputAngleShowValue.textContent = `${inputAngle.value}`;
    changeBackgroundGradient();
    changeSnippet();
});
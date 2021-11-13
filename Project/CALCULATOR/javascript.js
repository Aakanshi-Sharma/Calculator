//Selectors
const answer = document.querySelector(".answer");
const btn = document.querySelectorAll(".btn");
const btnDel = document.querySelector(".btn-del");
const btnReset = document.querySelector(".reset-btn");
const equalBtn = document.querySelector("equal-btn");
const theme2 = document.querySelector(".theme2");
const theme1 = document.querySelector(".theme1");
const theme3 = document.querySelector(".theme3");
let screenValue = "";
//Event Listener
for (item of btn) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      answer.textContent = screenValue;
    } else if (buttonText == "Reset") {
      screenValue = "";
      answer.textContent = screenValue;
    } else if (buttonText == "=") {
      answer.textContent = eval(screenValue);
    } else if (buttonText == "Del") {
      let a = answer.textContent;
      let b = a.slice(0, a.length - 1);
      screenValue = b;
      answer.textContent = screenValue;
    } else {
      screenValue += buttonText;
      answer.textContent = screenValue;
    }
  });
}
//Functions
function buttonPress() {
  answer.textContent = btn.target.value;
}
//theme1
theme1.addEventListener("click", function () {
  document.querySelector(".answer").style.color = "white";
  document.querySelector(".header").style.color = "white";
  document.querySelector("body").style.backgroundColor = "hsl(222, 26%, 31%)";
  document.querySelector(".section-1").style.backgroundColor =
    "hsl(224, 36%, 15%)";
  document.querySelector(".section-2").style.backgroundColor =
    "hsl(223, 31%, 20%)";
  document.querySelector(".btn-del").style.backgroundColor =
    "hsl(225, 21%, 49%)";
  document.querySelector(".reset-btn").style.backgroundColor =
    "hsl(225, 21%, 49%)";
});
//theme2
theme2.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "hsl(0, 0%, 90%)";
  document.querySelector(".section-1").style.backgroundColor =
    "hsl(0, 0%, 93%)";
  document.querySelector(".section-2").style.backgroundColor =
    "hsl(0, 5%, 81%)";
  document.querySelector(".btn-del").style.backgroundColor =
    "hsl(185, 42%, 37%)";
  document.querySelector(".reset-btn").style.backgroundColor =
    "hsl(185, 42%, 37%)";
  document.querySelector(".answer").style.color = "black";
  document.querySelector(".header").style.color = "black";
});
//theme 3
theme3.addEventListener("click", function () {
  document.querySelector(".answer").style.color = "hsl(52, 100%, 62%)";
  document.querySelector(".header").style.color = "white";
  document.querySelector("body").style.backgroundColor = "hsl(268, 75%, 9%)";
  document.querySelector(".section-1").style.backgroundColor =
    "hsl(268, 71%, 12%)";
  document.querySelector(".section-2").style.backgroundColor =
    "hsl(268, 71%, 12%)";
  document.querySelectorAll(".btn").style.backgroundColor =
    "hsl(281, 89%, 26%)";
  document.querySelectorAll(".btn").style.boxShadow = "hsl(285, 91%, 52%)";
  // document.querySelector(".btn-del").style.backgroundColor =
  //   "hsl(185, 42%, 37%)";
  // document.querySelector(".reset-btn").style.backgroundColor =
  //   "hsl(185, 42%, 37%)";
});

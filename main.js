let display = document.querySelector(".display");
let btn = document.querySelectorAll("button");
let specialChara = ["*", "-", "+", "/", "%","="];
let output = "";

let calculator = function (input) {
  if (input === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (input === "AC") {
    output = "";
  } else if (input === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChara.includes(input)) return;
    output += input;
  }
  display.value = output;
};

btn.forEach((e) => {
  e.addEventListener("click", (a) => {
    calculator(a.target.dataset.value);
  });
});


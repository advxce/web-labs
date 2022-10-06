let add_txt = document.getElementById("add_txt");
let txt = document.getElementById("txt");
let textarea = document.getElementById("textarea");
let btn_reset = document.getElementById("btn_reset");
let btn_submit = document.getElementById("btn_submit");
let checkBoxes = document.getElementsByClassName("chk-box");
let radio = document.getElementsByClassName("rad-box");
let addEvent = document.getElementById("add_event");

let select = document.getElementById("select");

let forCheckBox = [];

let forRadioBox = "";
let container = [];

let value = "";

function onChange() {
  value = select.value;
  let text = select.options[select.selectedIndex].text;
  console.log(text);
  console.log(value);
}

select.addEventListener("change", onChange);

function radioValueBox() {
  for (let i = 0; radio[i]; i++) {
    if (radio[i].checked) {
      radio[i].value;
      forRadioBox = radio[i].value;
    }
  }
}
console.log(forRadioBox);

console.log(radio[1].value);
function checkValueBox() {
  for (let i = 0; checkBoxes[i]; ++i) {
    if (checkBoxes[i].checked) {
      checkBoxes[i].value;
      forCheckBox.push(checkBoxes[i].value);
      container = forCheckBox.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });
    }
  }
}

for (let i = 0; checkBoxes[i]; ++i) {
  checkBoxes[i].onclick = () => {
    checkValueBox();
  };
}

for (let i = 0; radio[i]; ++i) {
  radio[i].onclick = () => {
    radioValueBox();
  };
}

let index = 0;
let state = true;
let setName = true;
textarea.value = "hello";

add_txt.addEventListener("click", () => {
  state = !state;
  index++;
  if (index === 1) {
    txt.value = "kfff";
  } else {
    setColor(state);
  }
});
btn_reset.addEventListener("click", (e) => {
  let check = prompt();
  equals(textarea.value, check);
  e.preventDefault();
});

btn_submit.addEventListener("dblclick", () => {
  console.log(forRadioBox);
  if (container !== "" && value !== "" && forRadioBox !== "") {
    alert(
      "Значения checkbox:" +
        container +
        "Значение селектора :" +
        value +
        "Значение radio: " +
        forRadioBox
    );
  } else {
    alert("Выберите все ячейки");
  }

  console.log(container);
});

function equals(first, second) {
  if (first === second) {
    alert("Равны");
    return;
  }
}

function setColor(state) {
  if (state === true) {
    txt.style.color = "red";
  } else if (state === false) {
    txt.style.color = "yellow";
  }
}

addEvent.addEventListener("click", () => {
  btn_submit.removeEventListener("submit", () => {});
  btn_submit.addEventListener("click", (event) => {
    alert(event.eventPhase);
  });
});

let json_btn = document.getElementById("change_btn");
let insert_block = document.getElementById("insert_block");
let upload_btn = document.getElementById("upload_btn");

class Info_hospital {
  constructor(fullname, date, method, fullname_medic) {
    this.fullname = fullname;
    this.date = date;
    this.method = method;
    this.fullname_medic = fullname_medic;
  }
}

// let fullname = prompt("fullname: ");
// let date = prompt("date: ");
// let method = prompt("Диагноз: ");
// let fullname_medic = prompt("fullname_medic: ");
// let infoClass = new Info_hospital(fullname, date, method, fullname_medic);

let date = new Date(Date.UTC(2014, 0, 1));

let elem;
let infoClass = new Info_hospital("Дима", date, "Кринж", 2);
let strClass = "";
json_btn.addEventListener("click", () => {
  console.log(JSON.stringify(infoClass));
  strClass = JSON.stringify(infoClass);
  insert_block.innerHTML = strClass;
});

upload_btn.addEventListener("click", () => {
  console.log(JSON.parse(strClass));
  console.log(check(infoClass));
});

function check(obj) {
  let res = "";
  let objects = Object.keys(obj);

  objects.forEach((element) => {
    if (typeof obj[element] === "string") {
      res += obj[element] + ", ";
    }
  });
  return res;
}

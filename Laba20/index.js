let i = {
  user_name: "Dima",
  user_age: "18",
};

let tr1_string = ["", " PRESENT ", " PAST ", " FUTURE "];
let tr2_string = ["+", "I dance", "I danced", "I will dance"];
let tr3_string = ["-", "I don't dance", "I didn't danced", "I'll not dance"];
let tr4_string = ["?", "Do I dance?", "Did I dance?", "Will I dance?"];

$(document).ready(function () {
  $("body").append("<ul id='list'></ul>");
  Object.keys(i).forEach((key) => {
    console.log(i[key]);
    $("#list").append(`<li>${i[key]}</li>`);
  });
  console.log($("body").children());
  let table = $("<table></table>");
  $("body").append(table);

  addTh(table, tr1_string);
  addTh(table, tr2_string);
  addTh(table, tr3_string);
  addTh(table, tr4_string);

  function addTh(table, mass) {
    let tr = $("<tr></tr>");
    $(tr).addClass("tr");
    $(table).append(tr);

    for (i of mass) {
      $(tr).append(`<th>${i}</th>`);
      $("th").addClass("th");
    }
  }

  let state = true;

  $("tr:first-child>th").on("mouseenter", function () {
    alert($(this).text());
  });
  $("#check").on("click", function () {
    console.log("check");
    $("form").valid();
  });
  $(".outer").on("click", function () {
    state
      ? $(".outer").css({
          "justify-content": "flex-end",
        }) &&
        $("label").css({ left: "10px" }) &&
        $("label").text("off")
      : $(".outer").css({
          "justify-content": "flex-start",
        }) &&
        $("label").css({ left: "40px" }) &&
        $("label").text("on");

    state = !state;
  });
});

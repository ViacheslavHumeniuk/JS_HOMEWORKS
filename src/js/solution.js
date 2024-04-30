"use strict";
const answers = document.getElementById("answers");
const polls = document.getElementById("polls");
document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();
  const answerVariant = document.createElement("input");
  document.getElementById("answers").appendChild(answerVariant);
});
document.getElementById("poll").addEventListener("click", function (event) {
  event.preventDefault();
  if (
    document.getElementsByTagName("input")[0].value === "" ||
    answers.children.length < 2 ||
    answers.children[0].value === "" ||
    answers.children[1].value === ""
  ) {
    throw new Error("заповніть всі поля");
  } else {
    const h2 = document.createElement("h2");
    const ol = document.createElement("ol");

    h2.textContent = document.getElementsByTagName("input")[0].value;

    for (let i = 0; i < answers.children.length; i++) {
      const li = document.createElement("li");
      li.textContent = answers.children[i].value;
      ol.appendChild(li);
    }

    polls.appendChild(h2);
    polls.appendChild(ol);
  }
});

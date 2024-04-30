"use strict";

document
  .getElementById("registration")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    auditionFunction(data);
  });
const auditionFunction = function (data) {
  if (!data.name || !data.email || !data.password) {
    document.getElementsByTagName("p")[0].innerHTML =
      "Please fill in all fields";
  } else {
    document.getElementsByTagName("p")[0].innerHTML = "Registration successful";
  }
};

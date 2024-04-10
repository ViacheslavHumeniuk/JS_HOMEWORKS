"use strict";
const isEven = function () {
  const numberInput = document.getElementById("numberInput").value;
  if (numberInput % 2 === 0) {
    alert("Число парне");
  } else {
    alert("Число непарне");
  }
};

"use strict";

const saveElem = document.getElementById("saveElem");

const saveNotes = () => {
  const inputTxt = document.getElementById("textInput").value;
  if (inputTxt === "" || inputTxt.trim() === "") {
    alert("Please enter a value");
  }
  const elem = document.createElement("p");
  elem.innerHTML = inputTxt;
  saveElem.prepend(elem);
};

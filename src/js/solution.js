
const ulElement = document.getElementById('ulId');
const liElements = ulElement.getElementsByTagName('li');
const textArray = []
for (const li of liElements) {    console.log(li.textContent);
    console.log(liElements.length)    }
for (const li of liElements) {
    textArray.push(li.textContent)}
console.log(textArray)

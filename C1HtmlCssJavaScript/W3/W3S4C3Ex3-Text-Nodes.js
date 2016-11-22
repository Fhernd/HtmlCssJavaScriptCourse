function insertNewText() {
    var newText = document.createTextNode("This is dynamically addes text!");

    var textPart = document.getElementById("myText");

    textPart.appendChild(newText);
}
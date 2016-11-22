function addElements() {
    var newItem = document.createElement("hr");

    var destParent = document.getElementsByTagName("body")[0];

    destParent.insertBefore(newItem, destParent.firstChild);
}
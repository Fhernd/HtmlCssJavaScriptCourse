function copyNodes() {
    var node = document.getElementById("myList").lastChild;
    var clone = node.cloneNode(true);

    document.getElementById("myList").appendChild(clone);
}
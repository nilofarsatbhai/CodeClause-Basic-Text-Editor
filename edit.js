function executeCommand(command) {
  document.execCommand(command, false, null);
}
document.getElementById("fontsize").addEventListener("change", function () {
  var fontSize = this.value + "px";
  document.querySelector(".content").style.fontSize = fontSize;
});

document.getElementById("fontfamily").addEventListener("change", function () {
  var fontFamily = this.value;
  document.querySelector(".content").style.fontFamily = fontFamily;
});

function makeUppercase() {
  var selection = window.getSelection().toString();
  if (selection !== "") {
    var transformedText = selection.toUpperCase();
    document.getSelection().getRangeAt(0).deleteContents();
    document
      .getSelection()
      .getRangeAt(0)
      .insertNode(document.createTextNode(transformedText));
  }
}

function makeLowercase() {
  var selection = window.getSelection().toString();
  if (selection !== "") {
    var transformedText = selection.toLowerCase();
    document.getSelection().getRangeAt(0).deleteContents();
    document
      .getSelection()
      .getRangeAt(0)
      .insertNode(document.createTextNode(transformedText));
  }
}

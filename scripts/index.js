var button = document.getElementById("enter"); // "enter" id is being targeted.
var input = document.getElementById("input"); // "input" id is being targeted.
var ul = document.querySelector("ul"); // "ul" tag is being targeted.

function inputLength() {
    return input.value.length; // returns length of value found in "input".
}

function createListElement() {
    var li = document.createElement("li"); // declares variable as an HTML element with "li" tag.
    li.appendChild(document.createTextNode(input.value)); // creates a text node for "li" variable with the value of "input".
    ul.appendChild(li); // appends "ul" tag with "li" variable
}

li.addEventListener("click", function() {
    // creates a boolean that toggles the done class on li.
    // if the list item is clicked this toggles the done class.
    var finished = this.class.toggle("done");
    // creates a remove button for the finished item.
    var removeButton = document.createElement("button");
    removeButton.classList.add("deleteButton");

    // if the list item is clicked (li add event listener) then
    // finished is true
    if (finished) {
        
    }
})
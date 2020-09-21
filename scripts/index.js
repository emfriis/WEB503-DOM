var button = document.getElementById("enter"); // "enter" id is being targeted.
var input = document.getElementById("input"); // "input" id is being targeted.
var ul = document.querySelector("ul"); // "ul" tag is being targeted.

function inputLength() {
    return input.value.length; // returns length of value found in "input" variable.
}

/* function createListElement() {
    var li = document.createElement("li"); // declares variable with "li" tag.
    li.appendChild(document.createTextNode(input.value)); // creates a text node for "li" variable with the value of "input" variable.
    ul.appendChild(li); // appends "ul" tag with "li" variable

    li.addEventListener("click", function() {
        // creates a boolean that toggles the done class on li.
        // if the list item is clicked this toggles the done class.
        var finished = this.class.toggle("done"); 
        // creates a remove button for the finished item.
        var removeButton = document.createElement("button"); // creates a variable with "button" tag.
        removeButton.classList.add("deleteButton"); // Adds a class to "removeButton" variable.

        // if the list item is clicked (li add event listener) then
        // finished is true
        if (finished) {
            removeButton.appendChild(document.createTextNode("remove")); // creates a text node for "removeButton" variable as a child of "li".
            removeButton.classList = "deleteButton";
            li.appendChild(removeButton);

            removeButton.addEventListener("click", function () { // triggers on click of "removeButton".
                this.parentElement.remove(); // removes parent node.
            });
        } else {
            this.getElementByClassName("deleteButton")[0].remove(); // deletes node with class "deleteButton".
        }
    });
    // revert input value back to nothing
    input.value = ""
} */

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	li.addEventListener("click", function () {
		// creates a boolean that toggles the done class on li:
		// if the list item is clicked this toggles the done class
		var finished = this.classList.toggle("done");
		// creates a remove button for the finished item:
		var removeButton = document.createElement("button");
		removeButton.classList.add("deleteButton");

		// if the list item is clicked (li add event listener ) then
		// finished is true
		if (finished) {
			removeButton.appendChild(document.createTextNode("remove"));
			removeButton.classList = "deleteButton";
			li.appendChild(removeButton);

			removeButton.addEventListener("click", function () {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}
	});
	// revert input value back to nothing
	input.value = "";
}


function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterPress(event) { // targets event.
    if (inputLength > 0 && event.keyCode === 13) { // keyCode is the ascii for "enter" on keyboard.
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick); // Listen to execute after button clicked.

input.addEventListener("keypress", addListAfterPress); // Listen to execute after enter pressed.
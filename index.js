// Remove the <main id="main"> element
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id to "victory"
newHeader.id = "victory";

// Set the text content
newHeader.textContent = "Kurui is the champion";

// Append the new header to the body
document.body.append(newHeader);


// Change title for all site section list items

const elementsToChange = document.querySelectorAll('.site-section');

for( let i = 0; i < elementsToChange.length; i++ ) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Website Section __";
    currentElement.style.paddingLeft = '20px';
    currentElement.style.fontWeight = '900';
}

// Grab input field and inject text into paragraph

const inputField = document.querySelector('.input-to-copy');
const paragraphNew = document.querySelector('.p-to-copy-to');

inputField.addEventListener("keyup", function() {
    paragraphNew.innerText = inputField.value;
});


// Event listener for all buttons in a group

document.querySelector('.button-container').addEventListener('click', function(event) {
    //if (event.target.tagName === 'button') {
        alert(`You clicked on button ${event.target.innerText}`);
   // }
   // event.stopPropagation();
});
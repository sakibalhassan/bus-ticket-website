
const elements = document.querySelectorAll('.changeable');

// Add click event
elements.forEach(element => {
    element.addEventListener('click', function () {

        this.style.backgroundColor = 'green';

    });
});
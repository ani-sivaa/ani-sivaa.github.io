// JavaScript animations for wow factor

var i = 0;
var txt = '<"Anirudh Sivakumar | Software Developer">'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var date = Date()

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("code typing animation").textContent += txt.charAt(i);

        i++;
        setTimeout(typeWriter, speed);
        
    }
    
    
}

// Call the typeWriter function when the page is loaded
window.onload = typeWriter;

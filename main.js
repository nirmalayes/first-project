const sections = document.querySelectorAll('section');

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the section is in view
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Once a section is in view, you can stop observing it (optional)
            observer.unobserve(entry.target);
            document.getElementById("sendbutton").addEventListener("click", function() {
                console.log("Button clicked");
              });
        }
    });
}, {
    threshold: 0.2 // Adjust the threshold to when the animation should trigger (20% in view)
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

const form=document.querySelector('form');
const emailInput=document.getElementById('email');

form.addEventListener('submit', function(event) {
    if(!emailInput.value.includes('@')) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});
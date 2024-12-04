window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    
    parallaxSections.forEach((section) => {
        const offset = window.scrollY;
        const speed = section.getAttribute('data-speed');
        const yPos = -(offset * speed);
        
        section.style.backgroundPosition = 'center ' + yPos + 'px';
    });
});
function updateGreeting() {
    const greetingElement = document.querySelector('.greeting-message');
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingElement.textContent = "Good Morning, Love!";
    } else if (hour < 18) {
        greetingElement.textContent = "Good Afternoon, Sweetheart!";
    } else {
        greetingElement.textContent = "Good Evening, My Heart!";
    }
}

updateGreeting();  // Update on load
window.addEventListener('scroll', () => {
    document.body.classList.add('scrolled');
});
document.getElementById('about-btn').addEventListener('click', function() {
    // Customize this text to whatever you want to show when the About button is clicked
    var aboutText = "This is a special website for us. Here, you'll find everything from our favorite memories together to our future plans. I love you more every day!";

    // Get the container and element where the text will be displayed
    var aboutTextContainer = document.getElementById('about-text-container');
    var aboutTextElement = document.getElementById('about-text');
    
    // Display the custom About Text
    aboutTextElement.textContent = aboutText;
    aboutTextContainer.style.display = 'block'; // Make the text container visible

    // Create a new speech synthesis object to read the custom text aloud
    var speech = new SpeechSynthesisUtterance(aboutText);
    
    // Optional settings for the speech (rate, pitch, voice)
    speech.lang = 'en-US'; // Language
    speech.rate = 1; // Speed (1 is normal, less than 1 is slower, greater than 1 is faster)
    speech.pitch = 1; // Pitch (1 is normal, less than 1 is lower, greater than 1 is higher)
    
    // Play the speech
    window.speechSynthesis.speak(speech);
});
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
  
    for (const link of links) {
      link.addEventListener("click", smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
      });
    }
  });
  window.addEventListener('scroll', function() {
    const buttons = document.querySelectorAll('.button-container');
    
    buttons.forEach(function(buttonContainer) {
        const buttonPosition = buttonContainer.getBoundingClientRect().top;

        // Check if the button container is in the viewport
        if (buttonPosition < window.innerHeight) {
            buttonContainer.style.opacity = 1;
            buttonContainer.style.transform = 'translateY(0)'; // Slide the button into view
        }
    });
});

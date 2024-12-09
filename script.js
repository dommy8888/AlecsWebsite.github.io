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
    var aboutText = `
    This website is more than just a project—it's a piece of my heart, a gift that I’ve put together with care, attention, and, most importantly, love. As we navigate through the ups and downs of life, I wanted to create something just for us, a space that holds our memories, dreams, and the beautiful future we’re going to build together.
    
    Every image, every word, every little detail here has a purpose. It's a reflection of the love I feel for you, a constant reminder of how much you mean to me. This isn't just about the website or the design—it's about us, our journey, and everything that makes our connection so special.
    
    Every time I look at you, I realize how incredibly lucky I am to have found someone like you. You are my confidant, my partner, my greatest adventure. You’ve stood by me through thick and thin, and the love we share only grows stronger with each passing day. This space is a testament to that love, a way for me to express the things I sometimes can’t find the words for.
    
    As we continue to walk this path together, I wanted to give you something that reminds us of all we’ve built so far. From the quiet moments of understanding to the loud bursts of laughter, this site is our story—our love story. I hope it brings you as much joy to explore it as it brought me to create it.
    
    I love you more than words can say, and I’m beyond excited for the future we’re creating. Every day with you is a gift, and this is just one small way of showing you how much you mean to me. This is my Christmas gift to you, a token of my affection and a promise to continue cherishing you for the rest of our lives.
`;
var aboutTextContainer = document.getElementById('about-text-container');
var aboutTextElement = document.getElementById('about-text');

// Create a new speech synthesis object
var speech = new SpeechSynthesisUtterance(aboutText);

// Optional settings for the speech (rate, pitch, voice)
speech.lang = 'en-US'; // Language
speech.rate = 1; // Speed (1 is normal, less than 1 is slower, greater than 1 is faster)
speech.pitch = 1; // Pitch (1 is normal, less than 1 is lower, greater than 1 is higher)

// Optional: Choose a different voice (if available)
var voices = window.speechSynthesis.getVoices();
speech.voice = voices.find(voice => voice.name === "Google US English"); // Example voice
if (!speech.voice) speech.voice = voices[0]; // Default to the first available voice if the selected one isn't found

// Variable to track the visibility state and speech status
var isTextVisible = false;
var isSpeechPlaying = false;

document.getElementById('about-btn').addEventListener('click', function() {
    if (isTextVisible) {
        // Hide the text and stop the speech
        aboutTextContainer.style.display = 'none';
        window.speechSynthesis.cancel(); // Stop the speech synthesis
        isSpeechPlaying = false;
    } else {
        // Display the custom About Text
        aboutTextElement.innerHTML = aboutText; // Set the inner HTML for the text
        aboutTextContainer.style.display = 'block'; // Make the text container visible
        
        // Play the speech
        window.speechSynthesis.speak(speech);
        isSpeechPlaying = true;
    }
    
    // Toggle the visibility state
    isTextVisible = !isTextVisible;
});

// Ensure the voices are loaded before using them
window.speechSynthesis.onvoiceschanged = function() {
    // Optionally, log available voices to the console
    const voices = window.speechSynthesis.getVoices();
    console.log(voices); // See which voices are available in your browser
};
const buttons = document.querySelectorAll('.btn-1-2');

// Function to add 'visible' class to buttons

// Function to add 'visible' class to buttons with animation
function showButtons() {
    buttons.forEach(button => {
        button.classList.add('visible');
        button.style.animation = 'fadeIn 1s ease-in-out'; // Add animation
    });
}

// Show buttons on load
showButtons();

// Show buttons on scroll
window.addEventListener('scroll', showButtons);

// Ensure the voices are loaded before using them
window.speechSynthesis.onvoiceschanged = function() {
    // Optionally, log available voices to the console
    const voices = window.speechSynthesis.getVoices();
    console.log(voices); // See which voices are available in your browser
};
});
const jsConfetti = new JSConfetti();
let songPlayed = false;

// Get references to the buttons and response area
const responseArea = document.querySelector('.response-area');
const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');

// Event listener for "Yes" button
yesButton.addEventListener('click', function () {
    // Play the song only once
    if (!songPlayed) {
        const audio = new Audio("C:\\Users\\domin.DOMINICKSPC\\Downloads\\Kiss Me.mp3");
        audio.play();
        songPlayed = true; // Prevent replay
    }

    // Update the response area with the "Yes" GIF
responseArea.innerHTML = `<iframe src="https://giphy.com/embed/iSTjVNwhlqMnCQDjRV" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                          <p><a href="https://giphy.com/stickers/bunny-rabbit-vobot-iSTjVNwhlqMnCQDjRV">via GIPHY</a></p>
                          <p>So when's our next date?</p>
                          <input type="date" id="dateInput" />`;

// Add confetti
jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 150,
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ffcc00'], // Confetti colors
});

// Handle date input selection
const dateInput = document.getElementById('dateInput');
dateInput.addEventListener('change', function () {
    // Replace the content with GIF and text after selecting a date
    responseArea.innerHTML = `
        <iframe src="https://giphy.com/embed/wG1i2KJyB3zlC" width="480" height="365" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p>y'all think wifey gon fw this?</p>
    `;
});
});

// Event listener for "No" button
noButton.addEventListener('click', function () {
    // Array of rejection messages
    const rejectionMessages = [
        "Ouch, that stung a little. But hey, rejection builds character!",
        "No? Are you sure? I showered and everything for this.",
        "Wow, okay. Guess I'll just go cry in the corner now. BRB.",
        "Rejected. But it’s fine, my dog thinks I’m awesome.",
        "No? That’s illegal in 17 states, just so you know.",
        "That’s cool, I was planning to eat ice cream and watch sad movies anyway.",
        "Plot twist: you secretly meant yes but hit the wrong button. Right?",
        "Dang, now I have to return the wedding cake.",
        "No worries, I’m just one step closer to becoming a supervillain.",
        "Well, that’s another story to tell my therapist. Thanks!",
        "Is this because of the time I accidentally ignored your text? Be honest.",
        "Wow, hard pass, huh? Guess I'll update my LinkedIn to 'Professional Rejection Expert.'",
        "That’s okay. I’ll just adopt 17 cats and live happily ever after.",
        "Are you sure? This is a limited-time offer!",
        "Fine. But you’re really going to miss out on my epic playlist-making skills.",
        "No? That’s okay, I’ll just tell everyone you like pineapple on pizza.",
        "Rejection accepted. Commencing emotional shutdown sequence…",
        "It’s fine, it’s fine. I’ll just change your mind with memes later."
    ];

    // Select a random rejection message
    const randomMessage = rejectionMessages[Math.floor(Math.random() * rejectionMessages.length)];

    // Update the response area with the rejection message and "No" GIF
    responseArea.innerHTML = `<p>${randomMessage}</p>`;
    responseArea.innerHTML += `<iframe src="https://giphy.com/embed/sWFJFVkToKxVU8cOcw" width="480" height="406" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                                <p><a href="https://giphy.com/stickers/couple-chibi-jinzhan-sWFJFVkToKxVU8cOcw">via GIPHY</a></p>`;

    // Increase the size of the "Yes" button slightly
    const currentScale = parseFloat(yesButton.style.transform.replace('scale(', '').replace(')', '')) || 1;
    yesButton.style.transform = `scale(${currentScale + 0.1})`;
});

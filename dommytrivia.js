// Function to handle answer selection
document.querySelectorAll('.question').forEach((question) => {
    question.addEventListener('click', (event) => {
        const clickedButton = event.target;

        // Ensure a radio button is clicked
        if (clickedButton.tagName === 'INPUT' && clickedButton.type === 'radio') {
            // Remove the 'selected' class from all labels in the question
            question.querySelectorAll('label').forEach((label) => {
                label.classList.remove('selected');
            });

            // Add the 'selected' class to the label of the clicked radio button
            const selectedLabel = clickedButton.parentElement;
            selectedLabel.classList.add('selected');
        }
    });
});

// Function to handle submit button
function submitAnswers() {
    let totalQuestions = document.querySelectorAll('.question').length;  // Total number of questions
    let correctAnswers = 0;
    let detailedResults = '';

    // Loop through each question
    document.querySelectorAll('.question').forEach((question, index) => {
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');  // Get selected answer
        
        if (selectedAnswer) {
            // Check if the selected answer is the correct one
            if (selectedAnswer.getAttribute('data-correct') === "true") {
                correctAnswers++;  // Increment score if answer is correct
                question.querySelectorAll('label').forEach(label => {
                    if (label.querySelector('input').value === selectedAnswer.value) {
                        label.style.backgroundColor = 'green'; // Correct answer turns green
                    }
                });
            } else {
                question.querySelectorAll('label').forEach(label => {
                    if (label.querySelector('input').value === selectedAnswer.value) {
                        label.style.backgroundColor = 'red'; // Incorrect answer turns red
                    }
                });
            }
        } else {
            detailedResults += `<p>You did not answer question ${index + 1}.</p>`;
        }
    });

    // Calculate the score and percentage
    let percentage = (correctAnswers / totalQuestions) * 100;

    // Display results
    document.getElementById("score").innerText = `${correctAnswers} out of ${totalQuestions}`;
    document.getElementById("detailed-results").innerHTML = detailedResults + `<p>Your score is ${percentage.toFixed(2)}%.</p>`;

    // Show the results section
    document.getElementById("results").style.display = "block";
}
let currentQuestion = 1;
const totalQuestions = 50; // Update this to your total number of questions

function updateProgressBar() {
    const progress = (currentQuestion / totalQuestions) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
}

window.onload = function() {
    // Start audio autoplay when the page loads
    const iframe = document.getElementById("audio-player");
    iframe.src = iframe.src + "&autoplay=1"; // Ensure autoplay is enabled

    // Call this function every time a question is answered (or when you navigate to the next question)
    updateProgressBar();
};

// Stop the audio when the submit button is clicked
document.getElementById("submit-btn").addEventListener("click", function() {
    const iframe = document.getElementById("audio-player");
    iframe.src = "";  // Stop the audio by clearing the iframe source
    alert("Thank you for submitting your answers!");
});

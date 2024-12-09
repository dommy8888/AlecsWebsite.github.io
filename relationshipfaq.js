function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

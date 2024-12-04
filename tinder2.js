// Get all the elements
const cards = document.querySelectorAll('.card');
const acceptButton = document.querySelector('.accept');
const rejectButton = document.querySelector('.reject');

// Index of the current card
let currentIndex = 0;

// Function to handle the swipe left or right actions
function swipeCard(direction) {
    const currentCard = cards[currentIndex];
    const swipeClass = direction === 'right' ? 'swiped-right' : 'swiped-left';
    const translateX = direction === 'right' ? '100%' : '-100%';

    // Add the class for swipe effect
    currentCard.classList.add(swipeClass);

    // Move the card off the screen
    currentCard.style.transform = `translateX(${translateX})`;

    // Wait for the animation to finish, then remove the current card
    setTimeout(() => {
        currentCard.classList.remove(swipeClass); // Clean up the animation class
        currentCard.style.display = 'none'; // Hide the card
        currentCard.style.transform = ''; // Reset the transform property
        currentIndex++; // Move to the next card

        // Show the next card
        if (currentIndex < cards.length) {
            const nextCard = cards[currentIndex];
            nextCard.style.display = 'block';
            nextCard.classList.add('card-enter'); // Add enter animation
        }
    }, 300); // Wait for the swipe animation to complete before removing the card
}

// Handle swipe with buttons
acceptButton.addEventListener('click', () => {
    swipeCard('right'); // Swipe right for accept
});

rejectButton.addEventListener('click', () => {
    swipeCard('left'); // Swipe left for reject
});

// Add swipe left and right with mouse drag
let startX;
let isSwiping = false;

cards.forEach((card, index) => {
    if (index === currentIndex) {
        card.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isSwiping = true;
            card.style.transition = 'none'; // Disable transition during swipe
        });

        card.addEventListener('mousemove', (e) => {
            if (!isSwiping) return;
            const currentX = e.clientX;
            const diff = currentX - startX;

            // Move the card as the mouse moves
            card.style.transform = `translateX(${diff}px)`;
        });

        card.addEventListener('mouseup', (e) => {
            if (!isSwiping) return;
            isSwiping = false;

            const currentX = e.clientX;
            const diff = currentX - startX;

            // Determine if the card was swiped left or right
            if (diff > 100) {
                swipeCard('right'); // Swipe right (accepted)
            } else if (diff < -100) {
                swipeCard('left'); // Swipe left (rejected)
            } else {
                // Return the card to its original position
                card.style.transform = 'translateX(0)';
            }
        });

        card.addEventListener('mouseleave', () => {
            if (isSwiping) {
                // Return the card to its original position if mouse leaves
                card.style.transform = 'translateX(0)';
                isSwiping = false;
            }
        });
    }
});

// Show the first card when the page loads
window.addEventListener('load', () => {
    if (cards.length > 0) {
        cards[currentIndex].style.display = 'block';
        cards[currentIndex].classList.add('card-enter'); // Add the animation for the first card
    }
});

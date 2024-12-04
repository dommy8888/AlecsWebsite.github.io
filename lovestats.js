// Set the start date for when you've been together
const startDate = new Date('October 26, 2024 12:00:00');

// Function to get the next occurrence of a specific date (for both birthdays)
function getNextBirthday(targetMonth, targetDay) {
    const currentYear = new Date().getFullYear();
    let targetDate = new Date(currentYear, targetMonth - 1, targetDay); // Month is zero-based in JavaScript

    // If the target date has passed this year, update the target to the next year
    if (targetDate < new Date()) {
        targetDate.setFullYear(currentYear + 1);
    }

    return targetDate;
}

// Set the dates for the birthdays (no year)
const dominicksBirthday = getNextBirthday(12, 27); // December 27
const alecsBirthday = getNextBirthday(4, 17); // April 17

// Function to update the time together
function updateTimeTogether() {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate; // Calculate the difference in milliseconds

    // Calculate months, weeks, days, hours, minutes, and seconds
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("time-together").innerHTML =
        `Time Together: ${months} months | ${weeks} weeks | ${days} days | ${hours} hours | ${minutes} minutes | ${seconds} seconds`;
}

// Function to update the countdown for Dominick's birthday
function updateDominicksBirthdayCountdown() {
    const currentDate = new Date();
    const timeDifference = dominicksBirthday - currentDate; // Calculate the difference in milliseconds

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("dom-birthday-countdown").innerHTML =
        `Dominick's Birthday Countdown: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

// Function to update the countdown for Alec's birthday
function updateAlecsBirthdayCountdown() {
    const currentDate = new Date();
    const timeDifference = alecsBirthday - currentDate; // Calculate the difference in milliseconds

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("alec-birthday-countdown").innerHTML =
        `Alec's Birthday Countdown: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

// Update all the timers every second
setInterval(function() {
    updateTimeTogether();
    updateDominicksBirthdayCountdown();
    updateAlecsBirthdayCountdown();
}, 1000);

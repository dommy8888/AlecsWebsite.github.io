// Array containing the options for the wheel
const options = [
    { fillStyle: '#3369E8', text: 'First Date Do-Over' },
    { fillStyle: '#D50F25', text: 'Compliment Challenge' },
    { fillStyle: '#EEB211', text: 'Love Letter Exchange' },
    { fillStyle: '#009925', text: 'Favorite Memory Reenactment' },
    { fillStyle: '#3369E8', text: 'Romantic Dance' },
    { fillStyle: '#D50F25', text: 'Cooking Together' },
    { fillStyle: '#EEB211', text: 'Future Dreams' },
    { fillStyle: '#009925', text: 'Secret Date' },
    { fillStyle: '#3369E8', text: 'Truth or Dare' },
    { fillStyle: '#D50F25', text: 'Romantic Movie Night' },
    { fillStyle: '#EEB211', text: 'Photo Challenge' },
    { fillStyle: '#009925', text: 'Memory Lane' },
    { fillStyle: '#3369E8', text: 'Love Quiz' },
    { fillStyle: '#D50F25', text: 'Spa Night' },
    { fillStyle: '#EEB211', text: 'DIY Gifts' },
    { fillStyle: '#009925', text: 'Plan a Dream Vacation' },
    { fillStyle: '#3369E8', text: 'Truthful Confession' },
    { fillStyle: '#D50F25', text: 'Candlelit Dinner' },
    { fillStyle: '#EEB211', text: 'Love Song' },
    { fillStyle: '#009925', text: 'Fun Fortune' },
    { fillStyle: '#3369E8', text: 'Couple\'s Yoga' },
    { fillStyle: '#D50F25', text: 'Create a Vision Board' },
    { fillStyle: '#EEB211', text: 'Love Jar' }
];

// Setup for the canvas and its context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = canvas.width / 2;
const numOptions = options.length;
const arcSize = (2 * Math.PI) / numOptions;
let startAngle = 0;

// Draw the wheel with each section of the wheel being a colored slice
function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < numOptions; i++) {
        const angle = startAngle + i * arcSize;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, angle, angle + arcSize);
        ctx.closePath();
        ctx.fillStyle = options[i].fillStyle;
        ctx.fill();
        ctx.stroke();
    }
}

// Spin the wheel when triggered by the user
function spinWheel() {
    const spinAngle = Math.random() * 10 + 10;
    const spinTimeTotal = 5000; // 5 seconds total spin time
    let spinTime = spinTimeTotal;
    let currentAngle = 0;

    function rotateWheel() {
        currentAngle += (spinAngle * Math.PI / 180);
        startAngle += (spinAngle * Math.PI / 180);
        drawWheel();
        if (spinTime > 0) {
            requestAnimationFrame(rotateWheel);
            spinTime -= 30;
        } else {
            const selectedOption = Math.floor((currentAngle / arcSize) % numOptions);
            revealText(options[selectedOption].text);
        }
    }
    rotateWheel();
}

// Function to display text one character at a time, like a typewriter effect
function revealText(text) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            resultDiv.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
}

// Event listeners for the canvas and the button
canvas.addEventListener('click', spinWheel);
document.getElementById('spinButton').addEventListener('click', spinWheel);

// Initial call to draw the wheel
drawWheel();

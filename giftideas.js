const giftIdeas = [
    "A personalized photo album",
    "A smart home assistant (like Amazon Echo or Google Nest)",
    "A subscription to a book club or audiobook service",
    "A fitness tracker watch",
    "A custom-made mug with a personal message",
    "A cozy blanket with their name embroidered",
    "A gift card to their favorite store or restaurant",
    "A DIY craft kit or art supplies",
    "A subscription box (coffee, snacks, etc.)",
    "A pair of wireless headphones or earbuds",
    "A handwritten love letter",
    "A custom piece of jewelry (necklace, bracelet, ring)",
    "A romantic weekend getaway",
    "A personalized music playlist of your favorite songs",
    "A framed photograph of a meaningful memory",
    "A heartfelt scrapbook of your relationship",
    "A custom illustration or painting of the two of you",
    "A couple's cooking or baking class",
    "A star map showing the night sky on a significant date",
    "A scented candle with a romantic fragrance",
    "A personalized watch with an engraved message",
    "A beautiful bouquet of their favorite flowers",
    "A surprise dinner at a fancy restaurant",
    "A couple's massage or spa day",
    "A cozy pair of matching pajamas",
    "A handwritten journal of your favorite moments together",
    "A custom puzzle of a picture of the two of you",
    "A vintage vinyl record of their favorite band or artist",
    "A weekend road trip to a special place",
    "A romantic picnic set with their favorite snacks",
    "A personalized leather wallet or handbag",
    "A set of engraved wine glasses or a bottle of fine wine",
    "A home-cooked candlelit dinner with a special menu",
    "A custom-made photo book of your adventures together",
    "A pair of personalized socks with fun designs",
    "A love lock to symbolize your commitment",
    "A journal with shared dreams and goals for the future",
    "A beautiful box of chocolates or truffles",
    "A keepsake box for storing memories of your relationship",
    "A couple's journal to write down thoughts and dreams",
    "A love quote wall art print",
    "A personalized phone case with a meaningful photo",
    "A surprise date night with no plans, just fun activities",
    "A necklace with a pendant symbolizing your love",
    "A handwritten poem or song for them",
    "A romantic movie night with their favorite films",
    "A surprise weekend at a cozy cabin or Airbnb",
    "A beautiful scarf or shawl in their favorite color",
    "A DIY gift like a homemade candle or bath bomb",
    "A couple’s adventure book to plan future experiences",
    "A custom map marking all the places you've been together"
];
// Get references to the HTML elements
const showGiftButton = document.getElementById('show-gift');
const giftMessage = document.getElementById('gift-message');

// Event listener for the button
showGiftButton.addEventListener('click', function () {
    // Select a random gift idea from the array
    const randomGift = giftIdeas[Math.floor(Math.random() * giftIdeas.length)];

    // Display the gift idea in the message area
    giftMessage.innerHTML = `<p>Your random gift idea: <strong>${randomGift}</strong></p>`;
});

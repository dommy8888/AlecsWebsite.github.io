const categories = {
    "living-room": {
        title: "Living Room",
        description: "A cozy living room with plush sofas, elegant decor, and large windows that let in plenty of natural light.",
        image: "living-room.jpg",
    },
    "kitchen": {
        title: "Kitchen",
        description: "A modern kitchen with state-of-the-art appliances, marble countertops, and a large island for family gatherings.",
        image: "kitchen.jpg",
    },
    "bedroom": {
        title: "Bedroom",
        description: "A tranquil bedroom with a king-sized bed, soft lighting, and a beautiful view through floor-to-ceiling windows.",
        image: "bedroom.jpg",
    },
    "outdoor": {
        title: "Outdoor",
        description: "A spacious outdoor patio with a pool, lush greenery, and a cozy seating area for evenings under the stars.",
        image: "outdoor.jpg",
    },
    "bathroom": {
        title: "Bathroom",
        description: "A spa-like bathroom with a luxurious tub, rainfall shower, and soft lighting for ultimate relaxation.",
        image: "bathroom.jpg",
    },
    "home-office": {
        title: "Home Office",
        description: "A sleek and organized home office with ample workspace, ergonomic furniture, and natural light.",
        image: "home-office.jpg",
    },
    "home-gym": {
        title: "Home Gym",
        description: "A fully-equipped home gym with modern workout machines, free weights, and inspiring decor.",
        image: "home-gym.jpg",
    },
    "dining-room": {
        title: "Dining Room",
        description: "An elegant dining room with a grand table, chic lighting, and beautiful table settings for family dinners.",
        image: "dining-room.jpg",
    },
    "library": {
        title: "Library",
        description: "A serene library filled with wooden shelves, cozy armchairs, and a ladder to reach your favorite books.",
        image: "library.jpg",
    },
    "garden": {
        title: "Garden",
        description: "A lush garden with vibrant flowers, a quaint seating area, and a small fountain for a peaceful escape.",
        image: "garden.jpg",
    },
    "music-studio": {
        title: "Music Studio",
        description: "A state-of-the-art music studio equipped with high-end recording gear, instruments, and soundproof walls.",
        image: "music-studio.jpg",
    },
    "painting-room": {
        title: "Painting Room",
        description: "A bright and airy painting room with large windows, easels, and plenty of storage for art supplies.",
        image: "painting-room.jpg",
    },
    "gentlemens-lounge": {
        description: "A sophisticated lounge with leather armchairs, a fireplace, and a well-stocked cigar cabinet.",
        image: "gentlemens-lounge.jpg",
    },
    "bar": {
        image: "bar.jpg",
    },
    "foyer": {
        title: "Foyer",
        description: "A welcoming foyer with a grand staircase, elegant chandelier, and beautiful flooring.",
        image: "foyer.jpg",
    },
    "theatre": {
        title: "Theatre",
        description: "A private home theatre with comfortable seating, a large screen, and surround sound.",
        image: "theatre.jpg",
    },
    "painting-hall": {
        title: "Art Gallery",
        description: "A grand hall showcasing stunning paintings, high ceilings, and soft lighting to highlight the artwork.",
        image: "painting-hall.jpg",
    }
};

function showCategory(category) {
    const detailsSection = document.getElementById("details");
    const content = document.getElementById("category-content");
    const data = categories[category];
    
    content.innerHTML = `
        <h2>${data.title}</h2>
        <img src="${data.image}" alt="${data.title}">
        <p>${data.description}</p>
    `;
    detailsSection.classList.remove("hidden");
    document.getElementById("categories").classList.add("hidden");
}

function hideCategory() {
    document.getElementById("details").classList.add("hidden");
    document.getElementById("categories").classList.remove("hidden");
}

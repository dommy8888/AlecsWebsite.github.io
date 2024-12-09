let conversationHistory = [];
const botResponses = {
    greeting: {
      keywords: ["hello", "hi", "hey", "greetings"],
      response: "Hello! How can I assist you today?"
    },
    farewell: {
      keywords: ["bye", "goodbye", "see you", "later"],
      response: "Goodbye! Have a great day!"
    },
    help: {
      keywords: ["help", "assist", "support"],
      response: "I'm here to help! What do you need assistance with?"
    },
    hobby: {
      keywords: ["music", "art", "reading", "hobby"],
      response: "That's great! Hobbies make life more fun. What's your favorite one?"
    },
    custom: {
      keywords: ["custom", "edit", "modify"],
      response: "This is a customizable response. Feel free to make it your own!"
    },
    food: {
        keywords: ["food", "hungry", "eat", "snack"],
        response: "Food is life! What's your favorite dish?"
      },
      compliment: {
        keywords: ["thank you", "thanks", "you’re great", "good job"],
        response: "You're welcome! I'm here to help anytime."
      },
      love: {
        keywords: ["love", "romantic", "relationship", "crush"],
        response: "Love is a beautiful thing. Are you in love with someone special?"
      },
      study: {
        keywords: ["study", "school", "homework", "learn"],
        response: "Learning is awesome! Do you need help with your studies?"
      },
      pets: {
        keywords: ["pets", "dog", "cat", "animal"],
        response: "Pets bring so much joy! Do you have a furry friend?"
      },
      travel: {
        keywords: ["travel", "trip", "vacation", "holiday"],
        response: "Traveling sounds exciting! Where do you want to go?"
      },
      health: {
        keywords: ["health", "sick", "doctor", "medicine"],
        response: "Health is wealth! Take care of yourself."
      },
      movies: {
        keywords: ["movies", "film", "cinema", "watch"],
        response: "Movies are a great way to relax! What’s your favorite one?"
      },
      games: {
        keywords: ["games", "video games", "play", "gamer"],
        response: "Gaming is so much fun! What are you playing these days?"
      },
      technology: {
        keywords: ["tech", "technology", "computer", "gadget"],
        response: "Technology is fascinating! Any cool gadgets you're into?"
      },
      sports: {
        keywords: ["sports", "game", "team", "play"],
        response: "Sports keep us active and entertained. What's your favorite sport?"
      },
      motivation: {
        keywords: ["motivation", "inspire", "encourage", "uplift"],
        response: "Believe in yourself, and you can achieve anything!"
      },
      music: {
        keywords: ["music", "song", "band", "listen"],
        response: "Music makes life better! What are you listening to?"
      },
      dreams: {
        keywords: ["dream", "aspire", "future", "goal"],
        response: "Dream big! What’s something you’re working toward?"
      },
      jokes2: {
        keywords: ["pun", "humor", "laugh", "funny"],
        response: "Why don't scientists trust atoms? Because they make up everything!"
      },
      space: {
        keywords: ["space", "universe", "galaxy", "stars", "planets"],
        response: "The universe is so vast and full of mysteries! What's your favorite planet?"
      },
      nature: {
        keywords: ["nature", "forest", "mountains", "ocean", "trees"],
        response: "Nature is amazing! Do you have a favorite natural place to visit?"
      },
      history: {
        keywords: ["history", "past", "ancient", "civilization", "historical"],
        response: "History is full of fascinating stories! Is there a specific era you’re interested in?"
      },
      dreams: {
        keywords: ["dream", "nightmare", "sleep", "dreams", "sleeping"],
        response: "Dreams can be so weird and amazing! Do you have any memorable dreams?"
      },
      art: {
        keywords: ["art", "painting", "drawing", "sketch", "artist"],
        response: "Art is a beautiful form of expression! Do you create art, or enjoy viewing it?"
      },
      science: {
        keywords: ["science", "experiment", "research", "biology", "chemistry"],
        response: "Science is full of discoveries! What's the most interesting thing you've learned in science?"
      },
      travel: {
        keywords: ["travel", "trip", "journey", "explore", "adventure"],
        response: "The world is full of exciting places! If you could visit any country, where would you go?"
      },
      fashion: {
        keywords: ["fashion", "style", "clothing", "outfit", "design"],
        response: "Fashion is a way to express yourself! Do you have a favorite style or trend?"
      },
      technology: {
        keywords: ["tech", "gadget", "smartphone", "AI", "innovation"],
        response: "Technology is always evolving! What’s the latest tech gadget you’ve seen or want?"
      },
      philosophy: {
        keywords: ["philosophy", "thinking", "mindset", "ethics", "existence"],
        response: "Philosophy opens up so many deep questions. What philosophical ideas interest you?"
      },
      food: {
        keywords: ["recipe", "cook", "bake", "dish", "meal"],
        response: "Cooking can be so fun! Do you have a favorite recipe you'd like to share?"
      },
      space: {
        keywords: ["space", "universe", "galaxy", "stars", "planets"],
        response: "The universe is so vast and full of mysteries! What's your favorite planet?"
      },
      nature: {
        keywords: ["nature", "forest", "mountains", "ocean", "trees"],
        response: "Nature is amazing! Do you have a favorite natural place to visit?"
      },
      history: {
        keywords: ["history", "past", "ancient", "civilization", "historical"],
        response: "History is full of fascinating stories! Is there a specific era you’re interested in?"
      },
      dreams: {
        keywords: ["dream", "nightmare", "sleep", "dreams", "sleeping"],
        response: "Dreams can be so weird and amazing! Do you have any memorable dreams?"
      },
      art: {
        keywords: ["art", "painting", "drawing", "sketch", "artist"],
        response: "Art is a beautiful form of expression! Do you create art, or enjoy viewing it?"
      },
      science: {
        keywords: ["science", "experiment", "research", "biology", "chemistry"],
        response: "Science is full of discoveries! What's the most interesting thing you've learned in science?"
      },
      travel: {
        keywords: ["travel", "trip", "journey", "explore", "adventure"],
        response: "The world is full of exciting places! If you could visit any country, where would you go?"
      },
      fashion: {
        keywords: ["fashion", "style", "clothing", "outfit", "design"],
        response: "Fashion is a way to express yourself! Do you have a favorite style or trend?"
      },
      technology: {
        keywords: ["tech", "gadget", "smartphone", "AI", "innovation"],
        response: "Technology is always evolving! What’s the latest tech gadget you’ve seen or want?"
      },
      philosophy: {
        keywords: ["philosophy", "thinking", "mindset", "ethics", "existence"],
        response: "Philosophy opens up so many deep questions. What philosophical ideas interest you?"
      },
      food: {
        keywords: ["recipe", "cook", "bake", "dish", "meal"],
        response: "Cooking can be so fun! Do you have a favorite recipe you'd like to share?"
      },
      "space-time": {
        keywords: ["time", "dimension", "multiverse", "time travel", "wormhole"],
        response: "Time is such a mind-bending concept. If you could travel through time, where would you go?"
      },
      health: {
        keywords: ["health", "wellness", "fitness", "exercise", "diet"],
        response: "Health is essential! Do you have any fitness routines or health tips?"
      },
      myths: {
        keywords: ["myth", "legend", "lore", "fairy tale", "fantasy"],
        response: "Myths and legends have been passed down through generations. Do you have a favorite myth?"
      },
      pets: {
        keywords: ["pet", "dog", "cat", "rabbit", "hamster"],
        response: "Pets are so lovable! Do you have any pets, or would you like one?"
      },
      architecture: {
        keywords: ["architecture", "building", "design", "structure", "city"],
        response: "Architecture can be so creative and inspiring! Do you have a favorite building or architectural style?"
      },
      mindfulness: {
        keywords: ["mindfulness", "meditate", "breathe", "calm", "focus"],
        response: "Mindfulness can help bring peace to the mind. Do you practice mindfulness or meditation?"
      },
      dreams: {
        keywords: ["dream", "nightmare", "sleep", "dreaming", "sleeping"],
        response: "Dreams can be so interesting! Have you had any cool dreams lately?"
      },
      technology_trends: {
        keywords: ["tech trends", "latest gadgets", "innovations", "new tech", "future tech"],
        response: "Tech is always evolving! What's the latest gadget you've heard of or want to try?"
      },
      plans_for_the_day: {
        keywords: ["plans", "today", "agenda", "schedule", "plans for today"],
        response: "What’s on the agenda for today? Anything exciting?"
      },
      fitness_goals: {
        keywords: ["fitness", "workout", "exercise", "gym", "strength", "health goals"],
        response: "Staying fit is so important! Do you have any fitness goals you’re working on?"
      },
      favorite_season: {
        keywords: ["favorite season", "season", "summer", "winter", "fall", "spring"],
        response: "Each season has its charm! What's your favorite season and why?"
      },
      stress_relief: {
        keywords: ["stress", "relax", "unwind", "chill", "calm", "decompress"],
        response: "We all need to relax sometimes. How do you unwind when you're feeling stressed?"
      },
      art_creation: {
        keywords: ["create", "paint", "draw", "design", "craft", "artwork"],
        response: "Creating art is so fulfilling! Do you enjoy making art, or do you prefer to admire it?"
      },
      small_talk: {
        keywords: ["what's up", "how's it going", "how are you", "what's new"],
        response: "Not much! Just here to chat with you. What's new with you?"
      },
      favorite_book_genre: {
        keywords: ["genre", "book", "novel", "read", "reading", "story"],
        response: "Books are wonderful! What genre do you usually enjoy reading the most?"
      },
      social_media: {
        keywords: ["social media", "Instagram", "Twitter", "Facebook", "TikTok"],
        response: "Social media is everywhere these days! Do you follow anyone interesting?"
      },
      life_milestones: {
        keywords: ["milestones", "achievement", "accomplishment", "goal", "life event"],
        response: "Life milestones are important! What’s one achievement you’re really proud of?"
      },
      favorite_movie_quote: {
        keywords: ["quote", "movie", "line", "dialogue", "film quote"],
        response: "Movie quotes can be so memorable! Do you have a favorite line from a movie?"
      },
      childhood_memories: {
        keywords: ["childhood", "memory", "past", "growing up", "nostalgia"],
        response: "Childhood memories are so special! Do you have any fun memories from when you were young?"
      },
      learning_languages: {
        keywords: ["language", "learn", "speak", "language skills", "new language"],
        response: "Learning a new language is exciting! Are you learning any new languages?"
      },
      family_bonds: {
        keywords: ["family", "relative", "parent", "sibling", "family bonds"],
        response: "Family is everything! Do you spend a lot of time with your family?"
      },
      mental_health: {
        keywords: ["mental health", "self-care", "well-being", "stress", "mindfulness"],
        response: "Taking care of your mental health is so important! Do you practice any self-care rituals?"
      },
      creative_projects: {
        keywords: ["project", "create", "build", "design", "craft", "experiment"],
        response: "Creative projects are so fun! Are you working on any interesting projects right now?"
      },
      what_is_your_name: {
        keywords: ["what's your name", "who are you", "your name", "what should I call you"],
        response: "I'm your friendly chatbot! You can call me Chatbot. What's your name?"
      },
      thank_you: {
        keywords: ["thank you", "thanks", "appreciate it", "thankful"],
        response: "You're very welcome! I'm happy to help."
      },
      youre_welcome: {
        keywords: ["you're welcome", "no problem", "it's fine", "don't mention it"],
        response: "Anytime! Let me know if you need anything else."
      },
      sorry: {
        keywords: ["sorry", "my bad", "apologies", "oops"],
        response: "No worries! We all make mistakes."
      },
      question: {
        keywords: ["what", "why", "how", "where", "who", "when"],
        response: "That's a great question! What can I help you with?"
      },
      help: {
        keywords: ["help", "assist", "support", "can you help"],
        response: "Of course! I'm here to help. What do you need assistance with?"
      },
      compliments: {
        keywords: ["you’re awesome", "good job", "great work", "you're cool"],
        response: "Aw, thanks! You’re awesome too!"
      },
    default: "Bitch I'm still in development, fuck off"
  };
  
  function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    let response = botResponses.default.response; // Default response if no keyword matches
  
    // Iterate through botResponses to find a matching keyword
    for (const key in botResponses) {
      if (key !== "default") {
        const { keywords, response: botResponse } = botResponses[key];
  
        // If any keyword matches user input, return the associated response
        if (keywords.some(keyword => userMessage.includes(keyword))) {
          response = botResponse; // Set response when a keyword matches
          break;
        }
      }
    }
  
    // Store conversation history (user's message and bot's response)
    conversationHistory.push({ user: userMessage, bot: response });
  
    return response; // Return the determined response
  }
  
  // Function to handle sending messages
  function sendMessage() {
    const userInput = document.getElementById("user-input");
    const messages = document.getElementById("messages");
  
    const userMessage = userInput.value.trim();
    if (!userMessage) return; // Prevent empty messages
  
    // Add user's message to the chat
    const userMsgDiv = document.createElement("div");
    userMsgDiv.className = "message user";
    userMsgDiv.textContent = userMessage;
    messages.appendChild(userMsgDiv);
  
    // Get bot response and add it to the chat
    const botResponse = getBotResponse(userMessage);
    const botMsgDiv = document.createElement("div");
    botMsgDiv.className = "message bot";
    botMsgDiv.textContent = botResponse;
    messages.appendChild(botMsgDiv);
  
    // Clear the input field and scroll to the bottom
    userInput.value = "";
    messages.scrollTop = messages.scrollHeight;
  }
  
  // Event listener to handle the 'Send' button click
  document.getElementById("send-btn").addEventListener("click", sendMessage);
  
  // Event listener to handle 'Enter' key press
  document.getElementById("user-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
  
  // Function to show the conversation history (for debugging or logging purposes)
  function showConversationHistory() {
    conversationHistory.forEach((entry, index) => {
      console.log(`User: ${entry.user}`);
      console.log(`Bot: ${entry.bot}`);
    });
  }
const books = [
    {
    title: "Moby-Dick",
        author: "Herman Melville",
        synopsis: "A sea captain, Captain Ahab, embarks on a vengeful journey to track down the great white whale, Moby-Dick, leading to tragic consequences for his crew and himself.",
        cover: "https://example.com/moby-dick.jpg"
    },
    {
        title: "Sense and Sensibility",
        author: "Jane Austen",
        synopsis: "The story of the Dashwood sisters, Elinor and Marianne, and their contrasting approaches to love and life. Elinor is practical, while Marianne is passionate and impulsive.",
        cover: "https://example.com/sense-and-sensibility.jpg" // Replace with actual cover image URL
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        synopsis: "In early 19th-century England, the Bennet family navigates issues of marriage, love, and social status. The witty and headstrong Elizabeth Bennet meets the rich and reserved Mr. Darcy.",
        cover: "https://example.com/pride-and-prejudice.jpg" // Replace with actual cover image URL
    },
    {
        title: "Mansfield Park",
        author: "Jane Austen",
        synopsis: "Fanny Price, a poor relation, is raised by her wealthy aunt and uncle at Mansfield Park, where she faces dilemmas of love and social expectations.",
        cover: "https://example.com/mansfield-park.jpg" // Replace with actual cover image URL
    },
    {
        title: "Emma",
        author: "Jane Austen",
        synopsis: "The charming but misguided Emma Woodhouse attempts to play matchmaker among her friends and family, only to realize she is in love with someone she never expected.",
        cover: "https://example.com/emma.jpg" // Replace with actual cover image URL
    },
    {
        title: "Northanger Abbey",
        author: "Jane Austen",
        synopsis: "Catherine Morland, an impressionable young woman, visits Bath and is invited to Northanger Abbey, where her love of Gothic novels leads her to imagine intrigue in the house.",
        cover: "https://example.com/northanger-abbey.jpg" // Replace with actual cover image URL
    },
    {
        title: "Persuasion",
        author: "Jane Austen",
        synopsis: "Anne Elliot, persuaded to break off her engagement to Captain Wentworth years earlier, meets him again when he returns from naval service, and their feelings for each other are rekindled.",
        cover: "https://example.com/persuasion.jpg" // Replace with actual cover image URL
    },
    {
        title: "Lady Susan",
        author: "Jane Austen",
        synopsis: "A short epistolary novel about the charming widow Lady Susan Vernon, who is seeking a wealthy husband for herself and her daughter.",
        cover: "https://via.placeholder.com/300x450.png?text=Lady+Susan"
    },
{
        title: "Romeo and Juliet",
        author: "William Shakespeare",
        synopsis: "A tragic love story of two young lovers from feuding families in Verona, whose deaths ultimately lead to peace between their warring houses.",
        cover: "https://via.placeholder.com/300x450.png?text=Romeo+and+Juliet"
    },
    {
        title: "Macbeth",
        author: "William Shakespeare",
        synopsis: "A Scottish general's ambition leads him to treachery, murder, and his eventual downfall, spurred by the prophecies of three witches.",
        cover: "https://via.placeholder.com/300x450.png?text=Macbeth"
    },
    {
        title: "Hamlet",
        author: "William Shakespeare",
        synopsis: "Prince Hamlet seeks revenge against his uncle Claudius, who has murdered Hamlet's father, seized the throne, and married his mother.",
        cover: "https://via.placeholder.com/300x450.png?text=Hamlet"
    },
    {
        title: "Othello",
        author: "William Shakespeare",
        synopsis: "The tragedy of Othello, a Moorish general in Venice, whose life is destroyed by jealousy and manipulation at the hands of his ensign, Iago.",
        cover: "https://via.placeholder.com/300x450.png?text=Othello"
    },
    {
        title: "Julius Caesar",
        author: "William Shakespeare",
        synopsis: "The political thriller of Caesar's assassination by his trusted friends and the subsequent battle for power in Rome.",
        cover: "https://via.placeholder.com/300x450.png?text=Julius+Caesar"
    },
    {
        title: "A Midsummer Night's Dream",
        author: "William Shakespeare",
        synopsis: "A fantastical comedy where four lovers and a group of actors find themselves entangled in a magical forest, with hilarious consequences.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Midsummer+Night%27s+Dream"
    },
    {
        title: "The Tempest",
        author: "William Shakespeare",
        synopsis: "Prospero, a sorcerer, seeks to right the wrongs that were done to him and his daughter by his brother, using magic on an enchanted island.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Tempest"
    },
    {
        title: "King Lear",
        author: "William Shakespeare",
        synopsis: "The tragedy of King Lear, who divides his kingdom among his daughters based on their flattery, leading to betrayal, madness, and death.",
        cover: "https://via.placeholder.com/300x450.png?text=King+Lear"
    },
    {
        title: "Twelfth Night",
        author: "William Shakespeare",
        synopsis: "A comedy of mistaken identities, where Viola, disguised as a man, navigates love and mischief in the court of Duke Orsino.",
        cover: "https://via.placeholder.com/300x450.png?text=Twelfth+Night"
    },
    {
        title: "The Merchant of Venice",
        author: "William Shakespeare",
        synopsis: "The tale of the merchant Antonio, who borrows money from Shylock, a Jewish moneylender, leading to a dramatic courtroom trial over a pound of flesh.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Merchant+of+Venice"
    },
    {
        title: "Much Ado About Nothing",
        author: "William Shakespeare",
        synopsis: "A comedic play about the miscommunication and mistaken identities between two couples, Beatrice and Benedick, and Claudio and Hero.",
        cover: "https://via.placeholder.com/300x450.png?text=Much+Ado+About+Nothing"
    },
    {
        title: "As You Like It",
        author: "William Shakespeare",
        synopsis: "A romantic comedy set in the Forest of Arden, focusing on the themes of love, disguise, and gender roles as Rosalind escapes from her uncle's court.",
        cover: "https://via.placeholder.com/300x450.png?text=As+You+Like+It"
    },
    {
        title: "Taming of the Shrew",
        author: "William Shakespeare",
        synopsis: "The comedic battle of wits between the sharp-tongued Katherina and her suitor, Petruchio, who attempts to 'tame' her into an obedient wife.",
        cover: "https://via.placeholder.com/300x450.png?text=Taming+of+the+Shrew"
    },
    {
        title: "The Winter's Tale",
        author: "William Shakespeare",
        synopsis: "A tale of jealousy and redemption where King Leontes wrongly accuses his wife of infidelity, leading to the tragic loss of his daughter and eventual reconciliation.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Winter%27s+Tale"
    },
    {
        title: "Henry V",
        author: "William Shakespeare",
        synopsis: "The story of King Henry V's rise to power and his successful military campaign against France, culminating in the famous Battle of Agincourt.",
        cover: "https://via.placeholder.com/300x450.png?text=Henry+V"
    },
    {
        title: "Richard III",
        author: "William Shakespeare",
        synopsis: "The rise and fall of Richard III, who schemes and manipulates his way to the throne of England before being defeated in battle and killed.",
        cover: "https://via.placeholder.com/300x450.png?text=Richard+III"
    },
    {
        title: "Henry IV, Part 1",
        author: "William Shakespeare",
        synopsis: "The conflict between King Henry IV and rebellious factions is complicated by the relationship between Prince Hal and the comedic, yet cunning, Falstaff.",
        cover: "https://via.placeholder.com/300x450.png?text=Henry+IV%2C+Part+1"
    },
    {
        title: "Henry IV, Part 2",
        author: "William Shakespeare",
        synopsis: "The continuation of the story of King Henry IV, focusing on Prince Hal’s transformation into a worthy leader and his eventual assumption of the throne.",
        cover: "https://via.placeholder.com/300x450.png?text=Henry+IV%2C+Part+2"
    },
    {
        title: "Coriolanus",
        author: "William Shakespeare",
        synopsis: "The story of Coriolanus, a Roman general whose pride and disdain for the common people lead to his fall from power and eventual betrayal.",
        cover: "https://via.placeholder.com/300x450.png?text=Coriolanus"
    },
    {
        title: "Antony and Cleopatra",
        author: "William Shakespeare",
        synopsis: "The tragic romance between the Roman general Mark Antony and the Egyptian queen Cleopatra, set against the backdrop of political conflict and military campaigns.",
        cover: "https://via.placeholder.com/300x450.png?text=Antony+and+Cleopatra"
    },
    {
        title: "Timon of Athens",
        author: "William Shakespeare",
        synopsis: "The story of Timon, an Athenian nobleman who, after being betrayed by his friends, turns misanthropic and withdraws from society.",
        cover: "https://via.placeholder.com/300x450.png?text=Timon+of+Athens"
    },
    {
        title: "The Comedy of Errors",
        author: "William Shakespeare",
        synopsis: "A farcical comedy about two sets of identical twins separated at birth, leading to a series of mistaken identities, confusion, and humorous events.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Comedy+of+Errors"
    },
    {
        title: "Love's Labour's Lost",
        author: "William Shakespeare",
        synopsis: "The comedic tale of the King of Navarre and his three companions who vow to avoid women for three years, only to fall in love with the princess and her ladies.",
        cover: "https://via.placeholder.com/300x450.png?text=Love%27s+Labour%27s+Lost"
    },
    {
        title: "All's Well That Ends Well",
        author: "William Shakespeare",
        synopsis: "The play tells the story of Helena, who, through determination and cunning, wins the love of the reluctant Bertram despite the odds.",
        cover: "https://via.placeholder.com/300x450.png?text=All%27s+Well+That+Ends+Well"
    },
    {
        title: "The Two Gentlemen of Verona",
        author: "William Shakespeare",
        synopsis: "A comedy about two friends, Valentine and Proteus, who fall in love with the same woman, leading to rivalry, misunderstandings, and eventual reconciliation.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Two+Gentlemen+of+Verona"
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        synopsis: "The story of a young orphan, Jane Eyre, who becomes a governess at Thornfield Hall and falls in love with the mysterious and brooding Mr. Rochester, uncovering dark secrets in the process.",
        cover: "https://via.placeholder.com/300x450.png?text=Jane+Eyre"
    },
    {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        synopsis: "A tale of passionate love and revenge between Heathcliff and Catherine Earnshaw, set on the Yorkshire moors. The novel explores themes of obsession, jealousy, and the destructive nature of love.",
        cover: "https://via.placeholder.com/300x450.png?text=Wuthering+Heights"
    },
    {
        title: "Shirley",
        author: "Charlotte Brontë",
        synopsis: "The novel focuses on the struggles of workers during the industrial revolution in England, particularly in the context of the textile industry. The character of Shirley challenges gender expectations and advocates for social change.",
        cover: "https://via.placeholder.com/300x450.png?text=Shirley"
    },
    {
        title: "Villette",
        author: "Charlotte Brontë",
        synopsis: "The story of Lucy Snowe, a lonely and introspective Englishwoman who travels to Belgium to work as a teacher. The novel explores themes of isolation, identity, and unrequited love.",
        cover: "https://via.placeholder.com/300x450.png?text=Villette"
    },
    {
        title: "The Professor",
        author: "Charlotte Brontë",
        synopsis: "A story about William Crimsworth, an Englishman who moves to Belgium to work as a teacher and eventually becomes involved in a romantic entanglement while navigating cultural differences and personal challenges.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Professor"
    },
    {
        title: "The Tenant of Wildfell Hall",
        author: "Anne Brontë",
        synopsis: "The novel tells the story of Helen Graham, who escapes an abusive marriage and seeks refuge at Wildfell Hall, challenging Victorian norms about gender and marriage.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Tenant+of+Wildfell+Hall"
    },
    {
        title: "Agnes Grey",
        author: "Anne Brontë",
        synopsis: "A semi-autobiographical novel about a governess named Agnes Grey, who experiences mistreatment and hardship while working for various families in the English countryside.",
        cover: "https://via.placeholder.com/300x450.png?text=Agnes+Grey"
    },
    {
        title: "Ellen Montgomery",
        author: "Anne Brontë",
        synopsis: "A lesser-known early work by Anne Brontë, it explores themes of personal growth and relationships within the confines of Victorian social structures.",
        cover: "https://via.placeholder.com/300x450.png?text=Ellen+Montgomery"
    },
    {
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        synopsis: "The adventures of a young boy, Tom Sawyer, as he navigates childhood in a small town along the Mississippi River, filled with mischief, adventure, and moral growth.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Adventures+of+Tom+Sawyer"
    },
    {
        title: "Adventures of Huckleberry Finn",
        author: "Mark Twain",
        synopsis: "A young boy, Huck Finn, runs away from home and embarks on a journey down the Mississippi River with Jim, a runaway slave, leading to powerful explorations of race, morality, and freedom.",
        cover: "https://via.placeholder.com/300x450.png?text=Adventures+of+Huckleberry+Finn"
    },
    {
        title: "The Prince and the Pauper",
        author: "Mark Twain",
        synopsis: "Two boys, one a prince and the other a poor pauper, switch places and experience the other's life. The novel explores themes of social inequality, justice, and identity.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Prince+and+the+Pauper"
    },
    {
        title: "A Connecticut Yankee in King Arthur's Court",
        author: "Mark Twain",
        synopsis: "A time-traveling story in which a 19th-century engineer, Hank Morgan, finds himself transported to the time of King Arthur. He uses his knowledge of science and technology to try and change history.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Connecticut+Yankee+in+King+Arthur%27s+Court"
    },
    {
        title: "The Gilded Age: A Tale of Today",
        author: "Mark Twain",
        synopsis: "A satirical novel co-written with Charles Dudley Warner that critiques the greed and corruption during the post-Civil War period in America, known as the Gilded Age.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Gilded+Age"
    },
    {
        title: "The Tragedy of Pudd'nhead Wilson",
        author: "Mark Twain",
        synopsis: "A story set in the American South, exploring themes of race, identity, and justice through the story of a mixed-race child and a mistaken identity involving two babies swapped at birth.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Tragedy+of+Pudd%27nhead+Wilson"
    },
    {
        title: "Roughing It",
        author: "Mark Twain",
        synopsis: "A semi-autobiographical novel about Twain's experiences traveling through the American West, offering humorous observations on life and people he encountered along the way.",
        cover: "https://via.placeholder.com/300x450.png?text=Roughing+It"
    },
    {
        title: "The Innocents Abroad",
        author: "Mark Twain",
        synopsis: "A humorous travelogue chronicling Twain's journey through Europe and the Holy Land, filled with satire and sharp observations on culture and society.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Innocents+Abroad"
    },
    {
        title: "The Mysterious Stranger",
        author: "Mark Twain",
        synopsis: "A philosophical novel exploring the nature of good and evil, through the story of a stranger who appears in a small village and causes a series of troubling events.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Mysterious+Stranger"
    },
    {
        title: "The Adventures of Barry Finn",
        author: "Mark Twain",
        synopsis: "An unfinished novel that revisits the themes of friendship, freedom, and rebellion, set against the backdrop of the Mississippi River.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Adventures+of+Barry+Finn"
    },
    {
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        synopsis: "An epic struggle between an aging fisherman and a giant marlin in the Gulf Stream, exploring themes of endurance, strength, and the human spirit.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Old+Man+and+the+Sea"
    },
    {
        title: "A Farewell to Arms",
        author: "Ernest Hemingway",
        synopsis: "Set during World War I, this novel tells the story of an American ambulance driver in Italy who falls in love with a British nurse, exploring love, loss, and the ravages of war.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Farewell+to+Arms"
    },
    {
        title: "The Sun Also Rises",
        author: "Ernest Hemingway",
        synopsis: "A group of expatriates in the post-World War I era travel from Paris to Spain, exploring themes of disillusionment, aimlessness, and the lost generation.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Sun+Also+Rises"
    },
    {
        title: "For Whom the Bell Tolls",
        author: "Ernest Hemingway",
        synopsis: "A story set during the Spanish Civil War, focusing on an American dynamiter who joins a guerilla group, examining themes of sacrifice, honor, and the futility of war.",
        cover: "https://via.placeholder.com/300x450.png?text=For+Whom+the+Bell+Tolls"
    },
    {
        title: "To Have and Have Not",
        author: "Ernest Hemingway",
        synopsis: "Set in the Caribbean during the Great Depression, this novel follows Harry Morgan, a fisherman turned smuggler, as he navigates the harsh realities of life and survival.",
        cover: "https://via.placeholder.com/300x450.png?text=To+Have+and+Have+Not"
    },
    {
        title: "The Garden of Eden",
        author: "Ernest Hemingway",
        synopsis: "A posthumously published novel, exploring a love triangle between an American writer and his wife and another woman, touching on themes of identity, love, and sexual fluidity.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Garden+of+Eden"
    },
    {
        title: "Islands in the Stream",
        author: "Ernest Hemingway",
        synopsis: "A novel set during World War II that follows the life of Thomas Hudson, a painter, and his relationships with his family, touching on themes of love, loss, and personal redemption.",
        cover: "https://via.placeholder.com/300x450.png?text=Islands+in+the+Stream"
    },
    {
        title: "The Nick Adams Stories",
        author: "Ernest Hemingway",
        synopsis: "A collection of short stories centered around the character Nick Adams, offering a reflection on his experiences growing up, war, and his quest for meaning in life.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Nick+Adams+Stories"
    },
    {
        title: "Death in the Afternoon",
        author: "Ernest Hemingway",
        synopsis: "A nonfiction work in which Hemingway explores the tradition of bullfighting in Spain, blending personal experience with a reflection on life and death.",
        cover: "https://via.placeholder.com/300x450.png?text=Death+in+the+Afternoon"
    },
    {
        title: "Across the River and into the Trees",
        author: "Ernest Hemingway",
        synopsis: "A novel set in post-World War II Italy, focusing on Colonel Richard Cantwell, a veteran reflecting on his past while grappling with his present and his relationship with a younger woman.",
        cover: "https://via.placeholder.com/300x450.png?text=Across+the+River+and+into+the+Trees"
    },
    {
        title: "The Grapes of Wrath",
        author: "John Steinbeck",
        synopsis: "Set during the Great Depression, this novel follows the Joad family as they travel west to California in search of a better life, facing hardships, injustice, and the human spirit's resilience.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Grapes+of+Wrath"
    },
    {
        title: "Of Mice and Men",
        author: "John Steinbeck",
        synopsis: "This novella tells the story of two displaced migrant workers, George and Lennie, and their dream of owning a farm, ultimately exploring themes of friendship, loneliness, and the harsh realities of the American Dream.",
        cover: "https://via.placeholder.com/300x450.png?text=Of+Mice+and+Men"
    },
    {
        title: "East of Eden",
        author: "John Steinbeck",
        synopsis: "A sprawling epic set in California's Salinas Valley, focusing on the Trask and Hamilton families, and examining themes of good and evil, generational conflict, and the struggle for identity.",
        cover: "https://via.placeholder.com/300x450.png?text=East+of+Eden"
    },
    {
        title: "The Red Pony",
        author: "John Steinbeck",
        synopsis: "A series of four interconnected novellas that explore the coming-of-age experience of a young boy named Jody Tiflin on a ranch in California, touching on themes of loss and growth.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Red+Pony"
    },
    {
        title: "Tortilla Flat",
        author: "John Steinbeck",
        synopsis: "Set in Monterey, California, this novel follows a group of poor but proud men who live by their own code of honor, touching on themes of friendship, loyalty, and the human condition.",
        cover: "https://via.placeholder.com/300x450.png?text=Tortilla+Flat"
    },
    {
        title: "The Pearl",
        author: "John Steinbeck",
        synopsis: "A parable about a poor pearl diver named Kino, whose discovery of a great pearl leads to his downfall, illustrating the destructive effects of greed and the complexities of human nature.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Pearl"
    },
    {
        title: "In Dubious Battle",
        author: "John Steinbeck",
        synopsis: "Set during a California labor strike, this novel tells the story of a group of migrant workers fighting for their rights, highlighting the struggles of workers and the battle between the labor and capitalist forces.",
        cover: "https://via.placeholder.com/300x450.png?text=In+Dubious+Battle"
    },
    {
        title: "Travels with Charley",
        author: "John Steinbeck",
        synopsis: "A nonfiction account of Steinbeck's road trip across America with his poodle Charley, exploring the American landscape and the changing social and cultural climate of the country.",
        cover: "https://via.placeholder.com/300x450.png?text=Travels+with+Charley"
    },
    {
        title: "Sweet Thursday",
        author: "John Steinbeck",
        synopsis: "A sequel to 'Cannery Row,' this novel takes place in Monterey and follows the inhabitants of the small town as they cope with love, loss, and redemption.",
        cover: "https://via.placeholder.com/300x450.png?text=Sweet+Thursday"
    },
    {
        title: "1984",
        author: "George Orwell",
        synopsis: "Set in a dystopian future where totalitarianism reigns, '1984' explores the themes of surveillance, censorship, and mind control, following Winston Smith as he rebels against the oppressive regime.",
        cover: "https://via.placeholder.com/300x450.png?text=1984"
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        synopsis: "A political allegory in which farm animals overthrow their human owner and establish their own government, only to discover that they are no better off than before, exploring themes of power, corruption, and betrayal.",
        cover: "https://via.placeholder.com/300x450.png?text=Animal+Farm"
    },
    {
        title: "Homage to Catalonia",
        author: "George Orwell",
        synopsis: "A personal account of George Orwell's experiences during the Spanish Civil War, this memoir delves into the complexities of war, ideology, and the disillusionment of political struggle.",
        cover: "https://via.placeholder.com/300x450.png?text=Homage+to+Catalonia"
    },
    {
        title: "Coming Up for Air",
        author: "George Orwell",
        synopsis: "A novel that blends satire with social commentary, it follows George Bowling, an ordinary man who becomes disillusioned with his life and the changing world around him, particularly in the lead-up to World War II.",
        cover: "https://via.placeholder.com/300x450.png?text=Coming+Up+for+Air"
    },
    {
        title: "Keep the Aspidistra Flying",
        author: "George Orwell",
        synopsis: "The story of Gordon Comstock, a man who rejects the values of a materialistic society and attempts to live a life of artistic integrity, grappling with his inner conflicts and the harsh realities of poverty.",
        cover: "https://via.placeholder.com/300x450.png?text=Keep+the+Aspidistra+Flying"
    },
    {
        title: "Burmese Days",
        author: "George Orwell",
        synopsis: "Set during British colonial rule in Burma, the novel portrays the life of John Flory, a disillusioned Englishman struggling with racism, isolation, and the moral decay of colonialism.",
        cover: "https://via.placeholder.com/300x450.png?text=Burmese+Days"
    },
    {
        title: "Down and Out in Paris and London",
        author: "George Orwell",
        synopsis: "A memoir of Orwell's time spent living in poverty, the book offers a firsthand account of the struggles of the working class in two of the world's most important cities.",
        cover: "https://via.placeholder.com/300x450.png?text=Down+and+Out+in+Paris+and+London"
    },
    {
        title: "The Road to Wigan Pier",
        author: "George Orwell",
        synopsis: "This nonfiction work is a mixture of social commentary and personal reflection, documenting Orwell's investigation into the harsh living conditions of the working class in northern England.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Road+to+Wigan+Pier"
    },
    {
        title: "Such, Such Were the Joys",
        author: "George Orwell",
        synopsis: "An autobiographical essay that reflects on Orwell's experiences at an English boarding school, discussing the nature of childhood, the abuses of power, and the foundation of his later political ideas.",
        cover: "https://via.placeholder.com/300x450.png?text=Such%2C+Such+Were+the+Joys"
    },
    {
        title: "A Clergyman's Daughter",
        author: "George Orwell",
        synopsis: "The novel follows Dorothy Hare, a clergyman's daughter, whose life is shaken as she grapples with issues of faith, identity, and independence amidst a world of personal and political uncertainty.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Clergyman's+Daughter"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        synopsis: "A quintessential novel of the Jazz Age, 'The Great Gatsby' explores the themes of decadence, love, and the American Dream through the life of Jay Gatsby, a wealthy man obsessed with rekindling his lost love, Daisy Buchanan.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Great+Gatsby"
    },
    {
        title: "Tender Is the Night",
        author: "F. Scott Fitzgerald",
        synopsis: "Set on the French Riviera, this novel tells the story of Dick Diver, a charming but troubled psychiatrist, and his complex relationship with his beautiful but mentally unstable wife, Nicole.",
        cover: "https://via.placeholder.com/300x450.png?text=Tender+Is+the+Night"
    },
    {
        title: "This Side of Paradise",
        author: "F. Scott Fitzgerald",
        synopsis: "A coming-of-age novel that explores the life of Amory Blaine, a young man navigating love, ambition, and self-discovery in a world shaped by the complexities of social class and personal aspirations.",
        cover: "https://via.placeholder.com/300x450.png?text=This+Side+of+Paradise"
    },
    {
        title: "The Beautiful and Damned",
        author: "F. Scott Fitzgerald",
        synopsis: "A story of youth, excess, and ambition, this novel follows the lives of Anthony and Gloria Patch, a wealthy couple whose hedonistic lifestyle leads to their ultimate destruction.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Beautiful+and+Damned"
    },
    {
        title: "The Last Tycoon",
        author: "F. Scott Fitzgerald",
        synopsis: "Set in the Hollywood film industry during the 1930s, the novel centers on the life of Monroe Stahr, a brilliant but tragic movie producer, as he navigates the challenges of his career and personal relationships.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Last+Tycoon"
    },
    {
        title: "The Crack-Up",
        author: "F. Scott Fitzgerald",
        synopsis: "A collection of essays and personal reflections, 'The Crack-Up' explores Fitzgerald’s struggles with personal disillusionment, the pressures of fame, and his deteriorating health and marriage.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Crack-Up"
    },
    {
        title: "Flappers and Philosophers",
        author: "F. Scott Fitzgerald",
        synopsis: "A collection of short stories that showcase Fitzgerald’s sharp observation of the Roaring Twenties, focusing on themes of love, ambition, and the complexities of relationships.",
        cover: "https://via.placeholder.com/300x450.png?text=Flappers+and+Philosophers"
    },
    {
        title: "The Pat Hobby Stories",
        author: "F. Scott Fitzgerald",
        synopsis: "A collection of short stories featuring Pat Hobby, a washed-up screenwriter in Hollywood, exploring the decline of his career and his attempts to cling to relevance in the film industry.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Pat+Hobby+Stories"
    },
    {
        title: "May Day",
        author: "F. Scott Fitzgerald",
        synopsis: "A short story that captures the post-World War I disillusionment and the chaotic lives of young people in a rapidly changing society, with themes of love, wealth, and societal expectations.",
        cover: "https://via.placeholder.com/300x450.png?text=May+Day"
    },
    {
        title: "Babylon Revisited",
        author: "F. Scott Fitzgerald",
        synopsis: "A short story set in Paris during the aftermath of the 1929 stock market crash, it tells the tale of Charlie Wales, who returns to the city seeking to reconnect with his daughter and redeem himself after a life of excess.",
        cover: "https://via.placeholder.com/300x450.png?text=Babylon+Revisited"
    },
    {
        title: "Twenty Thousand Leagues Under the Sea",
        author: "Jules Verne",
        synopsis: "The adventure of Professor Pierre Aronnax and his companions, who are captured by Captain Nemo aboard the submarine Nautilus, exploring the depths of the world's oceans and the mysteries within.",
        cover: "https://via.placeholder.com/300x450.png?text=Twenty+Thousand+Leagues+Under+the+Sea"
    },
    {
        title: "Around the World in Eighty Days",
        author: "Jules Verne",
        synopsis: "Phileas Fogg, an English gentleman, embarks on a wager to travel around the world in just eighty days, facing numerous challenges and thrilling adventures along the way.",
        cover: "https://via.placeholder.com/300x450.png?text=Around+the+World+in+Eighty+Days"
    },
    {
        title: "Journey to the Center of the Earth",
        author: "Jules Verne",
        synopsis: "Professor Lidenbrock, his nephew Axel, and their guide Hans embark on a daring expedition to explore the interior of the Earth through a volcanic crater in Iceland, discovering strange creatures and underground wonders.",
        cover: "https://via.placeholder.com/300x450.png?text=Journey+to+the+Center+of+the+Earth"
    },
    {
        title: "The Mysterious Island",
        author: "Jules Verne",
        synopsis: "A group of castaways escape from a Confederate prison camp and find themselves stranded on an uncharted island, where they must use their ingenuity to survive and uncover the island's secrets.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Mysterious+Island"
    },
    {
        title: "The Adventures of Captain Hatteras",
        author: "Jules Verne",
        synopsis: "Captain Hatteras leads an expedition to the Arctic, determined to reach the North Pole, where he faces unimaginable dangers, the harsh elements, and the mysterious forces of nature.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Adventures+of+Captain+Hatteras"
    },
    {
        title: "The Secret of Wilhelm Storitz",
        author: "Jules Verne",
        synopsis: "A mysterious story of a man, Wilhelm Storitz, who claims to possess the secret of invisibility and the tragic consequences of this secret as it unfolds in a small European town.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Secret+of+Wilhelm+Storitz"
    },
    {
        title: "The Steam House",
        author: "Jules Verne",
        synopsis: "Set in colonial India, this novel tells the story of an English expedition to the East using a steam-powered elephant, encountering dangers and wonders in a rich exploration of the Indian subcontinent.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Steam+House"
    },
    {
        title: "In Search of the Castaways",
        author: "Jules Verne",
        synopsis: "The adventure of five people who, after being shipwrecked, search for their lost friends across the world, facing numerous challenges as they explore remote and unknown lands.",
        cover: "https://via.placeholder.com/300x450.png?text=In+Search+of+the+Castaways"
    },
    {
        title: "The Child of the Cavern",
        author: "Jules Verne",
        synopsis: "A young boy, fascinated by the wonders of the underground world, embarks on a series of adventures in a vast network of mines and caves beneath the Earth.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Child+of+the+Cavern"
    },
    {
        title: "The Carpathian Castle",
        author: "Jules Verne",
        synopsis: "The story follows the journey of a man who becomes embroiled in a mystery in a remote castle in the Carpathian Mountains, uncovering a series of strange events and supernatural occurrences.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Carpathian+Castle"
    },
    {
        title: "Slaughterhouse-Five",
        author: "Kurt Vonnegut",
        synopsis: "The story of Billy Pilgrim, a soldier in World War II who becomes 'unstuck in time,' experiencing events in his life, including his time in a German POW camp, repeatedly in a non-linear fashion.",
        cover: "https://via.placeholder.com/300x450.png?text=Slaughterhouse-Five"
    },
    {
        title: "Cat's Cradle",
        author: "Kurt Vonnegut",
        synopsis: "The narrator, John or Jonah, seeks to write a book about the events leading up to the day when the atomic bomb was dropped on Hiroshima. The story weaves in the tale of ice-nine, a dangerous substance capable of ending the world.",
        cover: "https://via.placeholder.com/300x450.png?text=Cat's+Cradle"
    },
    {
        title: "Breakfast of Champions",
        author: "Kurt Vonnegut",
        synopsis: "The story follows Kilgore Trout, a failed writer who has an epiphany, and Dwayne Hoover, a car dealer who goes insane after reading one of Trout's novels. It's a satirical examination of free will and the American dream.",
        cover: "https://via.placeholder.com/300x450.png?text=Breakfast+of+Champions"
    },
    {
        title: "Player Piano",
        author: "Kurt Vonnegut",
        synopsis: "Set in a dystopian future where machines have replaced most human jobs, the story explores the life of Dr. Paul Proteus, a man who begins to question the social order and the value of human labor.",
        cover: "https://via.placeholder.com/300x450.png?text=Player+Piano"
    },
    {
        title: "Mother Night",
        author: "Kurt Vonnegut",
        synopsis: "The novel centers on Howard W. Campbell, Jr., an American playwright who becomes a Nazi propagandist during WWII, later grappling with the consequences of his actions and his identity.",
        cover: "https://via.placeholder.com/300x450.png?text=Mother+Night"
    },
    {
        title: "God Bless You, Mr. Rosewater",
        author: "Kurt Vonnegut",
        synopsis: "The story follows Eliot Rosewater, a wealthy but eccentric man who runs a charitable foundation, and his struggles to make sense of his life and the ways he helps people.",
        cover: "https://via.placeholder.com/300x450.png?text=God+Bless+You,+Mr.+Rosewater"
    },
    {
        title: "Hocus Pocus",
        author: "Kurt Vonnegut",
        synopsis: "Set at a veterans’ hospital in the future, this novel tells the story of Eugene Debs Hartke, a former soldier who attempts to make sense of his life and the absurdities of the American military and government.",
        cover: "https://via.placeholder.com/300x450.png?text=Hocus+Pocus"
    },
    {
        title: "Timequake",
        author: "Kurt Vonnegut",
        synopsis: "A science fiction novel in which time is forced to 'replay' itself, and the characters must re-live every moment of their lives in an infinite loop, unable to change the past.",
        cover: "https://via.placeholder.com/300x450.png?text=Timequake"
    },
    {
        title: "Jailbird",
        author: "Kurt Vonnegut",
        synopsis: "The novel follows the life of Walter F. Starbuck, a man who once had a promising career in government but ends up in prison due to political corruption, as he reflects on his life and the political system.",
        cover: "https://via.placeholder.com/300x450.png?text=Jailbird"
    },
    {
        title: "The Sirens of Titan",
        author: "Kurt Vonnegut",
        synopsis: "This novel explores the life of Malachi Constant, a rich and arrogant man who is propelled through space, witnessing the absurdities of fate, free will, and the human condition on a galactic scale.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Sirens+of+Titan"
    },
    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        synopsis: "A young man named Dorian Gray becomes obsessed with his own beauty and makes a pact to remain young forever, while his portrait ages and reflects the consequences of his sinful actions.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Picture+of+Dorian+Gray"
    },
    {
        title: "The Importance of Being Earnest",
        author: "Oscar Wilde",
        synopsis: "A witty comedy of manners where two young men, both pretending to be someone they are not, get entangled in a web of mistaken identities and social expectations.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Importance+of+Being+Earnest"
    },
    {
        title: "The Canterville Ghost",
        author: "Oscar Wilde",
        synopsis: "The story of an American family who moves into a haunted English manor, where the ghost, Sir Simon, tries to scare them, but they react very differently from the previous inhabitants.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Canterville+Ghost"
    },
    {
        title: "The Ballad of Reading Gaol",
        author: "Oscar Wilde",
        synopsis: "A poem written by Wilde during his imprisonment, reflecting on the brutal conditions of the prison and the execution of his fellow inmate, along with his reflections on justice and humanity.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Ballad+of+Reading+Gaol"
    },
    {
        title: "Salomé",
        author: "Oscar Wilde",
        synopsis: "A tragic play about the biblical story of Salome, the daughter of Herod, who dances for her stepfather and asks for the head of John the Baptist as a reward.",
        cover: "https://via.placeholder.com/300x450.png?text=Salomé"
    },
    {
        title: "A Woman of No Importance",
        author: "Oscar Wilde",
        synopsis: "A social comedy that critiques the hypocrisies of the British aristocracy, focusing on the dynamics of relationships and the behavior of its upper-class characters.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Woman+of+No+Importance"
    },
    {
        title: "An Ideal Husband",
        author: "Oscar Wilde",
        synopsis: "A comedy about the complexities of politics and marriage, focusing on a man’s past secrets being exposed and the efforts to keep them hidden to preserve his ideal reputation.",
        cover: "https://via.placeholder.com/300x450.png?text=An+Ideal+Husband"
    },
    {
        title: "De Profundis",
        author: "Oscar Wilde",
        synopsis: "A long letter written by Wilde during his imprisonment to his former lover, Lord Alfred Douglas, reflecting on his suffering, mistakes, and the nature of love.",
        cover: "https://via.placeholder.com/300x450.png?text=De+Profundis"
    },
    {
        title: "The Duchess of Padua",
        author: "Oscar Wilde",
        synopsis: "A tragic play about the doomed love affair between a young noblewoman and a man who seeks revenge for the death of his father.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Duchess+of+Padua"
    },
    {
        title: "The Happy Prince and Other Tales",
        author: "Oscar Wilde",
        synopsis: "A collection of short stories by Wilde, including 'The Happy Prince,' a fairy tale about a statue that sacrifices itself for the poor, and other stories filled with wit and moral lessons.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Happy+Prince+and+Other+Tales"
    },
    {
        title: "Mrs Dalloway",
        author: "Virginia Woolf",
        synopsis: "Set in a single day, this novel explores the life of Clarissa Dalloway as she prepares for a party, interwoven with the experiences of others like Septimus, a war veteran, revealing themes of time, memory, and mental health.",
        cover: "https://via.placeholder.com/300x450.png?text=Mrs+Dalloway"
    },
    {
        title: "To the Lighthouse",
        author: "Virginia Woolf",
        synopsis: "A deeply introspective and innovative novel that explores the Ramsay family’s summer holidays on the Isle of Skye and their evolving relationships, particularly with Mrs. Ramsay and the lighthouse.",
        cover: "https://via.placeholder.com/300x450.png?text=To+the+Lighthouse"
    },
    {
        title: "Orlando: A Biography",
        author: "Virginia Woolf",
        synopsis: "A unique blend of biography and fantasy, this novel follows the life of Orlando, who changes gender and lives for centuries, exploring themes of gender, identity, and the passage of time.",
        cover: "https://via.placeholder.com/300x450.png?text=Orlando"
    },
    {
        title: "A Room of One's Own",
        author: "Virginia Woolf",
        synopsis: "An extended essay in which Woolf argues that a woman must have money and a room of her own to write fiction, advocating for women's independence and artistic freedom.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Room+of+One's+Own"
    },
    {
        title: "The Waves",
        author: "Virginia Woolf",
        synopsis: "A highly experimental novel written in the form of soliloquies from six characters, exploring their lives, inner thoughts, and their relationships with one another as they grow from childhood to old age.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Waves"
    },
    {
        title: "Jacob's Room",
        author: "Virginia Woolf",
        synopsis: "A novel about the life of Jacob Flanders, exploring his experiences and the world around him, and ultimately his untimely death in World War I. Woolf uses fragmented perspectives and stream-of-consciousness techniques.",
        cover: "https://via.placeholder.com/300x450.png?text=Jacob's+Room"
    },
    {
        title: "The Voyage Out",
        author: "Virginia Woolf",
        synopsis: "Woolf's first novel, telling the story of Rachel Vinrace, a young woman who embarks on a sea voyage and begins to question her life and values as she experiences love and loss.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Voyage+Out"
    },
    {
        title: "Flush: A Biography",
        author: "Virginia Woolf",
        synopsis: "A novel written from the perspective of Flush, the pet cocker spaniel of poet Elizabeth Barrett Browning, blending biography, fiction, and the inner world of a dog in a witty exploration of class and relationships.",
        cover: "https://via.placeholder.com/300x450.png?text=Flush"
    },
    {
        title: "Between the Acts",
        author: "Virginia Woolf",
        synopsis: "Woolf's final novel, set in a small English village just before World War II, where the villagers prepare a play that reflects their collective history, exploring themes of change, memory, and the onset of war.",
        cover: "https://via.placeholder.com/300x450.png?text=Between+the+Acts"
    },
    {
        title: "The Common Reader",
        author: "Virginia Woolf",
        synopsis: "A collection of Woolf's essays that reflect her thoughts on literature, art, and the nature of reading, with a particular focus on the lives and works of other authors.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Common+Reader"
    },
    {
        title: "The War of the Worlds",
        author: "H.G. Wells",
        synopsis: "A science fiction novel about the invasion of Earth by Martians, who use advanced technology to conquer humanity, exploring themes of survival, civilization, and the fragility of human dominance.",
        cover: "https://via.placeholder.com/300x450.png?text=The+War+of+the+Worlds"
    },
    {
        title: "The Time Machine",
        author: "H.G. Wells",
        synopsis: "A groundbreaking science fiction novel in which an unnamed Time Traveler journeys to the distant future, encountering a divided society of Eloi and Morlocks, exploring themes of class, evolution, and the passage of time.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Time+Machine"
    },
    {
        title: "The Invisible Man",
        author: "H.G. Wells",
        synopsis: "A novel about a scientist, Griffin, who discovers the secret of invisibility but loses his sanity as he becomes increasingly isolated from society, exploring themes of power, isolation, and moral corruption.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Invisible+Man"
    },
    {
        title: "The Island of Doctor Moreau",
        author: "H.G. Wells",
        synopsis: "A dark science fiction novel in which a shipwrecked man discovers an isolated island where a mad scientist, Dr. Moreau, conducts horrific experiments to turn animals into humans, raising questions about morality and the boundaries of science.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Island+of+Doctor+Moreau"
    },
    {
        title: "The First Men in the Moon",
        author: "H.G. Wells",
        synopsis: "In this novel, two men travel to the Moon, discovering a subterranean civilization of strange creatures and technologies, reflecting on human nature and the possibilities of space exploration.",
        cover: "https://via.placeholder.com/300x450.png?text=The+First+Men+in+the+Moon"
    },
    {
        title: "The Food of the Gods and How It Came to Earth",
        author: "H.G. Wells",
        synopsis: "A science fiction novel about the discovery of a substance that causes rapid growth in plants and animals, leading to giant creatures and social upheaval, examining the consequences of unchecked scientific advancement.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Food+of+the+Gods"
    },
    {
        title: "The Shape of Things to Come",
        author: "H.G. Wells",
        synopsis: "A dystopian novel set in the future, detailing a world war followed by the rise of a new global government, focusing on the future of human civilization and the potential for progress or destruction.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Shape+of+Things+to+Come"
    },
    {
        title: "The War in the Air",
        author: "H.G. Wells",
        synopsis: "Set during the early 20th century, this novel imagines the future of aerial warfare and its impact on global conflict, exploring technological advancement and the potential for destruction.",
        cover: "https://via.placeholder.com/300x450.png?text=The+War+in+the+Air"
    },
    {
        title: "The Sleeper Awakes",
        author: "H.G. Wells",
        synopsis: "A science fiction novel about a man who awakens from a long sleep to find that the world has drastically changed, with new social structures and technologies, and struggles to adapt to his new circumstances.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Sleeper+Awakes"
    },
    {
        title: "The New Machiavelli",
        author: "H.G. Wells",
        synopsis: "A semi-autobiographical novel about a politician who becomes disillusioned with his own ambitions, exploring themes of power, idealism, and the personal cost of public life.",
        cover: "https://via.placeholder.com/300x450.png?text=The+New+Machiavelli"
    },
    {
        title: "The Stranger",
        author: "Albert Camus",
        synopsis: "A philosophical novel about Meursault, an emotionally indifferent man who commits an impulsive murder and faces the absurdity of life and death, exploring themes of existentialism, the meaning of life, and the human condition.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Stranger"
    },
    {
        title: "The Myth of Sisyphus",
        author: "Albert Camus",
        synopsis: "A philosophical essay in which Camus discusses the concept of the absurd and how humans should respond to the realization that life is meaningless, using the Greek myth of Sisyphus as a metaphor for human persistence in the face of futility.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Myth+of+Sisyphus"
    },
    {
        title: "The Plague",
        author: "Albert Camus",
        synopsis: "A novel set in a fictional town ravaged by a deadly plague, focusing on the lives of various characters as they struggle with the crisis, examining themes of suffering, death, and the human capacity for resilience in the face of absurdity.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Plague"
    },
    {
        title: "The Fall",
        author: "Albert Camus",
        synopsis: "A philosophical novel set in Amsterdam, where the narrator, a former Parisian lawyer, reflects on his life and personal failures, exploring themes of guilt, responsibility, and the absurdity of human existence.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Fall"
    },
    {
        title: "Exile and the Kingdom",
        author: "Albert Camus",
        synopsis: "A collection of six short stories, each exploring themes of alienation, exile, and the search for meaning in life, delving into the struggles of individuals who are separated from their communities or sense of belonging.",
        cover: "https://via.placeholder.com/300x450.png?text=Exile+and+the+Kingdom"
    },
    {
        title: "The Rebel",
        author: "Albert Camus",
        synopsis: "A philosophical essay in which Camus examines the nature of rebellion and revolution, discussing how the human desire for freedom can lead to the justification of violence and the loss of moral values, exploring the tension between freedom and justice.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Rebel"
    },
    {
        title: "A Happy Death",
        author: "Albert Camus",
        synopsis: "A novel about the character Mersault's journey to find happiness, both in terms of his own life and his relationship with death, reflecting the existential themes of Camus' later works such as The Stranger and The Myth of Sisyphus.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Happy+Death"
    },
    {
        title: "The Misunderstanding",
        author: "Albert Camus",
        synopsis: "A play about a mother and daughter who murder a man they believe is a stranger, only to discover he is a close family member, exploring themes of isolation, misunderstanding, and the human propensity for violence.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Misunderstanding"
    },
    {
        title: "The Just Assassins",
        author: "Albert Camus",
        synopsis: "A play that examines the lives of a group of political assassins who are willing to kill in the name of justice, raising questions about the moral implications of their actions and the justification of violence for a greater good.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Just+Assassins"
    },
    {
        title: "Camus at Combat",
        author: "Albert Camus",
        synopsis: "A collection of Camus' writings during the French Resistance, focusing on his editorials and philosophical reflections during World War II, highlighting his commitment to justice and human rights during times of conflict.",
        cover: "https://via.placeholder.com/300x450.png?text=Camus+at+Combat"
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        synopsis: "A psychological novel that follows the troubled Raskolnikov, a poor student who commits a murder and struggles with guilt, redemption, and the meaning of human suffering. The novel explores themes of morality, justice, and the nature of good and evil.",
        cover: "https://via.placeholder.com/300x450.png?text=Crime+and+Punishment"
    },
    {
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        synopsis: "A philosophical novel that explores the lives of the three Karamazov brothers as they grapple with issues of faith, free will, and morality, and their relationship with their father, Fyodor Pavlovich. It delves into questions about the existence of God, the problem of evil, and the nature of human suffering.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Brothers+Karamazov"
    },
    {
        title: "The Idiot",
        author: "Fyodor Dostoevsky",
        synopsis: "The story of Prince Myshkin, a man who, despite his innocence and goodness, is caught in the corrupt and immoral world of 19th-century Russia, exploring themes of innocence, goodness, and the contrast between the ideal and the real world.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Idiot"
    },
    {
        title: "Demons",
        author: "Fyodor Dostoevsky",
        synopsis: "A novel that examines the rise of radical ideologies in Russian society, following a group of intellectuals who plot to overthrow the government. It explores the dangers of political extremism and the destructive power of ideological obsession.",
        cover: "https://via.placeholder.com/300x450.png?text=Demons"
    },
    {
        title: "Notes from Underground",
        author: "Fyodor Dostoevsky",
        synopsis: "A novella that presents the confessions of an unnamed narrator who is isolated from society, exploring themes of alienation, free will, and the internal conflict between personal desires and societal expectations.",
        cover: "https://via.placeholder.com/300x450.png?text=Notes+from+Underground"
    },
    {
        title: "The Gambler",
        author: "Fyodor Dostoevsky",
        synopsis: "A semi-autobiographical novel about Alexei Ivanovich, a young man who becomes addicted to gambling. The novel explores the psychological effects of addiction and the destructive forces of obsession and desire.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Gambler"
    },
    {
        title: "Poor Folk",
        author: "Fyodor Dostoevsky",
        synopsis: "Dostoevsky's first novel, which focuses on the lives of two poor, struggling characters, Makar and Varvara. The novel deals with themes of love, poverty, and the difficult circumstances of the lower class in 19th-century Russia.",
        cover: "https://via.placeholder.com/300x450.png?text=Poor+Folk"
    },
    {
        title: "The Eternal Husband",
        author: "Fyodor Dostoevsky",
        synopsis: "A novella that examines the psychological complexities of two men, one of whom is married to the other’s former lover. The novel explores themes of jealousy, guilt, and the human need for self-justification.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Eternal+Husband"
    },
    {
        title: "The Village of Stepanchikovo",
        author: "Fyodor Dostoevsky",
        synopsis: "A comedic novel that portrays the eccentric characters of a Russian village and their interactions with an aristocratic family. The novel explores themes of social class, personal identity, and the conflict between tradition and progress.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Village+of+Stepanchikovo"
    },
    {
        title: "The House of the Dead",
        author: "Fyodor Dostoevsky",
        synopsis: "A semi-autobiographical novel based on Dostoevsky's experiences in a Siberian prison camp, exploring the lives of prisoners and the moral and psychological toll of incarceration. The novel critiques the Russian penal system and reflects on human dignity.",
        cover: "https://via.placeholder.com/300x450.png?text=The+House+of+the+Dead"
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        synopsis: "The classic Gothic novel about a young scientist, Victor Frankenstein, who creates a creature through an unorthodox scientific experiment, only to face the consequences of his actions. The novel explores themes of ambition, isolation, and the quest for knowledge.",
        cover: "https://via.placeholder.com/300x450.png?text=Frankenstein"
    },
    {
        title: "Dracula",
        author: "Bram Stoker",
        synopsis: "A Gothic horror novel that tells the story of Count Dracula's attempt to move from Transylvania to England in order to find new blood and spread the undead curse. It is one of the best-known works about vampires, exploring themes of superstition, fear, and the clash of cultures.",
        cover: "https://via.placeholder.com/300x450.png?text=Dracula"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        synopsis: "A coming-of-age novel narrated by Holden Caulfield, a disenchanted teenager who is struggling to find his place in the adult world. The novel is a critique of societal norms and explores themes of alienation, innocence, and the loss of youth.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Catcher+in+the+Rye"
    },
    {
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        synopsis: "A landmark work in magical realism, this novel tells the multigenerational story of the Buendía family in the fictional town of Macondo. It is a rich tale about the intersections of history, reality, and fantasy, exploring themes of time, fate, and memory.",
        cover: "https://via.placeholder.com/300x450.png?text=One+Hundred+Years+of+Solitude"
    },
    {
        title: "The Road",
        author: "Cormac McCarthy",
        synopsis: "A post-apocalyptic novel that follows a father and his young son as they travel through a devastated world, struggling to survive. The novel explores themes of love, survival, hope, and the harshness of life in a bleak, dystopian future.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Road"
    },
    {
        title: "The Metamorphosis",
        author: "Franz Kafka",
        synopsis: "A novella about Gregor Samsa, a man who wakes up one morning to find himself transformed into a giant insect. It is a story that explores themes of alienation, identity, and the disconnect between individual existence and societal expectations.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Metamorphosis"
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        synopsis: "A comedic science fiction novel about Arthur Dent, an ordinary man who is swept off Earth just before it is destroyed to make way for a hyperspace bypass. The novel follows his adventures across the universe with quirky characters and absurd situations.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Hitchhiker's+Guide+to+the+Galaxy"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        synopsis: "A philosophical novel that follows the journey of a young shepherd named Santiago, who sets off on a quest to find a treasure. The book explores themes of personal legend, destiny, and the pursuit of one's dreams.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Alchemist"
    },
    {
        title: "The House on Mango Street",
        author: "Sandra Cisneros",
        synopsis: "A coming-of-age novel that tells the story of Esperanza Cordero, a young Latina girl growing up in Chicago. Through a series of vignettes, the novel explores themes of identity, gender, and the struggles of immigrant communities.",
        cover: "https://via.placeholder.com/300x450.png?text=The+House+on+Mango+Street"
    },
    {
        title: "The Outsiders",
        author: "S.E. Hinton",
        synopsis: "A young adult novel that follows the struggles of Ponyboy Curtis, a member of a lower-class gang, as he navigates the complexities of youth, class, and belonging. The novel deals with themes of loyalty, friendship, and the effects of societal divisions.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Outsiders"
    },
    {
        title: "The Lovely Bones",
        author: "Alice Sebold",
        synopsis: "A novel about a 14-year-old girl named Susie Salmon who is murdered and watches from the afterlife as her family and friends cope with her death. The book explores themes of grief, family, and the impact of loss.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Lovely+Bones"
    },
    {
        title: "A Confederacy of Dunces",
        author: "John Kennedy Toole",
        synopsis: "A comedic novel about Ignatius J. Reilly, an eccentric, lazy, and self-important man who lives with his mother in New Orleans. The story follows his various misadventures and interactions with a colorful cast of characters.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Confederacy+of+Dunces"
    },
    {
        title: "Room",
        author: "Emma Donoghue",
        synopsis: "A psychological drama about a young boy, Jack, who has been held captive in a small room with his mother for seven years. The novel explores their eventual escape and their struggles to adjust to the outside world after their release.",
        cover: "https://via.placeholder.com/300x450.png?text=Room"
    },
    {
        title: "The Secret History",
        author: "Donna Tartt",
        synopsis: "A literary thriller that tells the story of a group of elite college students who become involved in a murder. The novel examines themes of beauty, guilt, and the consequences of intellectualism taken to an extreme.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Secret+History"
    },
    {
        title: "The Giver",
        author: "Lois Lowry",
        synopsis: "A dystopian novel about a young boy named Jonas, who lives in a highly controlled society where emotions are suppressed and all choices are made for the citizens. As he learns the truth about the world, he must decide whether to accept or reject his role.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Giver"
    },
    {
        title: "The Shadow of the Wind",
        author: "Carlos Ruiz Zafón",
        synopsis: "A mystery novel set in post-World War II Barcelona, following a young boy named Daniel who discovers a forgotten book by an obscure author. As he unravels the mystery of the author’s life, he uncovers dark secrets that have shaped his city.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Shadow+of+the+Wind"
    },
    {
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        synopsis: "A psychological thriller about Rachel, a woman who becomes involved in the mystery of a missing woman after witnessing something unusual during her daily train commute. The book delves into themes of memory, obsession, and deceit.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Girl+on+the+Train"
    },
    {
        title: "The Perks of Being a Wallflower",
        author: "Stephen Chbosky",
        synopsis: "A coming-of-age novel presented in the form of letters written by Charlie, a shy and introspective high school freshman, as he navigates the challenges of adolescence, mental health, and personal growth.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Perks+of+Being+a+Wallflower"
    },
    {
        title: "The Night Circus",
        author: "Erin Morgenstern",
        synopsis: "A fantasy novel about a magical competition between two illusionists, set in a mysterious circus that appears without warning. The story blends romance, magic, and intrigue, with a backdrop of enchanting, surreal events.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Night+Circus"
    },
    {
        title: "Life After Life",
        author: "Kate Atkinson",
        synopsis: "A novel that follows Ursula Todd, a woman who lives multiple lives in various different versions, dying and being reborn in different circumstances. The book explores themes of fate, free will, and the effects of different life choices.",
        cover: "https://via.placeholder.com/300x450.png?text=Life+After+Life"
    },
    {
        title: "The Martian",
        author: "Andy Weir",
        synopsis: "A science fiction novel about astronaut Mark Watney, who is stranded on Mars after a failed mission. The book details his struggle for survival using his ingenuity and resourcefulness to stay alive until rescue arrives.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Martian"
    },
    {
        title: "Big Little Lies",
        author: "Liane Moriarty",
        synopsis: "A domestic thriller about a group of women whose lives unravel after a murder at a school trivia night. The novel explores themes of friendship, parenting, and secrets, with dark humor and suspense.",
        cover: "https://via.placeholder.com/300x450.png?text=Big+Little+Lies"
    },
    {
        title: "The Golden Compass",
        author: "Philip Pullman",
        synopsis: "The first book in the *His Dark Materials* series, following a young girl named Lyra as she embarks on an adventure to uncover a secret plot involving children and a mystical substance called Dust. The novel explores themes of religion, science, and fate.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Golden+Compass"
    },
    {
        title: "Rebecca",
        author: "Daphne du Maurier",
        synopsis: "A Gothic novel about a young woman who marries a wealthy widower, only to find that his deceased first wife, Rebecca, still holds a powerful influence over their lives. The novel is filled with suspense, mystery, and themes of love and obsession.",
        cover: "https://via.placeholder.com/300x450.png?text=Rebecca"
    },
    {
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        synopsis: "A children's novel about Mary Lennox, a spoiled and lonely girl who discovers a hidden garden and transforms her life and the lives of those around her as she brings the garden back to life. The novel explores themes of healing, friendship, and personal growth.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Secret+Garden"
    },
    {
        title: "Gone with the Wind",
        author: "Margaret Mitchell",
        synopsis: "A historical novel set during the American Civil War and Reconstruction, following Scarlett O'Hara, a strong-willed Southern woman who struggles to maintain her life and her love for a man named Ashley Wilkes amidst the tumult of war.",
        cover: "https://via.placeholder.com/300x450.png?text=Gone+with+the+Wind"
    },
    {
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        synopsis: "A monumental epic poem that recounts Dante's journey through Hell, Purgatory, and Heaven. It's a deep allegory for the soul's journey toward God, touching on themes of sin, redemption, and divine justice.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Divine+Comedy"
    },
    {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        synopsis: "A classic novel about the adventures of an aging nobleman who, inspired by chivalric tales, sets out to revive knighthood. It blends humor, tragedy, and social commentary on the nature of reality and idealism.",
        cover: "https://via.placeholder.com/300x450.png?text=Don+Quixote"
    },
    {
        title: "The Iliad",
        author: "Homer",
        synopsis: "An epic poem that tells the story of the Trojan War, focusing on the hero Achilles and the wrath that leads to the downfall of Troy. The work explores themes of heroism, fate, and the human condition.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Iliad"
    },
    {
        title: "The Odyssey",
        author: "Homer",
        synopsis: "A sequel to *The Iliad*, this epic poem follows Odysseus's journey home from the Trojan War, enduring trials and temptations. It explores themes of perseverance, loyalty, and the search for home and identity.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Odyssey"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        synopsis: "A Pulitzer Prize-winning novel about racial injustice in the Deep South, told from the perspective of young Scout Finch. It explores themes of morality, empathy, and the loss of innocence.",
        cover: "https://via.placeholder.com/300x450.png?text=To+Kill+a+Mockingbird"
    },
    {
        title: "Invisible Man",
        author: "Ralph Ellison",
        synopsis: "A groundbreaking work that addresses race, identity, and social injustice through the story of an unnamed Black man in 1940s America. The novel blends surrealism and realism in its exploration of societal marginalization.",
        cover: "https://via.placeholder.com/300x450.png?text=Invisible+Man"
    },
    {
        title: "Beloved",
        author: "Toni Morrison",
        synopsis: "A haunting novel about Sethe, an escaped slave who is haunted by the ghost of her dead daughter, Beloved. It examines themes of slavery, motherhood, and the power of memory in post-Civil War America.",
        cover: "https://via.placeholder.com/300x450.png?text=Beloved"
    },
    {
        title: "The Aeneid",
        author: "Virgil",
        synopsis: "This epic poem narrates the journey of Aeneas, a Trojan who travels to Italy and becomes the ancestor of the Romans. Themes of duty, fate, and sacrifice are central.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Aeneid"
    },
    {
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        synopsis: "This novel tells the story of Emma Bovary, a woman whose romantic fantasies lead to disillusionment and tragedy. It is a critique of bourgeois society and materialism.",
        cover: "https://via.placeholder.com/300x450.png?text=Madame+Bovary"
    },
    {
        title: "The Age of Innocence",
        author: "Edith Wharton",
        synopsis: "A novel set in New York's high society, exploring themes of love, duty, and societal expectations through the story of Newland Archer.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Age+of+Innocence"
    },
    {
        title: "Gulliver's Travels",
        author: "Jonathan Swift",
        synopsis: "A satirical novel chronicling Lemuel Gulliver's adventures in fantastical lands, critiquing politics, human nature, and society.",
        cover: "https://via.placeholder.com/300x450.png?text=Gulliver's+Travels"
    },
    {
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
        synopsis: "This classic adventure tale follows young Jim Hawkins as he discovers a pirate treasure map and embarks on a thrilling journey filled with danger, betrayal, and unforgettable characters like Long John Silver.",
        cover: "https://via.placeholder.com/300x450.png?text=Treasure+Island"
    },
    {
        title: "Strange Case of Dr Jekyll and Mr Hyde",
        author: "Robert Louis Stevenson",
        synopsis: "A psychological thriller exploring the duality of human nature, this novella tells the story of Dr. Jekyll, a kind-hearted scientist, and his dark, sinister alter ego, Mr. Hyde.",
        cover: "https://via.placeholder.com/300x450.png?text=Dr+Jekyll+and+Mr+Hyde"
    },
    {
        title: "Kidnapped",
        author: "Robert Louis Stevenson",
        synopsis: "This historical adventure novel follows the journey of David Balfour, a young boy kidnapped and sold into slavery, as he navigates the treacherous political landscape of 18th-century Scotland.",
        cover: "https://via.placeholder.com/300x450.png?text=Kidnapped"
    },
    {
        title: "The Black Arrow",
        author: "Robert Louis Stevenson",
        synopsis: "Set during the Wars of the Roses, this historical novel follows Richard Shelton as he becomes entangled in a conflict involving love, betrayal, and a secret band of outlaws called the Black Arrow.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Black+Arrow"
    },
    {
        title: "A Child's Garden of Verses",
        author: "Robert Louis Stevenson",
        synopsis: "A collection of beautifully written poems that capture the innocence and imagination of childhood, often considered one of Stevenson's finest works in verse.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Child's+Garden+of+Verses"
    },
    {
        title: "Catriona (David Balfour)",
        author: "Robert Louis Stevenson",
        synopsis: "A sequel to *Kidnapped*, this novel continues the adventures of David Balfour as he seeks justice for Alan Breck Stewart and navigates a complicated romance with Catriona Drummond.",
        cover: "https://via.placeholder.com/300x450.png?text=Catriona"
    },
    {
        title: "The Ebb-Tide",
        author: "Robert Louis Stevenson and Lloyd Osbourne",
        synopsis: "This novella explores the moral descent of three disgraced men who seize a ship carrying a valuable cargo, delving into themes of greed, guilt, and redemption.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Ebb-Tide"
    },
    {
        title: "Prince Otto",
        author: "Robert Louis Stevenson",
        synopsis: "A lesser-known romantic novel set in the fictional Germanic state of Grünewald, focusing on political intrigue and the personal growth of Prince Otto and his estranged wife, Seraphina.",
        cover: "https://via.placeholder.com/300x450.png?text=Prince+Otto"
    },
    {
        title: "Great Expectations",
        author: "Charles Dickens",
        synopsis: "The coming-of-age story of Pip, an orphan who dreams of becoming a gentleman and finds his life transformed by a mysterious benefactor. A tale of love, ambition, and social class.",
        cover: "https://via.placeholder.com/300x450.png?text=Great+Expectations"
    },
    {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        synopsis: "Set against the backdrop of the French Revolution, this historical novel explores themes of sacrifice, resurrection, and the conflict between love and loyalty.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Tale+of+Two+Cities"
    },
    {
        title: "Oliver Twist",
        author: "Charles Dickens",
        synopsis: "The story of Oliver, an orphan navigating the harsh realities of Victorian London, encountering memorable characters like Fagin, the Artful Dodger, and Bill Sikes.",
        cover: "https://via.placeholder.com/300x450.png?text=Oliver+Twist"
    },
    {
        title: "David Copperfield",
        author: "Charles Dickens",
        synopsis: "A semi-autobiographical novel following the life of David Copperfield as he grows from a troubled child to a successful author, encountering joy, sorrow, and memorable characters along the way.",
        cover: "https://via.placeholder.com/300x450.png?text=David+Copperfield"
    },
    {
        title: "Bleak House",
        author: "Charles Dickens",
        synopsis: "A critique of the British legal system, this novel weaves together multiple storylines, including the mystery of a disputed inheritance and the secret of Esther Summerson's parentage.",
        cover: "https://via.placeholder.com/300x450.png?text=Bleak+House"
    },
    {
        title: "Hard Times",
        author: "Charles Dickens",
        synopsis: "A social critique of industrial England, this novel examines the struggles of workers and the consequences of utilitarianism through the lives of characters in the fictional town of Coketown.",
        cover: "https://via.placeholder.com/300x450.png?text=Hard+Times"
    },
    {
        title: "Nicholas Nickleby",
        author: "Charles Dickens",
        synopsis: "The adventures of young Nicholas Nickleby as he fights to protect his family from poverty and navigates encounters with colorful and memorable characters.",
        cover: "https://via.placeholder.com/300x450.png?text=Nicholas+Nickleby"
    },
    {
        title: "The Pickwick Papers",
        author: "Charles Dickens",
        synopsis: "A humorous account of the misadventures of Mr. Pickwick and his companions in the Pickwick Club, filled with satire and witty observations of Victorian society.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Pickwick+Papers"
    },
    {
        title: "Little Dorrit",
        author: "Charles Dickens",
        synopsis: "This novel examines the crushing effects of debt and imprisonment through the story of Amy Dorrit, who was born and raised in a debtor's prison, and the people who surround her.",
        cover: "https://via.placeholder.com/300x450.png?text=Little+Dorrit"
    },
    {
        title: "Dombey and Son",
        author: "Charles Dickens",
        synopsis: "A story of pride, family, and redemption, focusing on Paul Dombey, a wealthy merchant whose obsession with his business leads to personal tragedy.",
        cover: "https://via.placeholder.com/300x450.png?text=Dombey+and+Son"
    },
    {
        title: "The Old Curiosity Shop",
        author: "Charles Dickens",
        synopsis: "The tragic tale of Little Nell and her grandfather as they flee from the villainous Quilp and face trials and adventures in their quest for safety.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Old+Curiosity+Shop"
    },
    {
        title: "Barnaby Rudge",
        author: "Charles Dickens",
        synopsis: "A historical novel set during the Gordon Riots in 1780, exploring themes of political unrest, loyalty, and love in turbulent times.",
        cover: "https://via.placeholder.com/300x450.png?text=Barnaby+Rudge"
    },
    {
        title: "Our Mutual Friend",
        author: "Charles Dickens",
        synopsis: "A complex and darkly satirical tale of greed, wealth, and love, centered around the inheritance of a large fortune and the moral struggles it brings.",
        cover: "https://via.placeholder.com/300x450.png?text=Our+Mutual+Friend"
    },
    {
        title: "Martin Chuzzlewit",
        author: "Charles Dickens",
        synopsis: "A satirical look at selfishness and hypocrisy, following Martin Chuzzlewit's journey of self-discovery and transformation after a series of misadventures.",
        cover: "https://via.placeholder.com/300x450.png?text=Martin+Chuzzlewit"
    },
    {
        title: "A Christmas Carol",
        author: "Charles Dickens",
        synopsis: "One of the most famous Christmas stories of all time, this novella follows the transformation of Ebenezer Scrooge from a miserly curmudgeon to a generous man after visits from three ghosts.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Christmas+Carol"
    },
    {
        title: "The Sound and the Fury",
        author: "William Faulkner",
        synopsis: "A groundbreaking novel that tells the decline of the Compson family through the fragmented and multi-perspective narratives of its members.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Sound+and+the+Fury"
    },
    {
        title: "As I Lay Dying",
        author: "William Faulkner",
        synopsis: "A darkly comic and poignant tale of the Bundren family's journey to bury their matriarch, told through the distinct voices of multiple narrators.",
        cover: "https://via.placeholder.com/300x450.png?text=As+I+Lay+Dying"
    },
    {
        title: "Light in August",
        author: "William Faulkner",
        synopsis: "A complex story of identity, race, and isolation in the American South, centered on a drifter named Joe Christmas and his tragic journey.",
        cover: "https://via.placeholder.com/300x450.png?text=Light+in+August"
    },
    {
        title: "Absalom, Absalom!",
        author: "William Faulkner",
        synopsis: "A richly layered exploration of the rise and fall of the Sutpen dynasty, delving into themes of ambition, race, and the Southern legacy.",
        cover: "https://via.placeholder.com/300x450.png?text=Absalom,+Absalom!"
    },
    {
        title: "Sanctuary",
        author: "William Faulkner",
        synopsis: "A controversial and shocking novel about crime, corruption, and the darker aspects of human nature in a small Southern town.",
        cover: "https://via.placeholder.com/300x450.png?text=Sanctuary"
    },
    {
        title: "Go Down, Moses",
        author: "William Faulkner",
        synopsis: "A collection of interconnected stories examining the lives of the McCaslin family and exploring themes of race, land, and legacy.",
        cover: "https://via.placeholder.com/300x450.png?text=Go+Down,+Moses"
    },
    {
        title: "Intruder in the Dust",
        author: "William Faulkner",
        synopsis: "A gripping mystery and social commentary about racial injustice in the South, revolving around the trial of a black man accused of murder.",
        cover: "https://via.placeholder.com/300x450.png?text=Intruder+in+the+Dust"
    },
    {
        title: "The Reivers",
        author: "William Faulkner",
        synopsis: "A lighthearted and nostalgic tale of a young boy's coming-of-age adventure in early 20th-century Mississippi.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Reivers"
    },
    {
        title: "Flags in the Dust",
        author: "William Faulkner",
        synopsis: "An early work depicting the struggles and disillusionments of the Sartoris family in post-World War I Mississippi.",
        cover: "https://via.placeholder.com/300x450.png?text=Flags+in+the+Dust"
    },
    {
        title: "If I Forget Thee, Jerusalem (The Wild Palms)",
        author: "William Faulkner",
        synopsis: "Two intertwined narratives exploring love, sacrifice, and the consequences of personal choices, set against different backdrops.",
        cover: "https://via.placeholder.com/300x450.png?text=If+I+Forget+Thee,+Jerusalem"
    },
    {
        title: "The Hamlet",
        author: "William Faulkner",
        synopsis: "The first novel in the Snopes trilogy, chronicling the rise of the cunning and ambitious Snopes family in rural Mississippi.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Hamlet"
    },
    {
        title: "The Town",
        author: "William Faulkner",
        synopsis: "The second installment of the Snopes trilogy, following the Snopes family's influence as they establish power in Jefferson, Mississippi.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Town"
    },
    {
        title: "The Mansion",
        author: "William Faulkner",
        synopsis: "The final volume of the Snopes trilogy, examining the downfall of the Snopes family and the enduring conflicts they leave behind.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Mansion"
    },
    {
        title: "Pylon",
        author: "William Faulkner",
        synopsis: "A lesser-known novel exploring the lives of barnstorming pilots in the 1930s and their dangerous, nomadic existence.",
        cover: "https://via.placeholder.com/300x450.png?text=Pylon"
    },
    {
        title: "Knight's Gambit",
        author: "William Faulkner",
        synopsis: "A collection of detective stories featuring Gavin Stevens, a shrewd lawyer and amateur sleuth in Yoknapatawpha County.",
        cover: "https://via.placeholder.com/300x450.png?text=Knight's+Gambit"
    },
    {
        title: "Little Men",
        author: "Louisa May Alcott",
        synopsis: "The charming sequel to Little Women, following Jo and her husband as they run a school for boys, teaching them about life, love, and growth.",
        cover: "https://via.placeholder.com/300x450.png?text=Little+Men"
    },
    // Little Women
    {
        title: "Little Women",
        author: "Louisa May Alcott",
        synopsis: "A classic coming-of-age tale of the four March sisters as they navigate family, love, and life in 19th-century New England.",
        cover: "https://via.placeholder.com/300x450.png?text=Little+Women"
    },
    // Dune Series
    {
        title: "Dune",
        author: "Frank Herbert",
        synopsis: "The first book in the epic science fiction saga, exploring politics, religion, and power on the desert planet of Arrakis.",
        cover: "https://via.placeholder.com/300x450.png?text=Dune"
    },
    {
        title: "Dune Messiah",
        author: "Frank Herbert",
        synopsis: "The sequel to Dune, chronicling the continued rise and challenges faced by Paul Atreides as Emperor of the Known Universe.",
        cover: "https://via.placeholder.com/300x450.png?text=Dune+Messiah"
    },
    {
        title: "Children of Dune",
        author: "Frank Herbert",
        synopsis: "The story of Paul Atreides’ children and their destiny in the intricate world of Arrakis and the galactic empire.",
        cover: "https://via.placeholder.com/300x450.png?text=Children+of+Dune"
    },
    // Aesop's Fables
    {
        title: "Aesop's Fables",
        author: "Aesop",
        synopsis: "A timeless collection of moral tales featuring animals and simple yet profound lessons about human nature.",
        cover: "https://via.placeholder.com/300x450.png?text=Aesop's+Fables"
    },
    // Faust
    {
        title: "Faust",
        author: "Johann Wolfgang von Goethe",
        synopsis: "The tragic story of a man who makes a pact with the devil in exchange for unlimited knowledge and worldly pleasures.",
        cover: "https://via.placeholder.com/300x450.png?text=Faust"
    },
    // Sherlock Holmes
    {
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        synopsis: "A collection of twelve short stories featuring the iconic detective Sherlock Holmes and his faithful friend Dr. Watson.",
        cover: "https://via.placeholder.com/300x450.png?text=Adventures+of+Sherlock+Holmes"
    },
    // Paradise Lost
    {
        title: "Paradise Lost",
        author: "John Milton",
        synopsis: "An epic poem that tells the story of the fall of man, Satan's rebellion, and the expulsion of Adam and Eve from Eden.",
        cover: "https://via.placeholder.com/300x450.png?text=Paradise+Lost"
    },
    // The Prince
    {
        title: "The Prince",
        author: "Niccolò Machiavelli",
        synopsis: "A seminal work on political philosophy and leadership, examining the nature of power and how to acquire and maintain it.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Prince"
    },
    // The Scarlet Letter
    {
        title: "The Scarlet Letter",
        author: "Nathaniel Hawthorne",
        synopsis: "A powerful tale of sin, guilt, and redemption set in Puritan New England, centering on the life of Hester Prynne.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Scarlet+Letter"
    },
    // Uncle Tom's Cabin
    {
        title: "Uncle Tom's Cabin",
        author: "Harriet Beecher Stowe",
        synopsis: "A landmark anti-slavery novel that had a profound impact on America’s perception of slavery and its injustices.",
        cover: "https://via.placeholder.com/300x450.png?text=Uncle+Tom's+Cabin"
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        synopsis: "A sweeping epic that chronicles the lives of Russian aristocratic families during the Napoleonic Wars, exploring themes of war, love, and the human spirit.",
        cover: "https://via.placeholder.com/300x450.png?text=War+and+Peace"
    },
    {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        synopsis: "A tragic love story set in 19th-century Russia, following the doomed affair between Anna Karenina and Count Vronsky, alongside themes of family, society, and morality.",
        cover: "https://via.placeholder.com/300x450.png?text=Anna+Karenina"
    },
    {
        title: "The Death of Ivan Ilyich",
        author: "Leo Tolstoy",
        synopsis: "A profound novella exploring the existential crisis and the search for meaning in the face of death through the story of a dying Russian bureaucrat.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Death+of+Ivan+Ilyich"
    },
    {
        title: "Resurrection",
        author: "Leo Tolstoy",
        synopsis: "A story of redemption, following Prince Dmitri as he seeks to atone for his past sins, exploring themes of justice, morality, and societal reform.",
        cover: "https://via.placeholder.com/300x450.png?text=Resurrection"
    },
    {
        title: "Childhood",
        author: "Leo Tolstoy",
        synopsis: "The first part of Tolstoy’s autobiographical trilogy, offering a vivid depiction of childhood in 19th-century Russia.",
        cover: "https://via.placeholder.com/300x450.png?text=Childhood"
    },
    {
        title: "Boyhood",
        author: "Leo Tolstoy",
        synopsis: "The second part of Tolstoy’s autobiographical trilogy, capturing the complexities and emotional turmoil of adolescence.",
        cover: "https://via.placeholder.com/300x450.png?text=Boyhood"
    },
    {
        title: "Youth",
        author: "Leo Tolstoy",
        synopsis: "The final part of the trilogy, exploring the transition to adulthood and the search for purpose and truth.",
        cover: "https://via.placeholder.com/300x450.png?text=Youth"
    },
    {
        title: "Hadji Murat",
        author: "Leo Tolstoy",
        synopsis: "A gripping tale of a Caucasian rebel caught between two warring empires, examining themes of loyalty, freedom, and conflict.",
        cover: "https://via.placeholder.com/300x450.png?text=Hadji+Murat"
    },
    {
        title: "What Is Art?",
        author: "Leo Tolstoy",
        synopsis: "A philosophical treatise questioning the nature and purpose of art, presenting Tolstoy’s views on aesthetics and its moral implications.",
        cover: "https://via.placeholder.com/300x450.png?text=What+Is+Art"
    },
    {
        title: "A Confession",
        author: "Leo Tolstoy",
        synopsis: "A deeply personal exploration of Tolstoy's spiritual crisis and his journey toward faith and self-discovery.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Confession"
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        synopsis: "A groundbreaking modernist novel that parallels Homer’s *Odyssey* while exploring a single day in the life of Leopold Bloom in early 20th-century Dublin.",
        cover: "https://via.placeholder.com/300x450.png?text=Ulysses"
    },
    {
        title: "A Portrait of the Artist as a Young Man",
        author: "James Joyce",
        synopsis: "A semi-autobiographical coming-of-age story following Stephen Dedalus as he struggles with identity, religion, and artistic expression.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Portrait+of+the+Artist+as+a+Young+Man"
    },
    {
        title: "Dubliners",
        author: "James Joyce",
        synopsis: "A collection of 15 short stories depicting the lives, struggles, and epiphanies of ordinary Dubliners, showcasing Joyce's mastery of realism and symbolism.",
        cover: "https://via.placeholder.com/300x450.png?text=Dubliners"
    },
    {
        title: "Finnegans Wake",
        author: "James Joyce",
        synopsis: "A dense and experimental novel, filled with wordplay and allusions, exploring the cyclical nature of history and human experience.",
        cover: "https://via.placeholder.com/300x450.png?text=Finnegans+Wake"
    },
    {
        title: "Chamber Music",
        author: "James Joyce",
        synopsis: "A collection of lyrical poems reflecting themes of love, longing, and introspection, showcasing Joyce's early artistic voice.",
        cover: "https://via.placeholder.com/300x450.png?text=Chamber+Music"
    },
    {
        title: "Exiles",
        author: "James Joyce",
        synopsis: "A play about love, jealousy, and betrayal, reflecting Joyce’s exploration of human emotions and interpersonal dynamics.",
        cover: "https://via.placeholder.com/300x450.png?text=Exiles"
    },
    {
        title: "Stephen Hero",
        author: "James Joyce",
        synopsis: "An earlier draft of *A Portrait of the Artist as a Young Man*, offering insights into Joyce’s development of Stephen Dedalus's character.",
        cover: "https://via.placeholder.com/300x450.png?text=Stephen+Hero"
    },
    {
        title: "The Dead",
        author: "James Joyce",
        synopsis: "The final and most celebrated story in *Dubliners*, portraying a dinner party and a profound reflection on love, loss, and mortality.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Dead"
    },
    {
        title: "The Shining",
        author: "Stephen King",
        synopsis: "A chilling tale about Jack Torrance, an aspiring writer and recovering alcoholic, who takes a job as the winter caretaker of the Overlook Hotel, where supernatural forces begin to corrupt him.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Shining"
    },
    {
        title: "It",
        author: "Stephen King",
        synopsis: "A terrifying story of a group of children who face off against a shape-shifting entity that takes the form of a clown named Pennywise in the small town of Derry.",
        cover: "https://via.placeholder.com/300x450.png?text=It"
    },
    {
        title: "Carrie",
        author: "Stephen King",
        synopsis: "The harrowing tale of Carrie White, a shy, bullied teenager who discovers her telekinetic powers and unleashes them in a tragic act of revenge.",
        cover: "https://via.placeholder.com/300x450.png?text=Carrie"
    },
    {
        title: "Misery",
        author: "Stephen King",
        synopsis: "An unsettling psychological thriller about an author held captive by his self-proclaimed number-one fan, who forces him to rewrite his latest novel.",
        cover: "https://via.placeholder.com/300x450.png?text=Misery"
    },
    {
        title: "The Stand",
        author: "Stephen King",
        synopsis: "An epic post-apocalyptic saga following the survivors of a deadly plague, as they are drawn into a battle between good and evil.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Stand"
    },
    {
        title: "Pet Sematary",
        author: "Stephen King",
        synopsis: "A haunting tale about the Creed family, who discover a mysterious burial ground that brings the dead back to life—with horrific consequences.",
        cover: "https://via.placeholder.com/300x450.png?text=Pet+Sematary"
    },
    {
        title: "Salem's Lot",
        author: "Stephen King",
        synopsis: "A gripping horror story about a writer returning to his hometown, only to discover that vampires have taken over the town.",
        cover: "https://via.placeholder.com/300x450.png?text=Salem%27s+Lot"
    },
    {
        title: "Doctor Sleep",
        author: "Stephen King",
        synopsis: "A sequel to *The Shining*, following a grown-up Danny Torrance as he battles alcoholism and protects a young girl with similar powers from a cult called The True Knot.",
        cover: "https://via.placeholder.com/300x450.png?text=Doctor+Sleep"
    },
    {
        title: "11/22/63",
        author: "Stephen King",
        synopsis: "A time-travel novel where a teacher goes back in time to prevent the assassination of John F. Kennedy, only to face unforeseen consequences.",
        cover: "https://via.placeholder.com/300x450.png?text=11%2F22%2F63"
    },
    {
        title: "The Dark Tower: The Gunslinger",
        author: "Stephen King",
        synopsis: "The first book in King's sprawling fantasy series, following Roland Deschain on his quest to find the Dark Tower and uncover the mysteries of his world.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Gunslinger"
    },
    {
        title: "The Green Mile",
        author: "Stephen King",
        synopsis: "A poignant and supernatural tale of life on death row, centering on the mysterious and gentle John Coffey, who has miraculous healing powers.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Green+Mile"
    },
    {
        title: "Christine",
        author: "Stephen King",
        synopsis: "A supernatural horror story about a 1958 Plymouth Fury that seems to have a mind—and a murderous will—of its own.",
        cover: "https://via.placeholder.com/300x450.png?text=Christine"
    },
    {
        title: "Under the Dome",
        author: "Stephen King",
        synopsis: "A small town is suddenly and inexplicably sealed off from the outside world by an impenetrable dome, leading to chaos and power struggles among the residents.",
        cover: "https://via.placeholder.com/300x450.png?text=Under+the+Dome"
    },
    {
        title: "The Outsider",
        author: "Stephen King",
        synopsis: "A blend of crime and supernatural horror, as a detective investigates a brutal murder that seems to defy logical explanation.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Outsider"
    },
    {
        title: "Bag of Bones",
        author: "Stephen King",
        synopsis: "A chilling ghost story about a grieving widower, a haunted lakeside house, and the unraveling of dark secrets in a small town.",
        cover: "https://via.placeholder.com/300x450.png?text=Bag+of+Bones"
    },
    {
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        synopsis: "Hercule Poirot investigates the murder of a wealthy American aboard the luxurious Orient Express, where every passenger is a suspect.",
        cover: "https://via.placeholder.com/300x450.png?text=Murder+on+the+Orient+Express"
    },
    {
        title: "And Then There Were None",
        author: "Agatha Christie",
        synopsis: "Ten strangers are invited to a remote island, where they are killed one by one in accordance with a chilling nursery rhyme.",
        cover: "https://via.placeholder.com/300x450.png?text=And+Then+There+Were+None"
    },
    {
        title: "The Murder of Roger Ackroyd",
        author: "Agatha Christie",
        synopsis: "In this groundbreaking mystery, Hercule Poirot solves the murder of a wealthy man in a small English village, with a shocking twist.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Murder+of+Roger+Ackroyd"
    },
    {
        title: "Death on the Nile",
        author: "Agatha Christie",
        synopsis: "A luxury cruise on the Nile turns deadly when a wealthy heiress is found murdered, and Hercule Poirot must uncover the killer.",
        cover: "https://via.placeholder.com/300x450.png?text=Death+on+the+Nile"
    },
    {
        title: "The ABC Murders",
        author: "Agatha Christie",
        synopsis: "Poirot faces a serial killer who taunts him with clues and a sequence of murders tied to the alphabet.",
        cover: "https://via.placeholder.com/300x450.png?text=The+ABC+Murders"
    },
    {
        title: "The Mysterious Affair at Styles",
        author: "Agatha Christie",
        synopsis: "In Poirot’s first case, he investigates the poisoning of a wealthy woman in a quaint English country house.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Mysterious+Affair+at+Styles"
    },
    {
        title: "Evil Under the Sun",
        author: "Agatha Christie",
        synopsis: "Poirot is on holiday at a seaside resort when the murder of a glamorous woman disrupts the idyllic setting.",
        cover: "https://via.placeholder.com/300x450.png?text=Evil+Under+the+Sun"
    },
    {
        title: "Five Little Pigs",
        author: "Agatha Christie",
        synopsis: "Poirot investigates a murder from 16 years earlier, piecing together the truth through the accounts of five witnesses.",
        cover: "https://via.placeholder.com/300x450.png?text=Five+Little+Pigs"
    },
    {
        title: "Crooked House",
        author: "Agatha Christie",
        synopsis: "A wealthy patriarch is poisoned, and his entire dysfunctional family becomes suspect in this standalone classic.",
        cover: "https://via.placeholder.com/300x450.png?text=Crooked+House"
    },
    {
        title: "A Murder is Announced",
        author: "Agatha Christie",
        synopsis: "In a small village, an invitation to a murder turns into a real killing, and Miss Marple is on the case.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Murder+is+Announced"
    },
    {
        title: "Hercule Poirot's Christmas",
        author: "Agatha Christie",
        synopsis: "A wealthy patriarch invites his family for Christmas, only to be found murdered, with Poirot uncovering the killer.",
        cover: "https://via.placeholder.com/300x450.png?text=Hercule+Poirot%27s+Christmas"
    },
    {
        title: "The Body in the Library",
        author: "Agatha Christie",
        synopsis: "Miss Marple investigates when the body of a young woman is discovered in the library of a respectable household.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Body+in+the+Library"
    },
    {
        title: "Peril at End House",
        author: "Agatha Christie",
        synopsis: "Poirot investigates a series of attempts on the life of a young woman while vacationing in Cornwall.",
        cover: "https://via.placeholder.com/300x450.png?text=Peril+at+End+House"
    },
    {
        title: "The Pale Horse",
        author: "Agatha Christie",
        synopsis: "A cryptic list of names leads Mark Easterbrook to a mysterious inn and whispers of witchcraft and murder.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Pale+Horse"
    },
    {
        title: "Endless Night",
        author: "Agatha Christie",
        synopsis: "A dark psychological thriller about a young couple whose dream home becomes the site of deadly secrets.",
        cover: "https://via.placeholder.com/300x450.png?text=Endless+Night"
    },
    {
        title: "The Metamorphosis",
        author: "Franz Kafka",
        synopsis: "The haunting story of Gregor Samsa, who wakes up one morning to find himself transformed into a giant insect, exploring themes of alienation and identity.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Metamorphosis"
    },
    {
        title: "The Trial",
        author: "Franz Kafka",
        synopsis: "A nightmarish tale of Josef K., who is suddenly arrested and prosecuted by a mysterious authority, with the charges against him never revealed.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Trial"
    },
    {
        title: "The Castle",
        author: "Franz Kafka",
        synopsis: "A surreal and unfinished novel about a land surveyor, known only as K., who struggles against a mysterious and inaccessible bureaucratic authority.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Castle"
    },
    {
        title: "Amerika (The Man Who Disappeared)",
        author: "Franz Kafka",
        synopsis: "A semi-autobiographical novel following the journey of Karl Rossmann, a young immigrant navigating the absurdities of American society.",
        cover: "https://via.placeholder.com/300x450.png?text=Amerika"
    },
    {
        title: "In the Penal Colony",
        author: "Franz Kafka",
        synopsis: "A disturbing short story about a peculiar torture and execution machine used in a remote penal colony, and the moral questions it raises.",
        cover: "https://via.placeholder.com/300x450.png?text=In+the+Penal+Colony"
    },
    {
        title: "A Hunger Artist",
        author: "Franz Kafka",
        synopsis: "A short story about a man who performs public fasting as an art form, exploring themes of isolation, misunderstood genius, and societal indifference.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Hunger+Artist"
    },
    {
        title: "The Burrow",
        author: "Franz Kafka",
        synopsis: "A dark and introspective story about a creature obsessively building and defending its underground burrow, embodying Kafka's themes of anxiety and isolation.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Burrow"
    },
    {
        title: "The Judgment",
        author: "Franz Kafka",
        synopsis: "A powerful and enigmatic short story about a strained father-son relationship, culminating in a shocking and surreal act of judgment.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Judgment"
    },
    {
        title: "Letters to Felice",
        author: "Franz Kafka",
        synopsis: "A collection of Kafka's letters to his fiancée, Felice Bauer, revealing his inner struggles, anxieties, and deep intellect.",
        cover: "https://via.placeholder.com/300x450.png?text=Letters+to+Felice"
    },
    {
        title: "The Great Wall of China",
        author: "Franz Kafka",
        synopsis: "A collection of Kafka's stories, including the titular one about the construction of the Great Wall, reflecting Kafka’s exploration of bureaucracy and human futility.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Great+Wall+of+China"
    },
    {
        title: "Investigations of a Dog",
        author: "Franz Kafka",
        synopsis: "A philosophical short story narrated by a dog attempting to understand the world and its mysterious forces.",
        cover: "https://via.placeholder.com/300x450.png?text=Investigations+of+a+Dog"
    },
    {
        title: "Before the Law",
        author: "Franz Kafka",
        synopsis: "A parable about a man seeking access to the law, only to be perpetually delayed by a gatekeeper, encapsulating themes of existential despair and bureaucracy.",
        cover: "https://via.placeholder.com/300x450.png?text=Before+the+Law"
    },
    {
        title: "Heart of Darkness",
        author: "Joseph Conrad",
        synopsis: "The journey of Marlow, a sailor who travels into the Congo Free State to find Kurtz, a mysterious ivory trader, in a chilling exploration of imperialism, madness, and the darkness of the human soul.",
        cover: "https://via.placeholder.com/300x450.png?text=Heart+of+Darkness"
    },
    {
        title: "Lord Jim",
        author: "Joseph Conrad",
        synopsis: "The story of Jim, a young and idealistic officer who seeks redemption after abandoning his post during a maritime disaster, examining themes of honor, guilt, and self-perception.",
        cover: "https://via.placeholder.com/300x450.png?text=Lord+Jim"
    },
    {
        title: "Nostromo",
        author: "Joseph Conrad",
        synopsis: "A tale set in the fictional South American country of Costaguana, exploring political intrigue, betrayal, and the moral ambiguity of a nation's struggle for independence.",
        cover: "https://via.placeholder.com/300x450.png?text=Nostromo"
    },
    {
        title: "The Secret Sharer",
        author: "Joseph Conrad",
        synopsis: "A young ship's captain faces a moral dilemma when he takes in a fugitive from a neighboring vessel, a story about isolation, self-discovery, and the nature of authority.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Secret+Sharer"
    },
    {
        title: "The Shadow Line",
        author: "Joseph Conrad",
        synopsis: "A story about the psychological and emotional trials faced by a young sea captain as he crosses the boundary from a novice to an experienced officer, confronting the internal conflict between fear and leadership.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Shadow+Line"
    },
    {
        title: "Typhoon",
        author: "Joseph Conrad",
        synopsis: "A gripping maritime adventure that portrays the strength of nature and the human will to survive as a ship faces a ferocious storm in the South China Sea.",
        cover: "https://via.placeholder.com/300x450.png?text=Typhoon"
    },
    {
        title: "Chance",
        author: "Joseph Conrad",
        synopsis: "A psychological tale involving a young woman named Flora de Barral and her complex relationship with a sea captain, delving into themes of fate, chance, and moral decision-making.",
        cover: "https://via.placeholder.com/300x450.png?text=Chance"
    },
    {
        title: "Victory",
        author: "Joseph Conrad",
        synopsis: "A tense psychological drama about a man named Axel Heyst, who seeks to escape his past, only to become entangled in a dangerous love triangle and conflict.",
        cover: "https://via.placeholder.com/300x450.png?text=Victory"
    },
    {
        title: "The Return",
        author: "Joseph Conrad",
        synopsis: "A short novel that focuses on the moral implications of a man's return to the sea after many years, confronting the weight of past decisions and guilt.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Return"
    },
    {
        title: "An Outcast of the Islands",
        author: "Joseph Conrad",
        synopsis: "Set in the Malay Archipelago, this novel follows the fall of a man named Willems, exploring themes of betrayal, cultural conflict, and the consequences of moral choices.",
        cover: "https://via.placeholder.com/300x450.png?text=An+Outcast+of+the+Islands"
    },
    {
        title: "The Nigger of the 'Narcissus'",
        author: "Joseph Conrad",
        synopsis: "A powerful novella exploring the hardships faced by a group of sailors aboard the British merchant ship Narcissus, with a focus on racial and social tensions.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Nigger+of+the+'Narcissus'"
    },
    {
        title: "The Duel",
        author: "Joseph Conrad",
        synopsis: "The story of two French officers in the Napoleonic army who engage in a lifelong, escalating duel, exploring themes of honor, obsession, and the futility of violence.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Duel"
    },
    {
        title: "Oedipus Rex",
        author: "Sophocles",
        synopsis: "The tragic tale of Oedipus, a king who unknowingly fulfills a prophecy that foretells he will kill his father and marry his mother, exploring themes of fate, guilt, and self-discovery.",
        cover: "https://via.placeholder.com/300x450.png?text=Oedipus+Rex"
    },
    {
        title: "Antigone",
        author: "Sophocles",
        synopsis: "The story of Antigone, the daughter of Oedipus, who defies the king's orders to give her brother a proper burial, challenging themes of law, morality, and family loyalty.",
        cover: "https://via.placeholder.com/300x450.png?text=Antigone"
    },
    {
        title: "Medea",
        author: "Euripides",
        synopsis: "A tragedy that tells the story of Medea, a woman scorned by her husband's betrayal, leading her to take a horrific revenge on him, her children, and those around her.",
        cover: "https://via.placeholder.com/300x450.png?text=Medea"
    },
    {
        title: "The Bacchae",
        author: "Euripides",
        synopsis: "The god Dionysus returns to Thebes to seek revenge on King Pentheus, who refuses to recognize him as a god, resulting in chaos, madness, and violence.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Bacchae"
    },
    {
        title: "The Clouds",
        author: "Aristophanes",
        synopsis: "A comedy that satirizes the intellectuals of Athens and the teaching of Socratic philosophy, featuring the character of Socrates and his teachings on rhetoric and reasoning.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Clouds"
    },
    {
        title: "Lysistrata",
        author: "Aristophanes",
        synopsis: "A comedic play in which the women of Athens and Sparta withhold sex from their husbands in a bid to end the Peloponnesian War, focusing on themes of power, gender, and peace.",
        cover: "https://via.placeholder.com/300x450.png?text=Lysistrata"
    },
    {
        title: "The Frogs",
        author: "Aristophanes",
        synopsis: "A comedic play where the god Dionysus travels to the underworld to bring the playwright Euripides back to life, critiquing Athenian society and politics through humor and satire.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Frogs"
    },
    {
        title: "The Acharnians",
        author: "Aristophanes",
        synopsis: "A comedy that critiques the Peloponnesian War and Athenian politics, focusing on a character named Dikaiopolis, who makes a personal peace treaty with the enemy.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Acharnians"
    },
    {
        title: "Phaedra",
        author: "Seneca",
        synopsis: "A Roman tragedy about Phaedra, who falls in love with her stepson Hippolytus and ultimately brings about tragedy through her actions, examining themes of passion, guilt, and fate.",
        cover: "https://via.placeholder.com/300x450.png?text=Phaedra"
    },
    {
        title: "Thyestes",
        author: "Seneca",
        synopsis: "A dark tragedy in which the characters Thyestes and Atreus engage in a vicious cycle of revenge, ultimately leading to cannibalism and ruin.",
        cover: "https://via.placeholder.com/300x450.png?text=Thyestes"
    },
    {
        title: "Phaedra",
        author: "Seneca",
        synopsis: "A Roman tragedy about Phaedra, who falls in love with her stepson Hippolytus and ultimately brings about tragedy through her actions, examining themes of passion, guilt, and fate.",
        cover: "https://via.placeholder.com/300x450.png?text=Phaedra"
    },
    {
        title: "A Room with a View",
        author: "E.M. Forster",
        synopsis: "The story of Lucy Honeychurch, a young woman who embarks on a journey of self-discovery while grappling with issues of love, class, and societal expectations in Edwardian England.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Room+with+a+View"
    },
    {
        title: "Howards End",
        author: "E.M. Forster",
        synopsis: "A novel exploring the clash between the social classes in early 20th-century England, centering around the lives of three families and their complex relationships with the house, Howards End.",
        cover: "https://via.placeholder.com/300x450.png?text=Howards+End"
    },
    {
        title: "A Passage to India",
        author: "E.M. Forster",
        synopsis: "Set during the British Raj in India, this novel explores themes of racial tension, colonialism, and the conflict between the British and the Indians through the story of an Englishwoman who accuses an Indian doctor of assault.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Passage+to+India"
    },
    {
        title: "Maurice",
        author: "E.M. Forster",
        synopsis: "A groundbreaking novel for its time, *Maurice* follows the emotional journey of a young man discovering and accepting his homosexuality in a society that condemns it.",
        cover: "https://via.placeholder.com/300x450.png?text=Maurice"
    },
    {
        title: "Where Angels Fear to Tread",
        author: "E.M. Forster",
        synopsis: "A story about a young woman who travels to Italy, only to be caught up in a scandalous relationship and the moral dilemmas it causes among her British family and friends.",
        cover: "https://via.placeholder.com/300x450.png?text=Where+Angels+Fear+to+Tread"
    },
    {
        title: "The Longest Journey",
        author: "E.M. Forster",
        synopsis: "This novel tells the story of Rickie, a young man who struggles with personal duty, love, and his aspirations in the backdrop of Victorian society.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Longest+Journey"
    },
    {
        title: "Tess of the d'Urbervilles",
        author: "Thomas Hardy",
        synopsis: "The tragic story of Tess, a young woman who is wronged by society and her own family, exploring themes of innocence, fate, and social class in rural England.",
        cover: "https://via.placeholder.com/300x450.png?text=Tess+of+the+d%27Urbervilles"
    },
    {
        title: "Far from the Madding Crowd",
        author: "Thomas Hardy",
        synopsis: "A tale of love, passion, and betrayal set in the rural English countryside, focusing on the independent Bathsheba Everdene and the men who fall in love with her.",
        cover: "https://via.placeholder.com/300x450.png?text=Far+from+the+Madding+Crowd"
    },
    {
        title: "Jude the Obscure",
        author: "Thomas Hardy",
        synopsis: "The story of Jude Fawley, a young man from a poor background who struggles to gain an education and pursue his dreams, only to be thwarted by societal and personal forces.",
        cover: "https://via.placeholder.com/300x450.png?text=Jude+the+Obscure"
    },
    {
        title: "The Mayor of Casterbridge",
        author: "Thomas Hardy",
        synopsis: "A powerful exploration of fate and redemption, this novel follows Michael Henchard, a man who rises to prominence as the mayor of Casterbridge, only to face the consequences of his past mistakes.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Mayor+of+Casterbridge"
    },
    {
        title: "Return of the Native",
        author: "Thomas Hardy",
        synopsis: "Set on the heathland of Egdon Heath, this novel tells the story of Eustacia Vye and her doomed love affair, addressing themes of passion, nature, and destiny.",
        cover: "https://via.placeholder.com/300x450.png?text=Return+of+the+Native"
    },
    {
        title: "Under the Greenwood Tree",
        author: "Thomas Hardy",
        synopsis: "A lighthearted, pastoral novel set in a small English village, following the romantic entanglements of the local schoolmaster and his courtship of the village maiden.",
        cover: "https://via.placeholder.com/300x450.png?text=Under+the+Greenwood+Tree"
    },
    {
        title: "The Woodlanders",
        author: "Thomas Hardy",
        synopsis: "A story about love, jealousy, and the interplay between human desires and the harsh realities of life, set against the backdrop of the Dorset woodlands.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Woodlanders"
    },
    {
        title: "Beowulf",
        author: "Anonymous",
        synopsis: "One of the oldest and most significant works of Old English literature, Beowulf tells the story of a hero's battle against the monster Grendel, Grendel's mother, and a dragon.",
        cover: "https://via.placeholder.com/300x450.png?text=Beowulf"
    },
    {
        title: "The Canterbury Tales",
        author: "Geoffrey Chaucer",
        synopsis: "A collection of 24 stories told by a group of pilgrims traveling to Canterbury, providing a vivid portrayal of medieval society and its diverse characters.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Canterbury+Tales"
    },
    {
        title: "Sir Gawain and the Green Knight",
        author: "Anonymous",
        synopsis: "A chivalric romance in which Sir Gawain, a knight of the Round Table, faces a series of challenges, including a mysterious Green Knight who challenges him to a deadly game.",
        cover: "https://via.placeholder.com/300x450.png?text=Sir+Gawain+and+the+Green+Knight"
    },
    {
        title: "The Song of Roland",
        author: "Anonymous",
        synopsis: "An epic poem that tells the story of Roland, a knight who heroically defends Charlemagne's army against overwhelming odds, showcasing the ideals of knightly honor.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Song+of+Roland"
    },
    {
        title: "The Mabinogion",
        author: "Anonymous",
        synopsis: "A collection of Welsh myths and legends, combining elements of fantasy, heroism, and tragedy, exploring the lives of kings, warriors, and mythical creatures.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Mabinogion"
    },
    {
        title: "The Book of the City of Ladies",
        author: "Christine de Pizan",
        synopsis: "A pioneering feminist work, this allegorical text examines the role of women in society, advocating for women's intellectual and moral capacities.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Book+of+the+City+of+Ladies"
    },
    {
        title: "The Nibelungenlied",
        author: "Anonymous",
        synopsis: "A German epic poem that tells the story of the hero Siegfried, his betrayal, and the vengeance of his wife Kriemhild, set against a backdrop of political intrigue and tragedy.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Nibelungenlied"
    },
    {
        title: "Tristan and Isolde",
        author: "Anonymous",
        synopsis: "A tragic romance about the love between Tristan, a knight, and Isolde, a princess, whose love affair leads to betrayal, heartache, and death.",
        cover: "https://via.placeholder.com/300x450.png?text=Tristan+and+Isolde"
    },
    {
        title: "The Romance of the Rose",
        author: "Guillaume de Lorris and Jean de Meun",
        synopsis: "An allegorical French poem that explores themes of love and courtship, symbolized through the quest of a lover to win a rose from his beloved.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Romance+of+the+Rose"
    },
    {
        title: "The Cherry Orchard",
        author: "Anton Chekhov",
        synopsis: "A play about a family who must sell their estate, including the cherished cherry orchard, due to financial difficulties, exploring themes of change, memory, and the passing of time.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Cherry+Orchard"
    },
    {
        title: "Three Sisters",
        author: "Anton Chekhov",
        synopsis: "A play about the lives and dreams of three sisters who long to return to Moscow, but are trapped in a provincial town, dealing with themes of unfulfilled potential, yearning, and family dynamics.",
        cover: "https://via.placeholder.com/300x450.png?text=Three+Sisters"
    },
    {
        title: "Uncle Vanya",
        author: "Anton Chekhov",
        synopsis: "A drama about a man and his family who confront their unfulfilled lives, their passions, and regrets, exploring the themes of disillusionment and the passage of time.",
        cover: "https://via.placeholder.com/300x450.png?text=Uncle+Vanya"
    },
    {
        title: "The Seagull",
        author: "Anton Chekhov",
        synopsis: "A play about unrequited love, artistic aspiration, and personal tragedy among a group of characters in the countryside, exploring the emotional turmoil of life and artistic ambition.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Seagull"
    },
    {
        title: "The Lady with the Dog",
        author: "Anton Chekhov",
        synopsis: "A short story about an adulterous love affair between a man and a woman who meet while on vacation, exploring themes of love, isolation, and human emotion.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Lady+with+the+Dog"
    },
    {
        title: "The Bet",
        author: "Anton Chekhov",
        synopsis: "A short story about a lawyer and a banker who make a bet over whether a person can endure fifteen years of solitary confinement, leading to a reflection on the value of life and human experience.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Bet"
    },
    {
        title: "A Dreary Story",
        author: "Anton Chekhov",
        synopsis: "A short story about an aging professor who reflects on his life and his relationships with his family, focusing on themes of aging, solitude, and the disconnect between personal ambitions and reality.",
        cover: "https://via.placeholder.com/300x450.png?text=A+Dreary+Story"
    },
    {
        title: "The Princess",
        author: "Anton Chekhov",
        synopsis: "A short story about a princess who, after marrying for money, realizes too late the emotional toll her choices have taken on her life, highlighting themes of regret and lost love.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Princess"
    },
    {
        title: "Ward No. 6",
        author: "Anton Chekhov",
        synopsis: "A story about a doctor in a mental asylum who becomes increasingly disillusioned with his own life and the suffering around him, exploring themes of madness, isolation, and existential despair.",
        cover: "https://via.placeholder.com/300x450.png?text=Ward+No.+6"
    },
    {
        title: "The Complaints Book",
        author: "Anton Chekhov",
        synopsis: "A short story that revolves around the absurdity and futility of bureaucracy, where a group of individuals get involved in a series of trivial complaints and formalities.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Complaints+Book"
    },
    {
        title: "Les Misérables",
        author: "Victor Hugo",
        synopsis: "A sweeping tale of justice, love, and redemption, 'Les Misérables' follows the lives of several characters, primarily Jean Valjean, as they struggle through the turmoil of post-revolutionary France.",
        cover: "https://via.placeholder.com/300x450.png?text=Les+Misérables"
    },
    {
        title: "The Hunchback of Notre-Dame",
        author: "Victor Hugo",
        synopsis: "Set in medieval Paris, the story centers around Quasimodo, a bell-ringer of Notre-Dame Cathedral, and his tragic love for the beautiful gypsy, Esmeralda.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Hunchback+of+Notre-Dame"
    },
    {
        title: "Les Travailleurs de la Mer",
        author: "Victor Hugo",
        synopsis: "This novel follows the trials of a man named Gilliatt, who is determined to salvage a wrecked ship from a treacherous sea, exploring themes of heroism and struggle against nature.",
        cover: "https://via.placeholder.com/300x450.png?text=Les+Travailleurs+de+la+Mer"
    },
    {
        title: "The Toilers of the Sea",
        author: "Victor Hugo",
        synopsis: "A story set on the shores of the Channel Islands about a fisherman who battles both natural forces and personal despair to salvage a shipwreck.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Toilers+of+the+Sea"
    },
    {
        title: "Ninety-Three",
        author: "Victor Hugo",
        synopsis: "Set during the French Revolution, the novel explores the volatile period of the Revolution, focusing on three distinct characters whose lives are irrevocably changed.",
        cover: "https://via.placeholder.com/300x450.png?text=Ninety-Three"
    },
    {
        title: "The Three Musketeers",
        author: "Alexandre Dumas",
        synopsis: "A classic historical adventure novel, following the young d'Artagnan and his three companions, Athos, Porthos, and Aramis, as they fight for justice and the honor of France.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Three+Musketeers"
    },
    {
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        synopsis: "A gripping tale of betrayal and revenge, following Edmond Dantès who, wrongfully imprisoned, escapes and seeks to bring down those who betrayed him.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Count+of+Monte+Cristo"
    },
    {
        title: "Twenty Years After",
        author: "Alexandre Dumas",
        synopsis: "A sequel to 'The Three Musketeers,' this novel continues the story of d'Artagnan and his friends as they navigate the political turmoil and conflicts in 17th-century France.",
        cover: "https://via.placeholder.com/300x450.png?text=Twenty+Years+After"
    },
    {
        title: "The Vicomte de Bragelonne",
        author: "Alexandre Dumas",
        synopsis: "The final book in the d'Artagnan series, exploring the aftermath of the musketeers' adventures and focusing on the mysterious character of Raoul, the Vicomte de Bragelonne.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Vicomte+de+Bragelonne"
    },
    {
        title: "The Man in the Iron Mask",
        author: "Alexandre Dumas",
        synopsis: "A thrilling tale about the mysterious prisoner known as the 'Man in the Iron Mask,' which is part of the d'Artagnan saga and explores themes of identity, monarchy, and justice.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Man+in+the+Iron+Mask"
    },
    {
        title: "The Black Tulip",
        author: "Alexandre Dumas",
        synopsis: "A historical novel about the Dutch tulip mania in the 17th century, focused on the rivalry between two men who compete to grow the perfect black tulip.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Black+Tulip"
    },
    {
        title: "The Queen's Necklace",
        author: "Alexandre Dumas",
        synopsis: "A historical novel revolving around the scandal involving Marie Antoinette's diamond necklace, with intrigue and conspiracies at the heart of the French Revolution.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Queen's+Necklace"
    },
    {
        title: "The Tell-Tale Heart",
        author: "Edgar Allan Poe",
        synopsis: "A short story about a man who insists on his sanity while describing the murder he committed, driven by his obsession with the victim's eye and the haunting heartbeat that follows.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Tell-Tale+Heart"
    },
    {
        title: "The Fall of the House of Usher",
        author: "Edgar Allan Poe",
        synopsis: "This eerie tale tells of a man who visits the crumbling mansion of his childhood friend, Roderick Usher, only to discover unsettling secrets about the family's doomed legacy.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Fall+of+the+House+of+Usher"
    },
    {
        title: "The Raven",
        author: "Edgar Allan Poe",
        synopsis: "A melancholic poem in which a man is visited by a mysterious raven that speaks the word 'Nevermore,' representing the narrator's grief and loss of his lover, Lenore.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Raven"
    },
    {
        title: "The Black Cat",
        author: "Edgar Allan Poe",
        synopsis: "A man describes his descent into madness, which leads him to murder his wife, while the presence of a black cat seems to bring a series of tragic events into motion.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Black+Cat"
    },
    {
        title: "The Cask of Amontillado",
        author: "Edgar Allan Poe",
        synopsis: "A chilling tale of revenge in which the narrator lures his friend into a hidden vault, trapping him in a wall to die, all while pretending to be his ally.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Cask+of+Amontillado"
    },
    {
        title: "The Pit and the Pendulum",
        author: "Edgar Allan Poe",
        synopsis: "A prisoner in the Spanish Inquisition faces a horrific series of tortures, including a razor-sharp pendulum that threatens to kill him, all while he struggles to survive.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Pit+and+the+Pendulum"
    },
    {
        title: "The Masque of the Red Death",
        author: "Edgar Allan Poe",
        synopsis: "A short story that explores the themes of death and inevitability, as a group of nobles try to escape the plague, only to find that no one can evade death.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Masque+of+the+Red+Death"
    },
    {
        title: "The Murders in the Rue Morgue",
        author: "Edgar Allan Poe",
        synopsis: "Often considered the first modern detective story, this tale follows C. Auguste Dupin as he solves the brutal murder of two women in Paris, uncovering an unexpected twist.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Murders+in+the+Rue+Morgue"
    },
    {
        title: "The Gold-Bug",
        author: "Edgar Allan Poe",
        synopsis: "A treasure hunt adventure where the protagonist decodes a secret message and embarks on a quest to uncover a hidden fortune, leading to suspenseful and unexpected outcomes.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Gold-Bug"
    },
    {
        title: "The Tell-Tale Heart",
        author: "Edgar Allan Poe",
        synopsis: "A short story that explores the mind of a murderer who believes he can hear the beating heart of his victim, leading him to madness and eventually to his confession.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Tell-Tale+Heart"
    },
    {
        title: "The Republic",
        author: "Plato",
        synopsis: "A philosophical dialogue that explores the nature of justice, the ideal state, the philosopher-king, and the theory of forms. It is one of Plato's most influential works on political philosophy.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Republic"
    },
    {
        title: "Symposium",
        author: "Plato",
        synopsis: "A philosophical text in which various characters engage in a series of speeches about the nature of love, culminating in a speech by Socrates on the idea of 'divine love.'",
        cover: "https://via.placeholder.com/300x450.png?text=Symposium"
    },
    {
        title: "Phaedo",
        author: "Plato",
        synopsis: "This dialogue recounts the final hours of Socrates' life and his thoughts on the immortality of the soul, offering insights into his philosophy on death and the afterlife.",
        cover: "https://via.placeholder.com/300x450.png?text=Phaedo"
    },
    {
        title: "The Apology",
        author: "Plato",
        synopsis: "In this work, Plato portrays Socrates' defense during his trial, where he is accused of corrupting the youth and impiety. Socrates argues for his philosophical stance and commitment to truth.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Apology"
    },
    {
        title: "Meno",
        author: "Plato",
        synopsis: "A dialogue that explores the nature of virtue and whether it can be taught, with Socrates engaging in a discussion with Meno about the nature of knowledge and learning.",
        cover: "https://via.placeholder.com/300x450.png?text=Meno"
    },
    {
        title: "Timaeus",
        author: "Plato",
        synopsis: "In this dialogue, Plato presents his views on the nature of the universe, cosmology, and the creation of the world, as discussed by the character Timaeus.",
        cover: "https://via.placeholder.com/300x450.png?text=Timaeus"
    },
    {
        title: "Phaedrus",
        author: "Plato",
        synopsis: "A dialogue exploring the nature of love and rhetoric, where Socrates discusses the concept of the soul and the nature of true love with Phaedrus.",
        cover: "https://via.placeholder.com/300x450.png?text=Phaedrus"
    },
    {
        title: "Crito",
        author: "Plato",
        synopsis: "This dialogue takes place in Socrates' prison cell, where his friend Crito attempts to persuade him to escape before his execution. Socrates argues for justice and the rule of law.",
        cover: "https://via.placeholder.com/300x450.png?text=Crito"
    },
    {
        title: "The Laws",
        author: "Plato",
        synopsis: "Plato's final dialogue that presents his views on law, justice, and governance, offering a detailed discussion on the ideal city-state and its laws.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Laws"
    },
    {
        title: "Euthyphro",
        author: "Plato",
        synopsis: "In this dialogue, Socrates meets Euthyphro, a man who is prosecuting his father for murder, and they discuss the nature of piety and the relationship between gods and morality.",
        cover: "https://via.placeholder.com/300x450.png?text=Euthyphro"
    },
    {
        title: "The Apology",
        author: "Socrates (as recorded by Plato)",
        synopsis: "Socrates' defense at his trial, where he is accused of corrupting the youth of Athens. He argues for his philosophy and the pursuit of wisdom, even at the cost of his own life.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Apology"
    },
    {
        title: "Crito",
        author: "Socrates (as recorded by Plato)",
        synopsis: "A dialogue in which Socrates argues with his friend Crito about whether it is just to escape from prison, asserting that one must always respect the law and live in accordance with justice.",
        cover: "https://via.placeholder.com/300x450.png?text=Crito"
    },
    {
        title: "Phaedo",
        author: "Socrates (as recorded by Plato)",
        synopsis: "Socrates' final conversation before his death, discussing the immortality of the soul and the nature of life after death. He offers a calm and reasoned defense of his belief in the soul's eternal nature.",
        cover: "https://via.placeholder.com/300x450.png?text=Phaedo"
    },
    {
        title: "Meno",
        author: "Socrates (as recorded by Plato)",
        synopsis: "Socrates engages in a dialogue with Meno, exploring the nature of virtue, knowledge, and whether virtue can be taught. This is one of the early works in which Socrates' method of questioning is on full display.",
        cover: "https://via.placeholder.com/300x450.png?text=Meno"
    },
    {
        title: "Thus Spoke Zarathustra",
        author: "Friedrich Nietzsche",
        synopsis: "A philosophical novel that follows the character Zarathustra as he descends from a mountain to share his wisdom, including the concept of the 'Übermensch' (superman), the death of God, and the eternal recurrence.",
        cover: "https://via.placeholder.com/300x450.png?text=Thus+Spoke+Zarathustra"
    },
    {
        title: "Beyond Good and Evil",
        author: "Friedrich Nietzsche",
        synopsis: "A critical work that challenges traditional moral values, questioning the concepts of good and evil and advocating for the reevaluation of morality based on individual will and power.",
        cover: "https://via.placeholder.com/300x450.png?text=Beyond+Good+and+Evil"
    },
    {
        title: "The Birth of Tragedy",
        author: "Friedrich Nietzsche",
        synopsis: "Nietzsche’s first major work, which explores the origins of Greek tragedy and the dichotomy between the Apollonian (order, reason) and Dionysian (chaos, emotion) elements in art and life.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Birth+of+Tragedy"
    },
    {
        title: "On the Genealogy of Morals",
        author: "Friedrich Nietzsche",
        synopsis: "A book that delves into the origins of our moral concepts, tracing the evolution of guilt, bad conscience, and the internalization of human instincts, which Nietzsche argues lead to the repression of natural desires.",
        cover: "https://via.placeholder.com/300x450.png?text=On+the+Genealogy+of+Morals"
    },
    {
        title: "The Gay Science",
        author: "Friedrich Nietzsche",
        synopsis: "A work that reflects Nietzsche's critique of traditional philosophy and explores ideas of self-overcoming, the will to power, and the idea of the 'eternal recurrence.' It is also where Nietzsche first declares the 'death of God.'",
        cover: "https://via.placeholder.com/300x450.png?text=The+Gay+Science"
    },
    {
        title: "Ecce Homo",
        author: "Friedrich Nietzsche",
        synopsis: "Nietzsche’s autobiographical work in which he reflects on his life and works, and critiques both his own philosophy and the cultural environment that shaped him. He famously says 'I am not a man, I am dynamite.'",
        cover: "https://via.placeholder.com/300x450.png?text=Ecce+Homo"
    },
    {
        title: "Twilight of the Idols",
        author: "Friedrich Nietzsche",
        synopsis: "In this work, Nietzsche critiques Western culture and its philosophical idols, including the concepts of morality, religion, and metaphysics, while calling for the destruction of these traditional values.",
        cover: "https://via.placeholder.com/300x450.png?text=Twilight+of+the+Idols"
    },
    {
        title: "The Antichrist",
        author: "Friedrich Nietzsche",
        synopsis: "A work that attacks Christianity and its values, asserting that Christianity is a religion that undermines life and individual strength. Nietzsche calls for the embrace of a new set of values that affirm life and power.",
        cover: "https://via.placeholder.com/300x450.png?text=The+Antichrist"
    },
    {
        title: "Human, All Too Human",
        author: "Friedrich Nietzsche",
        synopsis: "A collection of aphorisms in which Nietzsche addresses various subjects including philosophy, culture, and psychology. It marks a shift in Nietzsche's writing from a more artistic style to a more scientific and critical approach.",
        cover: "https://via.placeholder.com/300x450.png?text=Human,+All+Too+Human"
    },
    {
        title: "Thus Spoke Zarathustra: A Book for All and None",
        author: "Friedrich Nietzsche",
        synopsis: "A more philosophical expansion of Nietzsche's ideas in *Thus Spoke Zarathustra*, this work continues to explore the themes of the Übermensch, the death of God, and eternal recurrence. It is one of his most poetic and powerful works.",
        cover: "https://via.placeholder.com/300x450.png?text=Thus+Spoke+Zarathustra"
    }
    // Add more plays as needed
];

function generateBook() {
    const randomIndex = Math.floor(Math.random() * books.length);
    const selectedBook = books[randomIndex];

    // Create the HTML for the book card
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-card');
    bookElement.innerHTML = `
        <img src="${selectedBook.cover}" alt="${selectedBook.title}" class="book-cover">
        <div class="book-title">${selectedBook.title}</div>
        <div class="book-author">By: ${selectedBook.author}</div>
        <div class="book-synopsis">${selectedBook.synopsis}</div>
    `;

    // Add the book to the book container
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = ''; // Clear any existing content
    bookContainer.appendChild(bookElement);

    // Show the book container
    bookContainer.style.display = 'block';
    bookTitle.textContent = '';
    bookAuthor.textContent = '';
    bookSynopsis.textContent = '';
    
    bookTitle.classList.add('typing-effect');
    bookAuthor.classList.add('typing-effect');
    bookSynopsis.classList.add('typing-effect');

    // Set the text content for each section after a small delay to simulate typing
    setTimeout(() => {
        bookTitle.textContent = randomBook.title;
    }, 1000);  // Delays the title appearance
    
    setTimeout(() => {
        bookAuthor.textContent = `Author: ${randomBook.author}`;
    }, 2000);  // Delays the author appearance
    
    setTimeout(() => {
        bookSynopsis.textContent = `Synopsis: ${randomBook.synopsis}`;
    }, 3000);  // Delays the synopsis appearance
}

// Event listener for the button click
document.getElementById('generate-btn').addEventListener('click', generateBook);
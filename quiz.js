// ============================================================
// CLASS 8 DAILY QUIZ
// PART 1 OF 3
// Subjects: English, Science, Maths, Social Studies, Nepali, Computer and Health
// Total in this part: 700 questions
// ============================================================

const DAILY_TARGET = 10;

const questionBanks = {

  // ==========================================================
  // ENGLISH — 100 QUESTIONS
  // ==========================================================
  english: [

    { q: "What is the plural form of 'child'?", options: ["Childs", "Children", "Childes", "Childrens"], answer: 1 },
    { q: "What is the past tense of 'go'?", options: ["Goed", "Gone", "Went", "Going"], answer: 2 },
    { q: "Which word is a noun?", options: ["Beautiful", "Quickly", "Teacher", "Run"], answer: 2 },
    { q: "Which word is an adjective?", options: ["Beauty", "Beautiful", "Beautify", "Beautifully"], answer: 1 },
    { q: "Which word is an adverb?", options: ["Slow", "Slowness", "Slowly", "Slower"], answer: 2 },
    { q: "Choose the correct article: ___ apple.", options: ["A", "An", "The", "No article"], answer: 1 },
    { q: "Choose the correct article: ___ university.", options: ["A", "An", "The", "No article"], answer: 0 },
    { q: "What is the opposite of 'ancient'?", options: ["Old", "Modern", "Early", "Past"], answer: 1 },
    { q: "What is the synonym of 'happy'?", options: ["Sad", "Angry", "Glad", "Weak"], answer: 2 },
    { q: "Which pronoun can replace 'Rita'?", options: ["He", "She", "They", "We"], answer: 1 },

    { q: "Which tense is used in 'I am reading'?", options: ["Simple present", "Present continuous", "Simple past", "Future"], answer: 1 },
    { q: "Choose the correct preposition: The book is ___ the table.", options: ["In", "On", "At", "By"], answer: 1 },
    { q: "What is the comparative form of 'good'?", options: ["Gooder", "Best", "Better", "More good"], answer: 2 },
    { q: "What is the superlative form of 'bad'?", options: ["Badder", "Worst", "Worse", "Most bad"], answer: 1 },
    { q: "Which is a conjunction?", options: ["And", "Quickly", "Beautiful", "House"], answer: 0 },
    { q: "Which spelling is correct?", options: ["Recieve", "Receive", "Receeve", "Receve"], answer: 1 },
    { q: "What is the past participle of 'write'?", options: ["Wrote", "Writing", "Written", "Writes"], answer: 2 },
    { q: "Which sentence is in passive voice?", options: ["Ram kicked the ball.", "The ball was kicked by Ram.", "Ram is kicking the ball.", "Ram will kick the ball."], answer: 1 },
    { q: "Choose the correct reported speech: He said, 'I am tired.'", options: ["He said that I am tired.", "He said that he was tired.", "He says he was tired.", "He said that he is tired."], answer: 1 },
    { q: "Which is a question tag for 'You are ready'?", options: ["aren't you?", "are you?", "isn't you?", "don't you?"], answer: 0 },

    { q: "Which modal expresses ability?", options: ["Can", "Must", "Should", "May"], answer: 0 },
    { q: "Which sentence is imperative?", options: ["Open the door.", "The door is open.", "Is the door open?", "What a door!"], answer: 0 },
    { q: "Which sentence is exclamatory?", options: ["Where are you?", "Close the book.", "What a beautiful day!", "I am happy."], answer: 2 },
    { q: "Which sentence is interrogative?", options: ["He is tall.", "Is he tall?", "Be tall.", "What a tall boy!"], answer: 1 },
    { q: "Which is a possessive pronoun?", options: ["Mine", "Me", "I", "Myself"], answer: 0 },
    { q: "Choose the correct conditional: If it rains, we ___ at home.", options: ["stay", "stayed", "will stay", "staying"], answer: 2 },
    { q: "What is the plural of 'mouse'?", options: ["Mouses", "Mice", "Mousees", "Meese"], answer: 1 },
    { q: "What is the feminine form of 'king'?", options: ["Kingess", "Queen", "Ladyking", "Princess"], answer: 1 },
    { q: "Which is a proper noun?", options: ["city", "country", "Nepal", "river"], answer: 2 },
    { q: "Which is a common noun?", options: ["Kathmandu", "Monday", "teacher", "Ram"], answer: 2 },

    { q: "Choose the correct verb: She ___ to school every day.", options: ["go", "goes", "going", "gone"], answer: 1 },
    { q: "Choose the correct verb: They ___ football yesterday.", options: ["play", "plays", "played", "playing"], answer: 2 },
    { q: "Choose the correct verb: I ___ tomorrow.", options: ["come", "came", "will come", "coming"], answer: 2 },
    { q: "Which sentence is grammatically correct?", options: ["He don't like tea.", "He doesn't like tea.", "He doesn't likes tea.", "He not like tea."], answer: 1 },
    { q: "Choose the correct word: There ___ many books.", options: ["is", "are", "was", "be"], answer: 1 },
    { q: "Choose the correct word: Each boy ___ a pen.", options: ["have", "has", "having", "had"], answer: 1 },
    { q: "What is the opposite of 'generous'?", options: ["Kind", "Selfish", "Helpful", "Polite"], answer: 1 },
    { q: "What is the synonym of 'rapid'?", options: ["Slow", "Fast", "Weak", "Late"], answer: 1 },
    { q: "Which word is an abstract noun?", options: ["Honesty", "Table", "School", "Dog"], answer: 0 },
    { q: "Which word is a collective noun?", options: ["Team", "Player", "Run", "Happy"], answer: 0 },

    { q: "Which punctuation mark ends a question?", options: [".", "!", "?", ","], answer: 2 },
    { q: "Which punctuation mark shows strong feeling?", options: [",", ".", "!", ";"], answer: 2 },
    { q: "What is the short form of 'do not'?", options: ["Don't", "Doesn't", "Didn't", "Won't"], answer: 0 },
    { q: "What is the short form of 'I am'?", options: ["I'm", "I've", "I'll", "I's"], answer: 0 },
    { q: "Choose the correct spelling.", options: ["Necessary", "Neccessary", "Necesary", "Nessesary"], answer: 0 },
    { q: "Choose the correct spelling.", options: ["Separate", "Seperate", "Seprate", "Separete"], answer: 0 },
    { q: "Which word means 'a place where books are kept'?", options: ["Laboratory", "Library", "Bakery", "Factory"], answer: 1 },
    { q: "Which is an interrogative pronoun?", options: ["Who", "Beautiful", "Quickly", "And"], answer: 0 },
    { q: "Which is a reflexive pronoun?", options: ["Myself", "My", "Me", "Mine"], answer: 0 },
    { q: "Which is a demonstrative pronoun?", options: ["This", "Who", "Someone", "Myself"], answer: 0 },

    { q: "Which is a preposition?", options: ["Under", "Happy", "Jump", "Slowly"], answer: 0 },
    { q: "Which is an interjection?", options: ["Wow!", "Because", "Table", "Run"], answer: 0 },
    { q: "What is the comparative form of 'tall'?", options: ["Tallest", "Taller", "More tall", "Tall"], answer: 1 },
    { q: "What is the superlative form of 'beautiful'?", options: ["Beautifuller", "Most beautiful", "More beautiful", "Beautifulest"], answer: 1 },
    { q: "Choose the correct conjunction: I stayed home ___ it was raining.", options: ["because", "but", "or", "and"], answer: 0 },
    { q: "Choose the correct preposition: He arrived ___ Monday.", options: ["in", "on", "at", "by"], answer: 1 },
    { q: "Choose the correct preposition: We sleep ___ night.", options: ["in", "on", "at", "by"], answer: 2 },
    { q: "Which sentence is present perfect?", options: ["I eat rice.", "I ate rice.", "I have eaten rice.", "I will eat rice."], answer: 2 },
    { q: "Which sentence is past continuous?", options: ["I was reading.", "I read.", "I have read.", "I will read."], answer: 0 },
    { q: "Which sentence is future continuous?", options: ["I read.", "I was reading.", "I will be reading.", "I have read."], answer: 2 },

    { q: "Which sentence is present perfect continuous?", options: ["I have been studying.", "I studied.", "I am studying.", "I will study."], answer: 0 },
    { q: "What is the past tense of 'teach'?", options: ["Teached", "Taught", "Teaching", "Teach"], answer: 1 },
    { q: "What is the past tense of 'buy'?", options: ["Buyed", "Bought", "Buying", "Buys"], answer: 1 },
    { q: "What is the past participle of 'eat'?", options: ["Ate", "Eaten", "Eating", "Eats"], answer: 1 },
    { q: "What is the past tense of 'see'?", options: ["Seen", "Saw", "Seeing", "Sees"], answer: 1 },
    { q: "Which word is a verb?", options: ["Jump", "Happy", "Slowly", "Beauty"], answer: 0 },
    { q: "Which word is an adverb of manner?", options: ["Quickly", "Tomorrow", "Here", "Very"], answer: 0 },
    { q: "Which word is an adverb of time?", options: ["Yesterday", "Quickly", "Very", "There"], answer: 0 },
    { q: "Which word is an adverb of place?", options: ["There", "Quickly", "Always", "Very"], answer: 0 },
    { q: "Which sentence is negative?", options: ["She sings.", "She does not sing.", "Does she sing?", "Sing loudly."], answer: 1 },

    { q: "Which sentence is interrogative?", options: ["They are coming.", "Are they coming?", "They are not coming.", "Come here."], answer: 1 },
    { q: "Which sentence is assertive?", options: ["The sun rises in the east.", "Does the sun rise?", "What a bright sun!", "Rise early!"], answer: 0 },
    { q: "Which sentence is optative?", options: ["May you succeed!", "You succeed.", "Do you succeed?", "Succeed now."], answer: 0 },
    { q: "Which sentence is passive?", options: ["The teacher teaches English.", "English is taught by the teacher.", "The teacher taught English.", "The teacher is teaching English."], answer: 1 },
    { q: "Change to passive: 'Ram writes a letter.'", options: ["A letter is written by Ram.", "A letter was written by Ram.", "A letter wrote Ram.", "Ram is written by a letter."], answer: 0 },
    { q: "Choose the correct indirect speech: Sita said, 'I will come.'", options: ["Sita said that she would come.", "Sita said that I will come.", "Sita says she would come.", "Sita said she will came."], answer: 0 },
    { q: "What is the antonym of 'victory'?", options: ["Success", "Defeat", "Win", "Prize"], answer: 1 },
    { q: "What is the synonym of 'begin'?", options: ["End", "Start", "Stop", "Finish"], answer: 1 },
    { q: "What is the synonym of 'large'?", options: ["Tiny", "Huge", "Weak", "Short"], answer: 1 },
    { q: "What is the antonym of 'expand'?", options: ["Increase", "Contract", "Grow", "Extend"], answer: 1 },

    { q: "Which is a compound word?", options: ["Toothpaste", "Happy", "Quickly", "Beautiful"], answer: 0 },
    { q: "What is the plural of 'leaf'?", options: ["Leafs", "Leaves", "Leafes", "Leavs"], answer: 1 },
    { q: "What is the plural of 'tooth'?", options: ["Tooths", "Teeth", "Toothes", "Teeths"], answer: 1 },
    { q: "What is the plural of 'woman'?", options: ["Womans", "Women", "Womanes", "Womens"], answer: 1 },
    { q: "What is the masculine form of 'actress'?", options: ["Actor", "Acter", "Manactress", "Heroine"], answer: 0 },
    { q: "What is the feminine form of 'nephew'?", options: ["Niece", "Nephewa", "Sister", "Aunt"], answer: 0 },
    { q: "Choose the correct article: He is ___ honest man.", options: ["a", "an", "the", "no article"], answer: 1 },
    { q: "Choose the correct article: I saw ___ sun.", options: ["a", "an", "the", "no article"], answer: 2 },
    { q: "Which sentence uses 'too' correctly?", options: ["It is too hot to drink.", "It is two hot to drink.", "It is to hot to drink.", "It is hot too drink."], answer: 0 },
    { q: "Which sentence uses 'their' correctly?", options: ["Their house is big.", "There house is big.", "They're house is big.", "Thair house is big."], answer: 0 },

    { q: "Which is a countable noun?", options: ["Water", "Milk", "Book", "Rice"], answer: 2 },
    { q: "Which is an uncountable noun?", options: ["Chair", "Apple", "Water", "Pen"], answer: 2 },
    { q: "Choose the correct form: She is ___ than me.", options: ["tall", "taller", "tallest", "more tall"], answer: 1 },
    { q: "Choose the correct form: Mount Everest is the ___ mountain.", options: ["high", "higher", "highest", "more high"], answer: 2 },
    { q: "What is a sentence?", options: ["A group of words expressing a complete thought", "A single letter", "A punctuation mark", "A sound only"], answer: 0 },
    { q: "What is a paragraph?", options: ["A group of related sentences", "A single word", "A punctuation mark", "A letter"], answer: 0 },
    { q: "Which is the subject in 'Ram plays football'?", options: ["Ram", "plays", "football", "the"], answer: 0 },
    { q: "Which is the object in 'Ram plays football'?", options: ["Ram", "plays", "football", "none"], answer: 2 },
    { q: "What is the plural of 'foot'?", options: ["Foots", "Feet", "Feets", "Footes"], answer: 1 },
    { q: "Which word is a modal verb?", options: ["Should", "Running", "Beautiful", "Quickly"], answer: 0 }
  ],


  // ==========================================================
  // SCIENCE — 100 QUESTIONS
  // ==========================================================
  science: [

    { q: "What is the basic structural unit of life?", options: ["Tissue", "Cell", "Organ", "Atom"], answer: 1 },
    { q: "Which organelle controls most cell activities?", options: ["Nucleus", "Ribosome", "Vacuole", "Cell wall"], answer: 0 },
    { q: "Which organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Mitochondrion", "Chloroplast", "Vacuole"], answer: 1 },
    { q: "Where does photosynthesis mainly occur?", options: ["Roots", "Chloroplasts", "Nucleus", "Flowers"], answer: 1 },
    { q: "Which gas is used by plants in photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: 2 },
    { q: "Which gas is released during photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: 1 },
    { q: "What green pigment helps plants absorb light?", options: ["Melanin", "Chlorophyll", "Haemoglobin", "Keratin"], answer: 1 },
    { q: "Which part of a plant absorbs most water?", options: ["Flower", "Root", "Fruit", "Seed"], answer: 1 },
    { q: "Which tissue carries water upward in plants?", options: ["Phloem", "Xylem", "Epidermis", "Cortex"], answer: 1 },
    { q: "Which tissue transports prepared food?", options: ["Xylem", "Phloem", "Cambium", "Root hair"], answer: 1 },

    { q: "What is the main function of red blood cells?", options: ["Fight germs", "Carry oxygen", "Clot blood", "Digest food"], answer: 1 },
    { q: "Which blood cells help fight infection?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], answer: 1 },
    { q: "What helps blood clot?", options: ["Platelets", "Red cells", "Plasma only", "Nerves"], answer: 0 },
    { q: "Which organ pumps blood?", options: ["Lungs", "Heart", "Kidney", "Stomach"], answer: 1 },
    { q: "Which organs exchange gases in humans?", options: ["Kidneys", "Lungs", "Liver", "Intestines"], answer: 1 },
    { q: "What is the main function of the small intestine?", options: ["Pump blood", "Digest and absorb nutrients", "Store urine", "Exchange gases"], answer: 1 },
    { q: "Which organ produces bile?", options: ["Liver", "Heart", "Lung", "Kidney"], answer: 0 },
    { q: "Which organs filter wastes from blood?", options: ["Lungs", "Kidneys", "Stomach", "Brain"], answer: 1 },
    { q: "What is digestion?", options: ["Breaking food into simpler substances", "Making blood", "Breathing", "Pumping blood"], answer: 0 },
    { q: "What is respiration?", options: ["Release of energy from food", "Movement of food", "Blood clotting", "Growth of bones"], answer: 0 },

    { q: "What is matter?", options: ["Anything that has mass and occupies space", "Only solids", "Only liquids", "Only gases"], answer: 0 },
    { q: "Which state has a fixed shape and fixed volume?", options: ["Solid", "Liquid", "Gas", "Plasma"], answer: 0 },
    { q: "Which state has fixed volume but no fixed shape?", options: ["Solid", "Liquid", "Gas", "Vacuum"], answer: 1 },
    { q: "Which state has neither fixed shape nor fixed volume?", options: ["Solid", "Liquid", "Gas", "Crystal"], answer: 2 },
    { q: "What is melting?", options: ["Solid to liquid", "Liquid to solid", "Gas to liquid", "Liquid to gas"], answer: 0 },
    { q: "What is freezing?", options: ["Liquid to solid", "Solid to gas", "Gas to liquid", "Solid to liquid"], answer: 0 },
    { q: "What is evaporation?", options: ["Liquid to gas", "Gas to liquid", "Solid to liquid", "Liquid to solid"], answer: 0 },
    { q: "What is condensation?", options: ["Gas to liquid", "Liquid to gas", "Solid to gas", "Solid to liquid"], answer: 0 },
    { q: "What is sublimation?", options: ["Solid directly to gas", "Gas to liquid", "Liquid to solid", "Liquid to gas only"], answer: 0 },
    { q: "What is force?", options: ["A push or pull", "A type of matter", "A unit of time", "A form of heat"], answer: 0 },

    { q: "What is the SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 1 },
    { q: "What is friction?", options: ["A force opposing motion", "A force causing light", "A type of energy", "A unit"], answer: 0 },
    { q: "Which simple machine is a seesaw?", options: ["Lever", "Pulley", "Screw", "Wheel"], answer: 0 },
    { q: "Which simple machine is used to raise a flag?", options: ["Pulley", "Lever", "Wedge", "Screw"], answer: 0 },
    { q: "What is work in physics?", options: ["Force causing displacement", "Only movement", "Only force", "Only energy"], answer: 0 },
    { q: "What is the SI unit of work?", options: ["Watt", "Joule", "Newton", "Volt"], answer: 1 },
    { q: "What is energy?", options: ["Ability to do work", "A type of force only", "A unit of mass", "A substance"], answer: 0 },
    { q: "Energy stored due to position is called:", options: ["Kinetic energy", "Potential energy", "Sound energy", "Light energy"], answer: 1 },
    { q: "Energy of motion is called:", options: ["Potential energy", "Kinetic energy", "Chemical energy", "Nuclear energy"], answer: 1 },
    { q: "What is heat?", options: ["Energy transferred because of temperature difference", "A force", "A mass", "A sound"], answer: 0 },

    { q: "What instrument measures temperature?", options: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"], answer: 1 },
    { q: "What is light?", options: ["A form of energy that enables vision", "A type of matter", "A force", "A liquid"], answer: 0 },
    { q: "Light travels fastest in:", options: ["Air", "Water", "Vacuum", "Glass"], answer: 2 },
    { q: "What is reflection?", options: ["Bouncing back of light", "Bending of light", "Absorption of sound", "Production of heat"], answer: 0 },
    { q: "What is refraction?", options: ["Bending of light when it changes medium", "Bouncing of light", "Stopping of light", "Reflection only"], answer: 0 },
    { q: "Which mirror gives a wider field of view?", options: ["Plane", "Convex", "Concave", "None"], answer: 1 },
    { q: "Which mirror is used by dentists to get a magnified image?", options: ["Convex", "Concave", "Plane", "None"], answer: 1 },
    { q: "A convex lens is generally:", options: ["Thicker at the center", "Thinner at the center", "Flat only", "Opaque"], answer: 0 },
    { q: "What is sound produced by?", options: ["Vibrations", "Light", "Magnetism", "Gravity"], answer: 0 },
    { q: "Sound cannot travel through:", options: ["Air", "Water", "Steel", "Vacuum"], answer: 3 },

    { q: "Which unit is commonly used for frequency?", options: ["Hertz", "Joule", "Newton", "Watt"], answer: 0 },
    { q: "What determines the pitch of a sound?", options: ["Frequency", "Amplitude only", "Speed only", "Mass"], answer: 0 },
    { q: "What determines loudness mainly?", options: ["Amplitude", "Frequency only", "Wavelength only", "Temperature"], answer: 0 },
    { q: "What is electric current?", options: ["Flow of electric charge", "Flow of water", "Flow of heat only", "Movement of magnets"], answer: 0 },
    { q: "What is the SI unit of current?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: 1 },
    { q: "Which instrument measures electric current?", options: ["Voltmeter", "Ammeter", "Barometer", "Thermometer"], answer: 1 },
    { q: "Which instrument measures voltage?", options: ["Ammeter", "Voltmeter", "Galvanometer only", "Thermometer"], answer: 1 },
    { q: "Which material is a good conductor?", options: ["Copper", "Rubber", "Plastic", "Dry wood"], answer: 0 },
    { q: "Which material is an insulator?", options: ["Copper", "Aluminium", "Rubber", "Iron"], answer: 2 },
    { q: "What is a circuit?", options: ["A complete path for electric current", "A type of battery", "A magnet only", "A wire only"], answer: 0 },

    { q: "What provides electrical energy in a simple circuit?", options: ["Cell", "Switch only", "Bulb only", "Wire only"], answer: 0 },
    { q: "What does a switch do?", options: ["Opens or closes a circuit", "Creates matter", "Measures current", "Stores sound"], answer: 0 },
    { q: "What is magnetism?", options: ["A force associated with magnets", "A type of heat", "A form of sound", "A chemical"], answer: 0 },
    { q: "Which material is strongly attracted to a magnet?", options: ["Iron", "Wood", "Glass", "Paper"], answer: 0 },
    { q: "Like magnetic poles:", options: ["Attract", "Repel", "Disappear", "Melt"], answer: 1 },
    { q: "Unlike magnetic poles:", options: ["Repel", "Attract", "Have no effect", "Break"], answer: 1 },
    { q: "What is the atmosphere?", options: ["Layer of gases surrounding Earth", "Ocean water", "Rock layer only", "Soil layer"], answer: 0 },
    { q: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: 1 },
    { q: "Which gas is essential for human respiration?", options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Methane"], answer: 1 },
    { q: "Which gas is a major greenhouse gas?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Argon only"], answer: 0 },

    { q: "What is global warming?", options: ["Long-term rise in Earth's average temperature", "Daily weather change", "Cooling of oceans only", "Rainfall"], answer: 0 },
    { q: "What is pollution?", options: ["Harmful contamination of the environment", "Plant growth", "Water cycle", "Natural breathing"], answer: 0 },
    { q: "Which waste is biodegradable?", options: ["Vegetable peel", "Plastic bottle", "Glass", "Aluminium can"], answer: 0 },
    { q: "What is afforestation?", options: ["Planting trees on a large scale", "Cutting trees", "Building roads", "Mining"], answer: 0 },
    { q: "What protects Earth from much harmful ultraviolet radiation?", options: ["Ozone layer", "Clouds only", "Nitrogen", "Soil"], answer: 0 },
    { q: "What is an ecosystem?", options: ["Living organisms interacting with their environment", "Only animals", "Only plants", "Only soil"], answer: 0 },
    { q: "Which is a producer in an ecosystem?", options: ["Green plant", "Lion", "Human", "Fungus"], answer: 0 },
    { q: "Which is a consumer?", options: ["Green plant", "Deer", "Algae only", "Grass"], answer: 1 },
    { q: "Which organism breaks down dead matter?", options: ["Decomposer", "Producer", "Herbivore", "Carnivore"], answer: 0 },
    { q: "What is a food chain?", options: ["A sequence showing feeding relationships", "A chain made of metal", "A water cycle", "A weather map"], answer: 0 },

    { q: "Which nutrient mainly provides body-building material?", options: ["Protein", "Water", "Vitamin C", "Salt"], answer: 0 },
    { q: "Which vitamin is important for normal vision?", options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin B12 only"], answer: 0 },
    { q: "Which mineral is important for strong bones and teeth?", options: ["Calcium", "Iron", "Iodine", "Sodium only"], answer: 0 },
    { q: "Which deficiency disease is associated with lack of vitamin C?", options: ["Scurvy", "Rickets", "Goitre", "Night blindness"], answer: 0 },
    { q: "Which deficiency disease is associated with lack of iodine?", options: ["Goitre", "Scurvy", "Rickets", "Anaemia"], answer: 0 },
    { q: "What is vaccination used for?", options: ["Helping the body develop protection against diseases", "Increasing height instantly", "Replacing food", "Measuring temperature"], answer: 0 },
    { q: "What is a communicable disease?", options: ["A disease that can spread from one person to another", "A genetic trait only", "A broken bone", "A vitamin"], answer: 0 },
    { q: "Which disease is commonly spread by mosquitoes?", options: ["Malaria", "Scurvy", "Diabetes", "Rickets"], answer: 0 },
    { q: "What is first aid?", options: ["Immediate basic help given to an injured person", "A hospital operation", "A medicine brand", "A long-term treatment"], answer: 0 },
    { q: "Why should wounds be kept clean?", options: ["To reduce risk of infection", "To increase bleeding", "To cause pain", "To remove oxygen"], answer: 0 }
  ],


  // ==========================================================
  // MATHS — 100 QUESTIONS
  // ==========================================================
  maths: [

    { q: "What is 25 + 37?", options: ["52", "62", "72", "57"], answer: 1 },
    { q: "What is 84 - 29?", options: ["55", "65", "45", "53"], answer: 0 },
    { q: "What is 12 × 8?", options: ["86", "96", "106", "108"], answer: 1 },
    { q: "What is 144 ÷ 12?", options: ["10", "11", "12", "14"], answer: 2 },
    { q: "What is the HCF of 12 and 18?", options: ["3", "6", "9", "12"], answer: 1 },
    { q: "What is the LCM of 4 and 6?", options: ["8", "10", "12", "24"], answer: 2 },
    { q: "Which number is prime?", options: ["21", "29", "35", "39"], answer: 1 },
    { q: "What is the square of 12?", options: ["124", "144", "154", "164"], answer: 1 },
    { q: "What is the square root of 169?", options: ["11", "12", "13", "14"], answer: 2 },
    { q: "What is 2³?", options: ["6", "8", "9", "12"], answer: 1 },

    { q: "What is 3² + 4²?", options: ["12", "25", "49", "16"], answer: 1 },
    { q: "What is 1/2 + 1/4?", options: ["1/4", "2/4", "3/4", "4/4"], answer: 2 },
    { q: "What is 3/4 - 1/4?", options: ["1/4", "1/2", "2/3", "3/4"], answer: 1 },
    { q: "What is 2/3 × 3/4?", options: ["1/2", "2/4", "3/7", "6/7"], answer: 0 },
    { q: "What is 3/5 ÷ 1/5?", options: ["1", "2", "3", "4"], answer: 2 },
    { q: "Which fraction is equivalent to 1/2?", options: ["2/3", "2/4", "3/5", "4/5"], answer: 1 },
    { q: "Convert 0.75 to a fraction.", options: ["1/2", "2/3", "3/4", "4/5"], answer: 2 },
    { q: "What is 2.5 + 1.75?", options: ["3.25", "4.25", "4.5", "3.75"], answer: 1 },
    { q: "What is 5.6 - 2.4?", options: ["3.2", "3.4", "2.2", "4.2"], answer: 0 },
    { q: "What is 0.6 × 10?", options: ["0.06", "0.6", "6", "60"], answer: 2 },

    { q: "What is 4.8 ÷ 10?", options: ["0.48", "4.8", "48", "0.048"], answer: 0 },
    { q: "What is 20% of 150?", options: ["20", "25", "30", "35"], answer: 2 },
    { q: "What is 15% of 200?", options: ["15", "20", "30", "40"], answer: 2 },
    { q: "Convert 0.25 to percentage.", options: ["2.5%", "25%", "250%", "0.25%"], answer: 1 },
    { q: "Convert 75% to decimal.", options: ["7.5", "0.75", "0.075", "75"], answer: 1 },
    { q: "If a shirt costs Rs. 800 and discount is Rs. 100, sale price is:", options: ["Rs. 600", "Rs. 700", "Rs. 800", "Rs. 900"], answer: 1 },
    { q: "What is the profit if CP = Rs. 500 and SP = Rs. 650?", options: ["Rs. 100", "Rs. 150", "Rs. 200", "Rs. 250"], answer: 1 },
    { q: "What is the loss if CP = Rs. 900 and SP = Rs. 750?", options: ["Rs. 100", "Rs. 150", "Rs. 200", "Rs. 250"], answer: 1 },
    { q: "Simplify: 3x + 2x.", options: ["5", "5x", "6x", "x"], answer: 1 },
    { q: "Simplify: 7a - 3a.", options: ["4", "4a", "10a", "a"], answer: 1 },

    { q: "If x + 5 = 12, x = ?", options: ["5", "6", "7", "8"], answer: 2 },
    { q: "If 3x = 21, x = ?", options: ["6", "7", "8", "9"], answer: 1 },
    { q: "If 2x + 4 = 10, x = ?", options: ["2", "3", "4", "5"], answer: 1 },
    { q: "What is the coefficient of x in 9x?", options: ["9", "x", "0", "1"], answer: 0 },
    { q: "What is the constant in 5x + 7?", options: ["5", "x", "7", "12"], answer: 2 },
    { q: "Expand: 2(x + 3).", options: ["2x + 3", "2x + 6", "x + 6", "2x + 9"], answer: 1 },
    { q: "What is 10²?", options: ["20", "50", "100", "1000"], answer: 2 },
    { q: "What is 5³?", options: ["25", "75", "100", "125"], answer: 3 },
    { q: "What is √81?", options: ["7", "8", "9", "10"], answer: 2 },
    { q: "What is the next number: 2, 4, 6, 8, ...?", options: ["9", "10", "11", "12"], answer: 1 },

    { q: "What is the next number: 5, 10, 15, 20, ...?", options: ["24", "25", "30", "35"], answer: 1 },
    { q: "What is the sum of angles in a triangle?", options: ["90°", "180°", "270°", "360°"], answer: 1 },
    { q: "A right angle measures:", options: ["45°", "90°", "180°", "360°"], answer: 1 },
    { q: "An angle less than 90° is:", options: ["Acute", "Right", "Obtuse", "Straight"], answer: 0 },
    { q: "An angle greater than 90° but less than 180° is:", options: ["Acute", "Right", "Obtuse", "Reflex"], answer: 2 },
    { q: "A straight angle measures:", options: ["90°", "180°", "270°", "360°"], answer: 1 },
    { q: "A full angle measures:", options: ["90°", "180°", "270°", "360°"], answer: 3 },
    { q: "How many sides does a pentagon have?", options: ["4", "5", "6", "7"], answer: 1 },
    { q: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: 1 },
    { q: "How many sides does an octagon have?", options: ["6", "7", "8", "9"], answer: 2 },

    { q: "A quadrilateral has how many sides?", options: ["3", "4", "5", "6"], answer: 1 },
    { q: "Opposite sides of a rectangle are:", options: ["Unequal", "Equal", "Curved", "Always perpendicular only"], answer: 1 },
    { q: "All sides of a square are:", options: ["Equal", "Unequal", "Curved", "Parallel only"], answer: 0 },
    { q: "How many diagonals does a quadrilateral have?", options: ["1", "2", "3", "4"], answer: 1 },
    { q: "Perimeter of a square with side 6 cm is:", options: ["12 cm", "18 cm", "24 cm", "36 cm"], answer: 2 },
    { q: "Area of a square with side 5 cm is:", options: ["10 cm²", "20 cm²", "25 cm²", "30 cm²"], answer: 2 },
    { q: "Perimeter of rectangle 8 cm by 3 cm is:", options: ["11 cm", "22 cm", "24 cm", "30 cm"], answer: 1 },
    { q: "Area of rectangle 8 cm by 3 cm is:", options: ["11 cm²", "22 cm²", "24 cm²", "30 cm²"], answer: 2 },
    { q: "Area of a triangle is:", options: ["base × height", "1/2 × base × height", "2 × base × height", "base + height"], answer: 1 },
    { q: "Area of triangle with base 10 cm and height 6 cm is:", options: ["20 cm²", "30 cm²", "40 cm²", "60 cm²"], answer: 1 },

    { q: "Circumference of a circle is:", options: ["πr²", "2πr", "πd²", "r²"], answer: 1 },
    { q: "Area of a circle is:", options: ["2πr", "πr²", "πd", "r²/2"], answer: 1 },
    { q: "If r = 7 cm, using π = 22/7, circumference is:", options: ["22 cm", "44 cm", "49 cm", "154 cm"], answer: 1 },
    { q: "If r = 7 cm, using π = 22/7, area is:", options: ["44 cm²", "77 cm²", "154 cm²", "308 cm²"], answer: 2 },
    { q: "Volume of a cube with side 3 cm is:", options: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"], answer: 2 },
    { q: "Volume of cuboid 4 cm × 3 cm × 2 cm is:", options: ["12 cm³", "24 cm³", "36 cm³", "48 cm³"], answer: 1 },
    { q: "Mean of 2, 4, 6 is:", options: ["3", "4", "5", "6"], answer: 1 },
    { q: "Median of 3, 5, 7 is:", options: ["3", "5", "7", "15"], answer: 1 },
    { q: "Mode of 2, 3, 3, 4 is:", options: ["2", "3", "4", "12"], answer: 1 },
    { q: "Probability of getting a head when tossing a fair coin is:", options: ["0", "1/4", "1/2", "1"], answer: 2 },

    { q: "Probability of rolling a 6 on a fair die is:", options: ["1/2", "1/3", "1/6", "6/6"], answer: 2 },
    { q: "Simplify ratio 10:20.", options: ["1:2", "2:1", "1:3", "10:2"], answer: 0 },
    { q: "If 3 pens cost Rs. 60, one pen costs:", options: ["Rs. 10", "Rs. 15", "Rs. 20", "Rs. 30"], answer: 2 },
    { q: "If 5 notebooks cost Rs. 250, one costs:", options: ["Rs. 40", "Rs. 50", "Rs. 60", "Rs. 75"], answer: 1 },
    { q: "What is 7 × 9?", options: ["56", "63", "72", "81"], answer: 1 },
    { q: "What is 15 × 6?", options: ["80", "90", "100", "120"], answer: 1 },
    { q: "What is 225 ÷ 15?", options: ["10", "12", "15", "18"], answer: 2 },
    { q: "What is 999 + 1?", options: ["100", "1000", "9990", "1010"], answer: 1 },
    { q: "What is the place value of 7 in 5,742?", options: ["7", "70", "700", "7000"], answer: 1 },
    { q: "Which is the smallest whole number?", options: ["0", "1", "-1", "10"], answer: 0 },

    { q: "What is the additive identity?", options: ["0", "1", "-1", "10"], answer: 0 },
    { q: "What is the multiplicative identity?", options: ["0", "1", "2", "10"], answer: 1 },
    { q: "What is the reciprocal of 3/5?", options: ["3/5", "5/3", "-3/5", "8/5"], answer: 1 },
    { q: "What is 30% of 90?", options: ["18", "27", "30", "36"], answer: 1 },
    { q: "If a = 4, what is 2a + 3?", options: ["7", "9", "11", "12"], answer: 2 },
    { q: "If x = 5, what is x²?", options: ["10", "15", "20", "25"], answer: 3 },
    { q: "What is the perimeter of an equilateral triangle with side 7 cm?", options: ["14 cm", "21 cm", "28 cm", "49 cm"], answer: 1 },
    { q: "What is the sum of angles in a quadrilateral?", options: ["180°", "270°", "360°", "540°"], answer: 2 },
    { q: "What is 1 kilometre in metres?", options: ["10", "100", "1000", "10000"], answer: 2 },
    { q: "What is 1 metre in centimetres?", options: ["10", "100", "1000", "10000"], answer: 1 },

    { q: "What is 1 litre in millilitres?", options: ["10", "100", "1000", "10000"], answer: 2 },
    { q: "What is 1 kilogram in grams?", options: ["10", "100", "1000", "10000"], answer: 2 },
    { q: "If a number is divisible by 2, its last digit is:", options: ["Odd", "Even", "Prime only", "Zero only"], answer: 1 },
    { q: "A number divisible by 5 ends in:", options: ["1 or 2", "3 or 4", "0 or 5", "6 or 8"], answer: 2 },
    { q: "What is the LCM of 3 and 5?", options: ["8", "10", "15", "20"], answer: 2 },
    { q: "What is the HCF of 24 and 36?", options: ["6", "8", "12", "18"], answer: 2 },
    { q: "What is 4/5 as a decimal?", options: ["0.4", "0.5", "0.8", "1.25"], answer: 2 },
    { q: "What is 2/5 as a decimal?", options: ["0.2", "0.4", "0.5", "0.25"], answer: 1 },
    { q: "What is 50% as a fraction?", options: ["1/2", "1/4", "2/5", "3/4"], answer: 0 },
    { q: "What is 10% of 500?", options: ["5", "10", "50", "100"], answer: 2 }
  ],

  // ==========================================================
  // SOCIAL STUDIES — 100 QUESTIONS
  // ==========================================================
  social studies: [

    { q: "What is the capital city of Nepal?", options: ["Pokhara", "Kathmandu", "Biratnagar", "Janakpur"], answer: 1 },
    { q: "How many provinces are there in Nepal?", options: ["5", "6", "7", "8"], answer: 2 },
    { q: "What is the highest mountain in Nepal?", options: ["Kanchenjunga", "Mount Everest", "Dhaulagiri", "Manaslu"], answer: 1 },
    { q: "Which is the largest natural lake of Nepal by area?", options: ["Rara Lake", "Phewa Lake", "Rupa Lake", "Tilicho Lake"], answer: 0 },
    { q: "Which is the deepest lake in Nepal?", options: ["Phewa", "Rara", "Tilicho", "Rupa"], answer: 1 },
    { q: "Which is the longest river of Nepal?", options: ["Koshi", "Karnali", "Bagmati", "Rapti"], answer: 1 },
    { q: "Which river flows through Kathmandu Valley?", options: ["Karnali", "Bagmati", "Koshi", "Mahakali"], answer: 1 },
    { q: "What is the national flower of Nepal?", options: ["Lotus", "Rhododendron", "Rose", "Sunflower"], answer: 1 },
    { q: "What is the national bird of Nepal?", options: ["Danphe", "Crow", "Eagle", "Parrot"], answer: 0 },
    { q: "What is the national animal of Nepal?", options: ["Tiger", "Cow", "Elephant", "Yak"], answer: 1 },

    { q: "What is the national sport of Nepal?", options: ["Football", "Cricket", "Volleyball", "Basketball"], answer: 2 },
    { q: "What is the currency of Nepal?", options: ["Indian Rupee", "Nepalese Rupee", "Dollar", "Taka"], answer: 1 },
    { q: "Which mountain range contains Mount Everest?", options: ["Andes", "Alps", "Himalayas", "Rockies"], answer: 2 },
    { q: "Which country lies to the north of Nepal?", options: ["India", "China", "Bhutan", "Bangladesh"], answer: 1 },
    { q: "Which two countries border Nepal?", options: ["India and China", "India and Bhutan", "China and Bangladesh", "Pakistan and India"], answer: 0 },
    { q: "Which direction is Nepal's Terai region generally located?", options: ["North", "South", "East only", "West only"], answer: 1 },
    { q: "Which region of Nepal contains many high mountains?", options: ["Terai", "Hill", "Mountain", "Inner Terai"], answer: 2 },
    { q: "Which region of Nepal is generally flat and fertile?", options: ["Mountain", "Hill", "Terai", "Himal"], answer: 2 },
    { q: "How many districts are there in Nepal?", options: ["75", "76", "77", "78"], answer: 2 },
    { q: "How many local levels are there in Nepal?", options: ["753", "700", "775", "800"], answer: 0 },

    { q: "What type of state system does Nepal have?", options: ["Unitary only", "Federal", "Colonial", "Monarchical"], answer: 1 },
    { q: "When was the Constitution of Nepal promulgated?", options: ["20 September 2015", "1 January 2010", "28 May 2008", "26 January 2015"], answer: 0 },
    { q: "What is the supreme law of Nepal?", options: ["Civil Code", "Constitution", "Local Act", "Treaty"], answer: 1 },
    { q: "What are the three levels of government in Nepal?", options: ["Federal, Provincial and Local", "National, District and Ward", "Central, District and Village", "Federal, District and Municipal"], answer: 0 },
    { q: "How many houses does the Federal Parliament of Nepal have?", options: ["One", "Two", "Three", "Four"], answer: 1 },
    { q: "What are the two houses of the Federal Parliament called?", options: ["House of Representatives and National Assembly", "Senate and Congress", "National Assembly and Supreme Court", "House of Lords and House of Commons"], answer: 0 },
    { q: "Which body is the lower house of Nepal's Federal Parliament?", options: ["National Assembly", "House of Representatives", "Supreme Court", "Provincial Assembly"], answer: 1 },
    { q: "Which body is the upper house of Nepal's Federal Parliament?", options: ["House of Representatives", "National Assembly", "District Assembly", "Local Assembly"], answer: 1 },
    { q: "Who is known for leading the unification campaign of modern Nepal?", options: ["Prithvi Narayan Shah", "Jung Bahadur Rana", "Bhimsen Thapa", "Tribhuvan"], answer: 0 },
    { q: "Which king is associated with the unification of Nepal?", options: ["Prithvi Narayan Shah", "Mahendra", "Birendra", "Gyanendra"], answer: 0 },

    { q: "Who established the Rana regime?", options: ["Jung Bahadur Rana", "Prithvi Narayan Shah", "Tribhuvan", "Bhimsen Thapa"], answer: 0 },
    { q: "Which political system ruled Nepal from 1960 to 1990 AD?", options: ["Federalism", "Panchayat system", "Republic", "Rana rule"], answer: 1 },
    { q: "Which movement restored multiparty democracy in Nepal in 1990?", options: ["People's Movement of 1990", "Satyagraha", "Quit Nepal Movement", "Industrial Movement"], answer: 0 },
    { q: "When was Nepal declared a republic?", options: ["2001", "2005", "2008", "2015"], answer: 2 },
    { q: "Which historic palace museum is located in Kathmandu?", options: ["Narayanhiti Palace", "Red Fort", "Janaki Palace", "Gorkha Palace"], answer: 0 },
    { q: "Which city is famous for Janaki Mandir?", options: ["Pokhara", "Janakpur", "Birgunj", "Dharan"], answer: 1 },
    { q: "Janaki Mandir is dedicated mainly to which figure?", options: ["Sita", "Buddha", "Shiva", "Krishna"], answer: 0 },
    { q: "Lumbini is famous as the birthplace of:", options: ["Prithvi Narayan Shah", "Gautama Buddha", "Sita", "Araniko"], answer: 1 },
    { q: "In which district is Lumbini located?", options: ["Rupandehi", "Kathmandu", "Chitwan", "Kaski"], answer: 0 },
    { q: "Which national park is famous for one-horned rhinoceroses?", options: ["Chitwan National Park", "Rara National Park", "Sagarmatha National Park", "Shivapuri National Park"], answer: 0 },

    { q: "Which is Nepal's first national park?", options: ["Chitwan National Park", "Bardia National Park", "Sagarmatha National Park", "Langtang National Park"], answer: 0 },
    { q: "Sagarmatha National Park is associated with which mountain?", options: ["Dhaulagiri", "Mount Everest", "Annapurna", "Manaslu"], answer: 1 },
    { q: "Which national park is famous for Rara Lake?", options: ["Rara National Park", "Chitwan National Park", "Bardia National Park", "Parsa National Park"], answer: 0 },
    { q: "What is a map?", options: ["A representation of an area on a surface", "A type of mountain", "A government office", "A river system"], answer: 0 },
    { q: "What does a map scale show?", options: ["Relationship between map distance and actual distance", "Weather only", "Population only", "Language only"], answer: 0 },
    { q: "What does a compass help us find?", options: ["Directions", "Population", "Temperature", "Rainfall"], answer: 0 },
    { q: "How many main directions are there?", options: ["2", "4", "6", "8"], answer: 1 },
    { q: "Which direction is opposite to north?", options: ["East", "West", "South", "North-East"], answer: 2 },
    { q: "Which direction is opposite to east?", options: ["North", "South", "West", "North-East"], answer: 2 },
    { q: "What is climate?", options: ["Long-term pattern of weather", "Daily temperature only", "A type of soil", "A type of river"], answer: 0 },

    { q: "What is weather?", options: ["Short-term condition of the atmosphere", "Long-term climate only", "Population pattern", "Land ownership"], answer: 0 },
    { q: "Which instrument measures temperature?", options: ["Barometer", "Thermometer", "Rain gauge", "Anemometer"], answer: 1 },
    { q: "Which instrument measures atmospheric pressure?", options: ["Barometer", "Thermometer", "Compass", "Hygrometer"], answer: 0 },
    { q: "Which instrument measures rainfall?", options: ["Rain gauge", "Barometer", "Thermometer", "Compass"], answer: 0 },
    { q: "Which instrument measures wind speed?", options: ["Anemometer", "Barometer", "Thermometer", "Rain gauge"], answer: 0 },
    { q: "What is population?", options: ["Number of people living in an area", "Amount of rainfall", "Number of rivers", "Area of a country"], answer: 0 },
    { q: "What is migration?", options: ["Movement of people from one place to another", "Growth of plants", "Movement of clouds", "Change of seasons"], answer: 0 },
    { q: "What is urbanization?", options: ["Growth of towns and cities", "Growth of forests", "Formation of mountains", "Decrease in population"], answer: 0 },
    { q: "What is agriculture?", options: ["Cultivation of crops and raising animals", "Only manufacturing", "Only trading", "Only transportation"], answer: 0 },
    { q: "Which sector includes farming?", options: ["Primary sector", "Secondary sector", "Tertiary sector", "Quaternary sector"], answer: 0 },

    { q: "Which sector mainly includes manufacturing?", options: ["Primary", "Secondary", "Tertiary", "Household"], answer: 1 },
    { q: "Which sector mainly includes services?", options: ["Primary", "Secondary", "Tertiary", "Agricultural"], answer: 2 },
    { q: "What is trade?", options: ["Buying and selling of goods and services", "Only farming", "Only transportation", "Only saving money"], answer: 0 },
    { q: "What is export?", options: ["Goods or services sold to another country", "Goods bought from another country", "Goods stored at home", "Goods destroyed"], answer: 0 },
    { q: "What is import?", options: ["Goods or services bought from another country", "Goods sold abroad", "Goods produced at home", "Goods thrown away"], answer: 0 },
    { q: "What is a budget?", options: ["A plan of income and expenditure", "A type of currency", "A bank building", "A tax only"], answer: 0 },
    { q: "What is saving?", options: ["Keeping part of income for future use", "Spending all income", "Borrowing money", "Paying tax only"], answer: 0 },
    { q: "What is a bank?", options: ["A financial institution", "A school", "A hospital", "A court"], answer: 0 },
    { q: "What is democracy?", options: ["Government in which people participate in choosing representatives", "Rule by one family only", "Rule by the military only", "Rule without laws"], answer: 0 },
    { q: "What is an election?", options: ["A process of choosing representatives by voting", "A court hearing", "A school examination", "A census only"], answer: 0 },

    { q: "What is a citizen?", options: ["A legally recognized member of a country", "A tourist only", "A foreign visitor only", "A temporary worker only"], answer: 0 },
    { q: "What is a fundamental right?", options: ["A basic right protected by the constitution", "A school rule", "A traffic signal", "A private agreement"], answer: 0 },
    { q: "What is equality?", options: ["Equal status and opportunity under the law", "Treating everyone differently", "Giving rights to only one group", "Ignoring laws"], answer: 0 },
    { q: "What is rule of law?", options: ["Everyone is subject to the law", "Only citizens follow laws", "Only leaders follow laws", "No one follows laws"], answer: 0 },
    { q: "Which institution interprets laws and settles legal disputes?", options: ["Judiciary", "Legislature", "Executive", "Media"], answer: 0 },
    { q: "Which branch generally makes laws?", options: ["Legislature", "Judiciary", "Executive", "Police"], answer: 0 },
    { q: "Which branch generally implements laws and runs administration?", options: ["Executive", "Judiciary", "Legislature", "Media"], answer: 0 },
    { q: "What is human rights?", options: ["Basic rights and freedoms belonging to all people", "Rights only for government workers", "Rights only for adults", "Rules of a school"], answer: 0 },
    { q: "When was the United Nations established?", options: ["1945", "1950", "1939", "1960"], answer: 0 },
    { q: "Where is the headquarters of the United Nations?", options: ["New York", "Geneva", "Paris", "London"], answer: 0 },

    { q: "What does UN stand for?", options: ["United Nations", "Universal Nations", "United Neighbours", "Union Nations"], answer: 0 },
    { q: "Where is the headquarters of SAARC?", options: ["Kathmandu", "New Delhi", "Dhaka", "Colombo"], answer: 0 },
    { q: "What does SAARC stand for?", options: ["South Asian Association for Regional Cooperation", "South Asian Agency for Regional Culture", "South Asia Association for Rural Cooperation", "Southern Asian Association for Regional Countries"], answer: 0 },
    { q: "Which ocean is the largest?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"], answer: 1 },
    { q: "Which is the smallest ocean?", options: ["Pacific", "Indian", "Arctic", "Atlantic"], answer: 2 },
    { q: "Which continent is the largest by area?", options: ["Asia", "Africa", "Europe", "Australia"], answer: 0 },
    { q: "Which continent is historically known as the Dark Continent?", options: ["Asia", "Africa", "Europe", "Australia"], answer: 1 },
    { q: "Which line divides Earth into Northern and Southern Hemispheres?", options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Arctic Circle"], answer: 1 },
    { q: "What is the Prime Meridian?", options: ["The 0° longitude line", "The 0° latitude line", "The equator", "The Tropic of Capricorn"], answer: 0 },
    { q: "What is the Equator?", options: ["The 0° latitude line", "The 0° longitude line", "The North Pole", "The South Pole"], answer: 0 },

    { q: "Which is the largest continent?", options: ["Africa", "Asia", "Europe", "South America"], answer: 1 },
    { q: "Which is the smallest continent?", options: ["Europe", "Australia", "Africa", "Antarctica"], answer: 1 },
    { q: "Which continent is mostly covered by ice?", options: ["Antarctica", "Asia", "Africa", "Europe"], answer: 0 },
    { q: "What is culture?", options: ["Shared beliefs, customs, traditions and ways of life", "Only language", "Only food", "Only clothing"], answer: 0 },
    { q: "What is heritage?", options: ["Valuable traditions, places and objects passed from the past", "Only modern technology", "Only new buildings", "Only money"], answer: 0 },
    { q: "Which festival is known as the festival of lights in Nepal?", options: ["Dashain", "Tihar", "Holi", "Maghe Sankranti"], answer: 1 },
    { q: "Which festival is widely known as the festival of colours?", options: ["Holi", "Dashain", "Tihar", "Teej"], answer: 0 },
    { q: "Which festival is one of the major festivals of Nepal?", options: ["Dashain", "Halloween", "Thanksgiving", "Easter"], answer: 0 },
    { q: "Which city is known as the tourism capital of Nepal?", options: ["Pokhara", "Janakpur", "Birgunj", "Nepalgunj"], answer: 0 },
    { q: "Which ancient city is famous for Patan Durbar Square?", options: ["Lalitpur", "Dharan", "Biratnagar", "Butwal"], answer: 0 }
  ],


  // ==========================================================
  // NEPALI — 100 QUESTIONS
  // ==========================================================
  nepali: [

    { q: "‘सूर्य’ को अर्को पर्यायवाची शब्द कुन हो?", options: ["चन्द्रमा", "रवि", "पृथ्वी", "बादल"], answer: 1 },
    { q: "‘आकाश’ को पर्यायवाची शब्द कुन हो?", options: ["नभ", "जल", "धरती", "वन"], answer: 0 },
    { q: "‘पानी’ को पर्यायवाची शब्द कुन हो?", options: ["अग्नि", "जल", "वायु", "धूलो"], answer: 1 },
    { q: "‘पृथ्वी’ को पर्यायवाची शब्द कुन हो?", options: ["धरती", "आकाश", "सागर", "वायु"], answer: 0 },
    { q: "‘वन’ को पर्यायवाची शब्द कुन हो?", options: ["जङ्गल", "नदी", "पहाड", "घर"], answer: 0 },
    { q: "‘सागर’ को पर्यायवाची शब्द कुन हो?", options: ["समुद्र", "पहाड", "ताल", "नदी"], answer: 0 },
    { q: "‘हावा’ को पर्यायवाची शब्द कुन हो?", options: ["वायु", "अग्नि", "जल", "धर्ती"], answer: 0 },
    { q: "‘घर’ को पर्यायवाची शब्द कुन हो?", options: ["गृह", "वन", "बाटो", "खेत"], answer: 0 },
    { q: "‘राजा’ को पर्यायवाची शब्द कुन हो?", options: ["नरेश", "सेवक", "प्रजा", "मन्त्री"], answer: 0 },
    { q: "‘घोडा’ को पर्यायवाची शब्द कुन हो?", options: ["अश्व", "गज", "मृग", "सिंह"], answer: 0 },

    { q: "‘दिन’ को विपरीतार्थक शब्द कुन हो?", options: ["बिहान", "रात", "साँझ", "दिउँसो"], answer: 1 },
    { q: "‘ठूलो’ को विपरीतार्थक शब्द कुन हो?", options: ["लामो", "सानो", "अग्लो", "मोटो"], answer: 1 },
    { q: "‘माथि’ को विपरीतार्थक शब्द कुन हो?", options: ["अगाडि", "तल", "पछाडि", "भित्र"], answer: 1 },
    { q: "‘नजिक’ को विपरीतार्थक शब्द कुन हो?", options: ["छेउ", "टाढा", "माथि", "अगाडि"], answer: 1 },
    { q: "‘सत्य’ को विपरीतार्थक शब्द कुन हो?", options: ["असत्य", "सही", "ठीक", "न्याय"], answer: 0 },
    { q: "‘सुख’ को विपरीतार्थक शब्द कुन हो?", options: ["शान्ति", "दुःख", "हर्ष", "खुसी"], answer: 1 },
    { q: "‘नयाँ’ को विपरीतार्थक शब्द कुन हो?", options: ["पुरानो", "ताजा", "नवीन", "सुन्दर"], answer: 0 },
    { q: "‘धनी’ को विपरीतार्थक शब्द कुन हो?", options: ["सम्पन्न", "गरिब", "ठूलो", "बलियो"], answer: 1 },
    { q: "‘उज्यालो’ को विपरीतार्थक शब्द कुन हो?", options: ["चम्किलो", "अँध्यारो", "सेतो", "सफा"], answer: 1 },
    { q: "‘जीवन’ को विपरीतार्थक शब्द कुन हो?", options: ["मृत्यु", "स्वास्थ्य", "सास", "जन्म"], answer: 0 },

    { q: "‘राम’ कुन शब्दभेद हो?", options: ["संज्ञा", "क्रिया", "विशेषण", "क्रियाविशेषण"], answer: 0 },
    { q: "‘सुन्दर’ कुन शब्दभेद हो?", options: ["संज्ञा", "विशेषण", "सर्वनाम", "क्रिया"], answer: 1 },
    { q: "‘छिटो’ शब्दले क्रियाको विशेषता जनाउँदा कुन शब्दभेद हुन्छ?", options: ["संज्ञा", "सर्वनाम", "क्रियाविशेषण", "सम्बन्धबोधक"], answer: 2 },
    { q: "‘ऊ’ कुन शब्दभेद हो?", options: ["सर्वनाम", "संज्ञा", "क्रिया", "विशेषण"], answer: 0 },
    { q: "‘खानु’ कुन शब्दभेद हो?", options: ["क्रिया", "संज्ञा", "विशेषण", "सर्वनाम"], answer: 0 },
    { q: "‘र’ कुन शब्दभेद हो?", options: ["समुच्चयबोधक", "संज्ञा", "क्रिया", "विशेषण"], answer: 0 },
    { q: "‘अरे!’ कुन शब्दभेद हो?", options: ["विस्मयादिबोधक", "संज्ञा", "सर्वनाम", "क्रिया"], answer: 0 },
    { q: "‘मा’ कुन शब्दभेदको उदाहरण हो?", options: ["सम्बन्धबोधक", "संज्ञा", "विशेषण", "क्रिया"], answer: 0 },
    { q: "‘विद्यालय’ कुन शब्दभेद हो?", options: ["संज्ञा", "क्रिया", "विशेषण", "सर्वनाम"], answer: 0 },
    { q: "‘राम्रो’ कुन शब्दभेद हो?", options: ["विशेषण", "संज्ञा", "क्रिया", "सर्वनाम"], answer: 0 },

    { q: "‘केटा’ को स्त्रीलिङ्ग कुन हो?", options: ["केटी", "छोरा", "पुरुष", "भाइ"], answer: 0 },
    { q: "‘भाइ’ को स्त्रीलिङ्ग कुन हो?", options: ["दिदी", "बहिनी", "छोरा", "काका"], answer: 1 },
    { q: "‘राजा’ को स्त्रीलिङ्ग कुन हो?", options: ["रानी", "राजकुमार", "मन्त्री", "प्रजा"], answer: 0 },
    { q: "‘छोरा’ को स्त्रीलिङ्ग कुन हो?", options: ["छोरी", "बहिनी", "आमा", "दिदी"], answer: 0 },
    { q: "‘बाबु’ को स्त्रीलिङ्ग कुन हो?", options: ["आमा", "नानी", "छोरी", "दिदी"], answer: 2 },
    { q: "‘नायक’ को स्त्रीलिङ्ग कुन हो?", options: ["नायिका", "राजकुमारी", "अभिनेत्री", "लेखिका"], answer: 0 },
    { q: "‘अभिनेता’ को स्त्रीलिङ्ग कुन हो?", options: ["अभिनेत्री", "नायिका", "गायिका", "लेखिका"], answer: 0 },
    { q: "‘शिक्षक’ को स्त्रीलिङ्ग कुन हो?", options: ["शिक्षिका", "विद्यार्थी", "लेखिका", "नायिका"], answer: 0 },
    { q: "‘लेखक’ को स्त्रीलिङ्ग कुन हो?", options: ["लेखिका", "गायिका", "शिक्षिका", "अभिनेत्री"], answer: 0 },
    { q: "‘भान्जा’ को स्त्रीलिङ्ग कुन हो?", options: ["भान्जी", "बहिनी", "छोरी", "दिदी"], answer: 0 },

    { q: "‘केटा’ को बहुवचन कुन हो?", options: ["केटाहरू", "केटीहरू", "केटाले", "केटाको"], answer: 0 },
    { q: "‘किताब’ को बहुवचन कुन हो?", options: ["किताबी", "किताबहरू", "किताबले", "किताबको"], answer: 1 },
    { q: "‘फूल’ को बहुवचन कुन हो?", options: ["फूलहरू", "फूली", "फूलले", "फूलको"], answer: 0 },
    { q: "‘मानिस’ को बहुवचन कुन हो?", options: ["मानिसहरू", "मानिसी", "मानिसको", "मानिसले"], answer: 0 },
    { q: "‘विद्यार्थी’ को बहुवचन कुन हो?", options: ["विद्यार्थीहरू", "विद्यार्थीको", "विद्यार्थीले", "विद्यार्थीनी"], answer: 0 },
    { q: "‘घर’ को बहुवचन कुन हो?", options: ["घरहरू", "घरे", "घरले", "घरको"], answer: 0 },
    { q: "‘रूख’ को बहुवचन कुन हो?", options: ["रूखहरू", "रूखे", "रूखको", "रूखले"], answer: 0 },
    { q: "‘चरा’ को बहुवचन कुन हो?", options: ["चराहरू", "चराले", "चराको", "चरी"], answer: 0 },
    { q: "‘नदी’ को बहुवचन कुन हो?", options: ["नदीहरू", "नदिले", "नदीको", "नदिया"], answer: 0 },
    { q: "‘पहाड’ को बहुवचन कुन हो?", options: ["पहाडहरू", "पहाडी", "पहाडको", "पहाडले"], answer: 0 },

    { q: "‘म’ कुन पुरुष हो?", options: ["प्रथम पुरुष", "द्वितीय पुरुष", "तृतीय पुरुष", "कुनै होइन"], answer: 0 },
    { q: "‘तिमी’ कुन पुरुष हो?", options: ["प्रथम पुरुष", "द्वितीय पुरुष", "तृतीय पुरुष", "बहुवचन मात्र"], answer: 1 },
    { q: "‘ऊ’ कुन पुरुष हो?", options: ["प्रथम पुरुष", "द्वितीय पुरुष", "तृतीय पुरुष", "द्विवचन"], answer: 2 },
    { q: "‘हामी’ कुन पुरुष हो?", options: ["प्रथम पुरुष", "द्वितीय पुरुष", "तृतीय पुरुष", "कुनै होइन"], answer: 0 },
    { q: "‘तपाईं’ सामान्यतया कुन पुरुष जनाउँछ?", options: ["प्रथम", "द्वितीय", "तृतीय", "चौथो"], answer: 1 },
    { q: "‘उनीहरू’ कुन पुरुष हो?", options: ["प्रथम", "द्वितीय", "तृतीय", "द्विवचन"], answer: 2 },
    { q: "‘हामीहरू’ कुन पुरुषका उदाहरण हुन्?", options: ["प्रथम", "द्वितीय", "तृतीय", "कुनै होइन"], answer: 0 },
    { q: "‘तिमीहरू’ कुन पुरुष हो?", options: ["प्रथम", "द्वितीय", "तृतीय", "कुनै होइन"], answer: 1 },
    { q: "‘उहाँ’ कुन पुरुष हो?", options: ["प्रथम", "द्वितीय", "तृतीय", "द्विवचन"], answer: 2 },
    { q: "‘म’ र ‘हामी’ कुन पुरुषका उदाहरण हुन्?", options: ["प्रथम पुरुष", "द्वितीय पुरुष", "तृतीय पुरुष", "सम्बन्धबोधक"], answer: 0 },

    { q: "‘राम स्कूल जान्छ।’ वाक्य कुन कालमा छ?", options: ["वर्तमान काल", "भूत काल", "भविष्यत् काल", "पूर्ण भूत"], answer: 0 },
    { q: "‘राम स्कूल गयो।’ वाक्य कुन कालमा छ?", options: ["वर्तमान", "भूत", "भविष्यत्", "अपूर्ण वर्तमान"], answer: 1 },
    { q: "‘राम स्कूल जानेछ।’ वाक्य कुन कालमा छ?", options: ["वर्तमान", "भूत", "भविष्यत्", "पूर्ण वर्तमान"], answer: 2 },
    { q: "‘म खाना खान्छु।’ कुन काल हो?", options: ["वर्तमान", "भूत", "भविष्यत्", "पूर्ण भूत"], answer: 0 },
    { q: "‘म खाना खाएँ।’ कुन काल हो?", options: ["वर्तमान", "भूत", "भविष्यत्", "अपूर्ण भविष्यत्"], answer: 1 },
    { q: "‘म खाना खानेछु।’ कुन काल हो?", options: ["वर्तमान", "भूत", "भविष्यत्", "पूर्ण वर्तमान"], answer: 2 },
    { q: "‘उनी हिजो आए।’ कुन काल हो?", options: ["वर्तमान", "भूत", "भविष्यत्", "कुनै होइन"], answer: 1 },
    { q: "‘उनी भोलि आउनेछन्।’ कुन काल हो?", options: ["वर्तमान", "भूत", "भविष्यत्", "पूर्ण भूत"], answer: 2 },
    { q: "‘म अहिले पढ्दैछु।’ कुन काल हो?", options: ["वर्तमान", "भूत", "भविष्यत्", "पूर्ण भूत"], answer: 0 },
    { q: "‘उसले हिजो पत्र लेख्यो।’ कुन काल हो?", options: ["वर्तमान", "भूत", "भविष्यत्", "पूर्ण वर्तमान"], answer: 1 },

    { q: "‘रामले खाना खायो।’ वाक्यमा ‘रामले’ कुन कारक हो?", options: ["कर्त्ता", "कर्म", "करण", "सम्प्रदान"], answer: 0 },
    { q: "‘रामले कलमले लेख्यो।’ ‘कलमले’ कुन कारक हो?", options: ["कर्त्ता", "करण", "सम्बन्ध", "अधिकरण"], answer: 1 },
    { q: "‘मैले भाइलाई किताब दिएँ।’ ‘भाइलाई’ कुन कारक हो?", options: ["कर्त्ता", "कर्म", "सम्प्रदान", "करण"], answer: 2 },
    { q: "‘रामको किताब’ मा ‘रामको’ कुन कारक हो?", options: ["सम्बन्ध", "कर्त्ता", "कर्म", "करण"], answer: 0 },
    { q: "‘घरमा किताब छ।’ ‘घरमा’ कुन कारक हो?", options: ["अधिकरण", "सम्बन्ध", "कर्त्ता", "सम्प्रदान"], answer: 0 },
    { q: "‘सीताले गीत गाइन्।’ ‘सीताले’ कुन कारक हो?", options: ["कर्त्ता", "कर्म", "करण", "सम्बन्ध"], answer: 0 },
    { q: "‘उसले मलाई बोलायो।’ ‘मलाई’ कुन कारक हो?", options: ["कर्म", "कर्त्ता", "करण", "अधिकरण"], answer: 0 },
    { q: "‘चक्कुले फल काट्यो।’ ‘चक्कुले’ कुन कारक हो?", options: ["करण", "सम्बन्ध", "कर्त्ता", "सम्प्रदान"], answer: 0 },
    { q: "‘विद्यालयमा विद्यार्थी छन्।’ ‘विद्यालयमा’ कुन कारक हो?", options: ["अधिकरण", "कर्त्ता", "कर्म", "सम्बन्ध"], answer: 0 },
    { q: "‘आमाको माया’ मा ‘आमाको’ कुन कारक हो?", options: ["सम्बन्ध", "करण", "कर्म", "कर्त्ता"], answer: 0 },

    { q: "‘ढिलो गर्नु’ मुहावराको अर्थ के हो?", options: ["समयमै गर्नु", "समय बिताउनु", "छिटो गर्नु", "काम नगर्नु"], answer: 1 },
    { q: "‘नाक काट्नु’ मुहावराको अर्थ के हो?", options: ["सम्मान पाउनु", "इज्जत गुमाउनु", "नाक दुख्नु", "खुसी हुनु"], answer: 1 },
    { q: "‘आँखाको तारा’ भन्नाले के बुझिन्छ?", options: ["धेरै प्रिय व्यक्ति", "शत्रु", "अपरिचित व्यक्ति", "कमजोर व्यक्ति"], answer: 0 },
    { q: "‘मुखमा रामराम बगलीमा छुरा’ को अर्थ के हो?", options: ["साँचो मित्रता", "बाहिर राम्रो देखिएर भित्र धोका दिने", "धेरै बोल्ने", "धार्मिक हुनु"], answer: 1 },
    { q: "‘हातेमालो गर्नु’ को अर्थ के हो?", options: ["झगडा गर्नु", "सहयोग गर्नु", "काम रोक्नु", "भाग्नु"], answer: 1 },
    { q: "‘कानमा तेल हाल्नु’ को अर्थ के हो?", options: ["ध्यान नदिनु", "ध्यान दिनु", "सुन्नु", "बोल्नु"], answer: 0 },
    { q: "‘आकाशको फल आँखा तरी मर’ को अर्थ के हो?", options: ["असम्भव वस्तुको आशा गर्नु", "फल खानु", "खेती गर्नु", "सफल हुनु"], answer: 0 },
    { q: "‘दाँतमा ढुङ्गा लाग्नु’ भन्नाले के बुझिन्छ?", options: ["अप्रत्याशित कठिनाइ आउनु", "खाना खानु", "हाँस्नु", "सुत्नु"], answer: 0 },
    { q: "‘चार चाँद लगाउनु’ को अर्थ के हो?", options: ["सुन्दरता वा शोभा बढाउनु", "चन्द्रमा हेर्नु", "काम बिगार्नु", "झगडा गर्नु"], answer: 0 },
    { q: "‘कमर कस्नु’ को अर्थ के हो?", options: ["तयार हुनु", "सुत्नु", "भाग्नु", "आराम गर्नु"], answer: 0 },

    { q: "‘तिमी कहाँ जाँदैछौ?’ कुन प्रकारको वाक्य हो?", options: ["प्रश्नवाचक", "विस्मयादिबोधक", "आज्ञार्थक", "विधानार्थक"], answer: 0 },
    { q: "‘ढोका बन्द गर।’ कुन प्रकारको वाक्य हो?", options: ["आज्ञार्थक", "प्रश्नवाचक", "विस्मयादिबोधक", "विधानार्थक"], answer: 0 },
    { q: "‘आज मौसम राम्रो छ।’ कुन प्रकारको वाक्य हो?", options: ["विधानार्थक", "प्रश्नवाचक", "आज्ञार्थक", "विस्मयादिबोधक"], answer: 0 },
    { q: "‘वाह! कति राम्रो फूल!’ कुन प्रकारको वाक्य हो?", options: ["विस्मयादिबोधक", "प्रश्नवाचक", "आज्ञार्थक", "विधानार्थक"], answer: 0 },
    { q: "‘तिमी पढ।’ कुन प्रकारको वाक्य हो?", options: ["आज्ञार्थक", "प्रश्नवाचक", "विधानार्थक", "विस्मयादिबोधक"], answer: 0 },
    { q: "‘के तिमी स्कूल जान्छौ?’ कुन प्रकारको वाक्य हो?", options: ["प्रश्नवाचक", "आज्ञार्थक", "विधानार्थक", "इच्छार्थक"], answer: 0 },
    { q: "‘काश! म पनि त्यहाँ जान पाऊँ।’ कुन प्रकारको वाक्य हो?", options: ["इच्छार्थक", "प्रश्नवाचक", "आज्ञार्थक", "विधानार्थक"], answer: 0 },
    { q: "‘तिमी सधैँ सफल होऊ।’ कुन प्रकारको वाक्य हो?", options: ["इच्छार्थक", "प्रश्नवाचक", "आज्ञार्थक", "विधानार्थक"], answer: 0 },
    { q: "‘राम विद्यार्थी हो।’ कुन प्रकारको वाक्य हो?", options: ["विधानार्थक", "प्रश्नवाचक", "आज्ञार्थक", "विस्मयादिबोधक"], answer: 0 },
    { q: "‘कति सुन्दर दृश्य!’ कुन प्रकारको वाक्य हो?", options: ["विस्मयादिबोधक", "विधानार्थक", "प्रश्नवाचक", "आज्ञार्थक"], answer: 0 }
  ],

  // ==========================================================
  // COMPUTER — 100 QUESTIONS
  // ==========================================================
  computer: [

    { q: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Primary Unit", "Central Program Utility", "Control Processing User"], answer: 0 },
    { q: "Which part is called the brain of the computer?", options: ["Monitor", "CPU", "Keyboard", "Printer"], answer: 1 },
    { q: "Which is an input device?", options: ["Monitor", "Keyboard", "Speaker", "Printer"], answer: 1 },
    { q: "Which is an output device?", options: ["Mouse", "Keyboard", "Scanner", "Monitor"], answer: 3 },
    { q: "Which is hardware?", options: ["Windows", "Keyboard", "Python", "Chrome"], answer: 1 },
    { q: "Which is software?", options: ["Monitor", "Mouse", "Operating system", "Keyboard"], answer: 2 },
    { q: "What does OS stand for?", options: ["Operating System", "Online Service", "Open Software", "Output System"], answer: 0 },
    { q: "Which is an operating system?", options: ["Windows", "Google", "HTML", "Wi-Fi"], answer: 0 },
    { q: "Which is a mobile operating system?", options: ["Android", "Excel", "Paint", "USB"], answer: 0 },
    { q: "Which is an open-source operating system?", options: ["Linux", "Windows only", "PowerPoint", "Chrome"], answer: 0 },

    { q: "What is RAM?", options: ["Temporary working memory", "Permanent storage only", "A printer", "A network"], answer: 0 },
    { q: "What is ROM?", options: ["Read Only Memory", "Random Output Memory", "Run Only Machine", "Remote Online Memory"], answer: 0 },
    { q: "Which storage device commonly uses flash memory?", options: ["USB drive", "Mouse", "Monitor", "Speaker"], answer: 0 },
    { q: "How many bits make one byte?", options: ["4", "8", "16", "32"], answer: 1 },
    { q: "Which is larger?", options: ["1 byte", "1 kilobyte", "1 bit", "1 nibble"], answer: 1 },
    { q: "What does ICT stand for?", options: ["Information and Communication Technology", "Internet Computer Tool", "Information Control Terminal", "Internal Communication Transfer"], answer: 0 },
    { q: "What does WWW stand for?", options: ["World Wide Web", "World Web Window", "Wide World Wire", "Web World Work"], answer: 0 },
    { q: "What is a URL?", options: ["Web address", "Computer virus", "Keyboard key", "File type"], answer: 0 },
    { q: "Which is a web browser?", options: ["Chrome", "Windows", "Excel", "Bluetooth"], answer: 0 },
    { q: "What does HTTPS indicate?", options: ["A secure version of HTTP", "A printer driver", "A file format", "A keyboard shortcut"], answer: 0 },

    { q: "What is email used for?", options: ["Electronic communication", "Printing only", "Playing music only", "Formatting disks"], answer: 0 },
    { q: "Which is a strong password practice?", options: ["Use a unique long password", "Use 123456", "Use your name only", "Share it publicly"], answer: 0 },
    { q: "What is phishing?", options: ["A trick to steal information using fake messages/sites", "A type of printer", "A programming language", "A storage device"], answer: 0 },
    { q: "What is a computer virus?", options: ["Malicious software that can harm or disrupt systems", "A hardware chip", "A browser", "A monitor"], answer: 0 },
    { q: "What does antivirus software do?", options: ["Detects or removes malware", "Creates electricity", "Prints documents", "Measures temperature"], answer: 0 },
    { q: "What should you do with a suspicious email attachment?", options: ["Avoid opening it and verify the sender", "Open immediately", "Forward to everyone", "Disable security"], answer: 0 },
    { q: "What is a file?", options: ["A collection of stored digital information", "A computer desk", "A cable", "A screen"], answer: 0 },
    { q: "What is a folder?", options: ["A container used to organize files", "A keyboard key", "A virus", "A browser"], answer: 0 },
    { q: "What does Ctrl+C usually do?", options: ["Copy", "Cut", "Paste", "Save"], answer: 0 },
    { q: "What does Ctrl+V usually do?", options: ["Copy", "Paste", "Undo", "Print"], answer: 1 },

    { q: "What does Ctrl+X usually do?", options: ["Cut", "Copy", "Save", "Find"], answer: 0 },
    { q: "What does Ctrl+S usually do?", options: ["Save", "Search", "Select all", "Paste"], answer: 0 },
    { q: "What does Ctrl+Z usually do?", options: ["Undo", "Redo", "Zoom", "Copy"], answer: 0 },
    { q: "What does Ctrl+A usually do?", options: ["Select all", "Save", "Align", "Add"], answer: 0 },
    { q: "What does Ctrl+P usually do?", options: ["Print", "Paste", "Play", "Preview only"], answer: 0 },
    { q: "What does Ctrl+F usually do?", options: ["Find", "Format", "Forward", "File"], answer: 0 },
    { q: "What does Esc usually do?", options: ["Cancel or exit the current action", "Save", "Print", "Copy"], answer: 0 },
    { q: "What does Tab usually do in a form?", options: ["Move to the next field", "Delete a file", "Shut down", "Print"], answer: 0 },
    { q: "What is the desktop?", options: ["Main screen/workspace of a computer system", "A printer", "A CPU chip", "A website"], answer: 0 },
    { q: "What is an icon?", options: ["A small graphical symbol representing an item", "A cable", "A virus", "A sound"], answer: 0 },

    { q: "What is the taskbar?", options: ["A bar used to access apps and system functions", "A hard disk", "A browser", "A printer"], answer: 0 },
    { q: "What is Recycle Bin used for?", options: ["Holding deleted files temporarily", "Storing passwords", "Opening websites", "Running programs"], answer: 0 },
    { q: "Which software is used for word processing?", options: ["Microsoft Word", "Paint", "Calculator", "Bluetooth"], answer: 0 },
    { q: "Which software is mainly used for spreadsheets?", options: ["Excel", "PowerPoint", "Notepad", "Paint"], answer: 0 },
    { q: "Which software is used to create presentations?", options: ["PowerPoint", "Excel", "Calculator", "Notepad"], answer: 0 },
    { q: "In a spreadsheet, the intersection of a row and column is called:", options: ["Cell", "Slide", "Page", "Folder"], answer: 0 },
    { q: "What is a spreadsheet?", options: ["A grid for organizing and calculating data", "A video player", "A web browser", "A drawing tool"], answer: 0 },
    { q: "Which program is used for simple drawing?", options: ["Paint", "Excel", "Word", "Chrome"], answer: 0 },
    { q: "Which program can make slides?", options: ["PowerPoint", "Notepad", "Calculator", "File Explorer"], answer: 0 },
    { q: "What is a presentation slide?", options: ["One page/screen of a presentation", "A computer virus", "A spreadsheet cell", "A folder"], answer: 0 },

    { q: "What is Notepad mainly used for?", options: ["Plain text editing", "Video editing", "3D modeling", "Web browsing"], answer: 0 },
    { q: "What is a calculator app used for?", options: ["Performing calculations", "Browsing websites", "Editing photos only", "Sending email"], answer: 0 },
    { q: "What is programming?", options: ["Writing instructions for a computer", "Typing random letters", "Drawing on paper", "Cleaning hardware"], answer: 0 },
    { q: "Which is a programming language?", options: ["Python", "HTML only", "JPEG", "USB"], answer: 0 },
    { q: "What is HTML mainly used for?", options: ["Structuring web pages", "Styling hardware", "Calculating electricity", "Scanning documents"], answer: 0 },
    { q: "What is CSS mainly used for?", options: ["Styling web pages", "Storing files", "Running a printer", "Creating passwords"], answer: 0 },
    { q: "What is JavaScript commonly used for on websites?", options: ["Adding behavior and interactivity", "Replacing the keyboard", "Storing electricity", "Printing books"], answer: 0 },
    { q: "What is an algorithm?", options: ["A step-by-step procedure for solving a problem", "A computer virus", "A monitor", "A file extension"], answer: 0 },
    { q: "What is debugging?", options: ["Finding and fixing errors in a program", "Deleting all files", "Installing a monitor", "Browsing"], answer: 0 },
    { q: "What is a bug in programming?", options: ["An error or unexpected behavior in software", "A keyboard", "A printer", "A folder"], answer: 0 },

    { q: "What is AI?", options: ["Artificial Intelligence", "Automatic Internet", "Advanced Input", "Applied Information"], answer: 0 },
    { q: "What is NLP?", options: ["Natural Language Processing", "Network Link Program", "New Language Printer", "National Learning Platform"], answer: 0 },
    { q: "What is cloud computing?", options: ["Using computing/storage services over the internet", "Using only a local calculator", "Printing in the cloud", "A weather app only"], answer: 0 },
    { q: "What is online learning?", options: ["Learning using internet-connected digital resources", "Learning without any information", "Only classroom attendance", "Only gaming"], answer: 0 },
    { q: "What is a search engine?", options: ["A service that helps find information on the web", "A keyboard", "A storage chip", "A printer"], answer: 0 },
    { q: "Which is a search engine?", options: ["Google", "Windows", "USB", "Bluetooth"], answer: 0 },
    { q: "What is a digital footprint?", options: ["The record of a person's online activities", "A shoe mark", "A printer mark", "A computer cable"], answer: 0 },
    { q: "Why is online privacy important?", options: ["It helps protect personal information", "It makes computers faster", "It increases screen size", "It removes all passwords"], answer: 0 },
    { q: "What is Bluetooth?", options: ["A short-range wireless communication technology", "A type of cable", "A printer", "A web browser"], answer: 0 },
    { q: "What is Wi-Fi?", options: ["Wireless networking technology", "A storage device", "A CPU type", "A word processor"], answer: 0 },

    { q: "What is a LAN?", options: ["Local Area Network", "Large Access Node", "Long Area Number", "Local Audio Network"], answer: 0 },
    { q: "What is a WAN?", options: ["Wide Area Network", "Web Access Name", "Wireless Audio Network", "Wide Application Node"], answer: 0 },
    { q: "What does a router do?", options: ["Forwards data between networks/devices", "Prints documents", "Stores photos only", "Scans viruses only"], answer: 0 },
    { q: "What does a modem help do?", options: ["Connect a network to an internet service", "Display pictures", "Type text", "Create slides"], answer: 0 },
    { q: "What is downloading?", options: ["Receiving data from the internet", "Sending data to the internet", "Deleting data", "Printing data"], answer: 0 },
    { q: "What is uploading?", options: ["Sending data to an online service", "Receiving data", "Deleting files", "Copying to paper"], answer: 0 },
    { q: "What is a file extension?", options: ["Letters after a filename that indicate file type", "A password", "A folder name only", "A keyboard shortcut"], answer: 0 },
    { q: "Which extension is commonly used for PDF files?", options: [".pdf", ".docx", ".jpg", ".mp3"], answer: 0 },
    { q: "Which extension is commonly used for an image?", options: [".jpg", ".txt", ".html", ".xlsx"], answer: 0 },
    { q: "Which extension is commonly used for a spreadsheet?", options: [".xlsx", ".mp3", ".png", ".exe"], answer: 0 },

    { q: "Which extension is commonly used for a Word document?", options: [".docx", ".jpg", ".mp4", ".zip"], answer: 0 },
    { q: "Which device is used to scan paper documents?", options: ["Scanner", "Speaker", "Projector", "Router"], answer: 0 },
    { q: "Which device produces sound output?", options: ["Speaker", "Scanner", "Keyboard", "Mouse"], answer: 0 },
    { q: "Which device moves the pointer on screen?", options: ["Mouse", "Printer", "Speaker", "Scanner"], answer: 0 },
    { q: "Which key is commonly used to erase the character to the left?", options: ["Backspace", "Shift", "Tab", "Caps Lock"], answer: 0 },
    { q: "Which key is commonly used to make letters uppercase temporarily?", options: ["Shift", "Alt", "Tab", "Esc"], answer: 0 },
    { q: "Which key toggles uppercase typing?", options: ["Caps Lock", "Ctrl", "Enter", "Space"], answer: 0 },
    { q: "What does Enter usually do?", options: ["Confirms an action or starts a new line", "Deletes everything", "Copies text", "Opens Wi-Fi"], answer: 0 },
    { q: "What is a database?", options: ["An organized collection of data", "A monitor", "A keyboard", "A cable"], answer: 0 },
    { q: "What is a computer network?", options: ["Connected devices that communicate and share resources", "A single keyboard", "A printer only", "A power socket"], answer: 0 },

    { q: "What is cybersecurity?", options: ["Protecting computers, networks and data from threats", "Repairing chairs", "Typing faster", "Drawing pictures"], answer: 0 },
    { q: "Why should software be updated?", options: ["Updates can fix bugs and security issues", "To remove the keyboard", "To reduce storage to zero", "To stop all internet access"], answer: 0 },
    { q: "What is two-factor authentication?", options: ["Using two different verification methods", "Using two monitors", "Using two browsers", "Using two keyboards"], answer: 0 },
    { q: "What is a backup?", options: ["A copy of data kept for recovery", "A deleted file", "A browser", "A virus"], answer: 0 },
    { q: "Why should you log out on a shared computer?", options: ["To protect your account from others", "To increase volume", "To save electricity only", "To make the monitor brighter"], answer: 0 },
    { q: "What is a printer?", options: ["A device that produces printed output", "An input keyboard", "A web browser", "A storage folder"], answer: 0 },
    { q: "What is a scanner?", options: ["A device that converts physical documents/images into digital form", "A speaker", "A CPU", "A router"], answer: 0 },
    { q: "What is a monitor?", options: ["A screen that displays output", "A storage device", "A keyboard key", "A programming language"], answer: 0 },
    { q: "What is a keyboard?", options: ["An input device used to enter text and commands", "An output device", "A storage disk", "A network"], answer: 0 },
    { q: "What is a mouse?", options: ["A pointing input device", "A printer", "A storage device", "An operating system"], answer: 0 }
  ],


  // ==========================================================
  // HEALTH — 100 QUESTIONS
  // ==========================================================
  health: [

    { q: "What is health?", options: ["A state of physical, mental and social well-being", "Only absence of fever", "Only physical strength", "Only happiness"], answer: 0 },
    { q: "What is a balanced diet?", options: ["A diet containing needed nutrients in suitable amounts", "Only rice", "Only fruits", "Only protein"], answer: 0 },
    { q: "Which nutrient is a major source of energy?", options: ["Carbohydrate", "Vitamin", "Mineral", "Water"], answer: 0 },
    { q: "Which nutrient mainly builds and repairs body tissues?", options: ["Protein", "Carbohydrate", "Water", "Vitamin C"], answer: 0 },
    { q: "Which nutrient provides concentrated energy?", options: ["Fat", "Water", "Mineral", "Fibre only"], answer: 0 },
    { q: "Why are vitamins important?", options: ["They help regulate body functions", "They replace oxygen", "They build houses", "They are the only energy source"], answer: 0 },
    { q: "Why are minerals important?", options: ["They support many body functions and structures", "They replace all food", "They are only medicines", "They provide no function"], answer: 0 },
    { q: "Why is water essential?", options: ["It supports many body processes and prevents dehydration", "It only cools the skin", "It replaces all nutrients", "It is a vitamin"], answer: 0 },
    { q: "Which mineral is important for strong bones and teeth?", options: ["Calcium", "Iron", "Iodine", "Zinc only"], answer: 0 },
    { q: "Which mineral is needed to make haemoglobin?", options: ["Iron", "Calcium", "Iodine", "Sodium"], answer: 0 },

    { q: "Lack of iodine may cause:", options: ["Goitre", "Scurvy", "Rickets", "Night blindness"], answer: 0 },
    { q: "Vitamin A is important for:", options: ["Normal vision", "Blood clotting only", "Bone fracture only", "Hearing only"], answer: 0 },
    { q: "Vitamin D helps the body:", options: ["Use calcium for healthy bones", "Make sound", "Digest plastic", "Produce sweat only"], answer: 0 },
    { q: "Vitamin C helps support:", options: ["Healthy tissues and immune function", "Only eyesight", "Only bones", "Only hearing"], answer: 0 },
    { q: "Which food is a good source of protein?", options: ["Egg", "Sugar", "Salt", "Soft drink"], answer: 0 },
    { q: "Which food is rich in calcium?", options: ["Milk", "Candy", "Oil", "Soft drink"], answer: 0 },
    { q: "Which is a good source of vitamin C?", options: ["Orange", "Butter", "Salt", "Rice only"], answer: 0 },
    { q: "What is personal hygiene?", options: ["Practices that keep the body clean and healthy", "Only wearing expensive clothes", "Only exercise", "Only sleeping"], answer: 0 },
    { q: "How long should hands generally be washed with soap and water?", options: ["About 20 seconds", "2 seconds", "2 minutes only", "10 seconds"], answer: 0 },
    { q: "When should you wash your hands?", options: ["Before eating and after using the toilet", "Only once a week", "Only before sleeping", "Never if hands look clean"], answer: 0 },

    { q: "Why should teeth be brushed regularly?", options: ["To remove plaque and help prevent tooth decay", "To make teeth grow instantly", "To increase height", "To prevent sweating"], answer: 0 },
    { q: "How often is brushing teeth commonly recommended?", options: ["Twice a day", "Once a week", "Once a month", "Only when painful"], answer: 0 },
    { q: "Why should fingernails be kept clean and trimmed?", options: ["To reduce dirt and germs", "To make them heavier", "To increase appetite", "To improve eyesight"], answer: 0 },
    { q: "Why should clean clothes be worn?", options: ["To support cleanliness and reduce dirt/germs", "To increase temperature always", "To improve hearing", "To prevent all diseases"], answer: 0 },
    { q: "What should you do when coughing or sneezing?", options: ["Cover your mouth and nose with tissue or elbow", "Cough toward others", "Never cover it", "Share the tissue"], answer: 0 },
    { q: "Why is safe drinking water important?", options: ["It helps prevent water-borne diseases", "It makes food sweeter", "It replaces sleep", "It increases screen time"], answer: 0 },
    { q: "What is exercise?", options: ["Physical activity that improves fitness and health", "Only sleeping", "Only studying", "Only eating"], answer: 0 },
    { q: "Which activity improves cardiovascular fitness?", options: ["Running", "Watching TV", "Sleeping", "Reading only"], answer: 0 },
    { q: "Why should you warm up before exercise?", options: ["To prepare the body for activity and reduce injury risk", "To make exercise impossible", "To increase thirst only", "To stop blood flow"], answer: 0 },
    { q: "Why should you cool down after exercise?", options: ["To gradually return the body toward its resting state", "To stop breathing", "To increase injury", "To avoid water"], answer: 0 },

    { q: "Why is drinking water during physical activity important?", options: ["To help maintain hydration", "To replace oxygen", "To build bones instantly", "To prevent all illness"], answer: 0 },
    { q: "What is flexibility?", options: ["Ability of joints and muscles to move through a useful range", "Ability to run only", "Ability to sleep", "Ability to lift anything"], answer: 0 },
    { q: "What is good posture?", options: ["Keeping the body aligned in a healthy position", "Bending the body all day", "Standing on one foot always", "Sitting without support always"], answer: 0 },
    { q: "Why is regular exercise beneficial?", options: ["It supports physical fitness and overall health", "It removes the need for food", "It guarantees no illness", "It replaces sleep"], answer: 0 },
    { q: "Why is sleep important for students?", options: ["It supports growth, learning and recovery", "It stops the brain working", "It replaces exercise completely", "It removes the need for water"], answer: 0 },
    { q: "What is a healthy sleep habit?", options: ["Keeping a regular sleep schedule", "Using a phone all night", "Sleeping at random times every day", "Skipping sleep before exams"], answer: 0 },
    { q: "Why should screen time be balanced?", options: ["Excessive use can affect sleep, activity and well-being", "Screens always cause disease", "Screens replace food", "Screen time has no effect at all"], answer: 0 },
    { q: "What is mental health?", options: ["A person's emotional, psychological and social well-being", "Only physical strength", "Only absence of injury", "Only academic marks"], answer: 0 },
    { q: "What can help reduce everyday stress?", options: ["Relaxation and deep breathing", "Skipping meals", "Never sleeping", "Keeping worries secret always"], answer: 0 },
    { q: "What should you do if you feel overwhelmed?", options: ["Talk to a trusted adult or appropriate professional", "Ignore everyone forever", "Stop eating", "Avoid all help"], answer: 0 },

    { q: "What is deep breathing?", options: ["Slow, controlled breathing using the diaphragm and lungs", "Holding breath for a very long time", "Fast shouting", "Running while holding breath"], answer: 0 },
    { q: "What is a communicable disease?", options: ["A disease that can spread between people or through other agents", "A broken bone", "A vitamin deficiency only", "A genetic trait only"], answer: 0 },
    { q: "What is an infectious disease?", options: ["A disease caused by harmful organisms such as bacteria or viruses", "A sports injury", "A nutrient", "A healthy habit"], answer: 0 },
    { q: "Which disease can be spread by contaminated water?", options: ["Cholera", "Rickets", "Scurvy", "Asthma"], answer: 0 },
    { q: "Which disease is transmitted by certain mosquitoes?", options: ["Malaria", "Scurvy", "Diabetes", "Rickets"], answer: 0 },
    { q: "Dengue is commonly spread by:", options: ["Aedes mosquitoes", "Houseflies only", "Dogs", "Fish"], answer: 0 },
    { q: "How can mosquito breeding be reduced?", options: ["Remove stagnant water", "Store open water everywhere", "Leave containers full of water", "Avoid cleaning drains"], answer: 0 },
    { q: "What is vaccination?", options: ["A way to help the immune system develop protection against specific diseases", "A type of exercise", "A food group", "A sleeping method"], answer: 0 },
    { q: "What is an epidemic?", options: ["A disease occurrence above what is normally expected in a community or region", "A single headache", "A healthy habit", "A type of exercise"], answer: 0 },
    { q: "What is first aid?", options: ["Immediate basic care given before professional treatment", "A hospital surgery", "A long-term diet", "A school subject only"], answer: 0 },

    { q: "What should you do for a small cut?", options: ["Clean it and cover it with a clean dressing", "Put dirt on it", "Ignore heavy bleeding", "Rub it with chemicals"], answer: 0 },
    { q: "What should you do for severe bleeding?", options: ["Apply firm pressure and seek urgent medical help", "Let it continue", "Give random medicine", "Wash it for an hour only"], answer: 0 },
    { q: "What is the first action for a minor burn?", options: ["Cool it with clean running water", "Put ice directly for a long time", "Apply mud", "Burst blisters"], answer: 0 },
    { q: "What should you do if someone is unconscious and not breathing normally?", options: ["Call emergency help and begin appropriate CPR if trained", "Give food", "Leave them alone", "Make them stand"], answer: 0 },
    { q: "What is a fracture?", options: ["A break or crack in a bone", "A skin rash", "A headache", "A fever"], answer: 0 },
    { q: "What is a sprain?", options: ["An injury to a ligament around a joint", "A broken tooth", "A skin infection", "A stomach illness"], answer: 0 },
    { q: "What is a wound?", options: ["An injury involving a break or damage to body tissue", "A healthy muscle", "A vitamin", "A bone only"], answer: 0 },
    { q: "What is substance abuse?", options: ["Harmful or improper use of substances that can damage health", "Healthy eating", "Regular exercise", "Drinking water"], answer: 0 },
    { q: "What is nicotine?", options: ["An addictive substance found in tobacco", "A vitamin", "A mineral", "A protein"], answer: 0 },
    { q: "Smoking tobacco can harm:", options: ["The lungs and many other parts of the body", "Only hair", "Only nails", "Nothing"], answer: 0 },

    { q: "What is addiction?", options: ["A strong dependence on a substance or behavior that is difficult to control", "A normal meal", "A type of exercise", "A vitamin"], answer: 0 },
    { q: "What is a healthy response to peer pressure?", options: ["Say no and choose a safe alternative", "Always copy friends", "Hide the problem", "Try harmful substances"], answer: 0 },
    { q: "What is second-hand smoke?", options: ["Smoke breathed in by people near a smoker", "Smoke inside a factory only", "Water vapor", "Steam from food"], answer: 0 },
    { q: "Why is alcohol misuse dangerous?", options: ["It can impair judgment and harm health", "It always improves health", "It replaces sleep", "It prevents all disease"], answer: 0 },
    { q: "What is adolescence?", options: ["The period of development between childhood and adulthood", "The first year of life only", "Old age", "Infancy"], answer: 0 },
    { q: "What is reproductive health?", options: ["Well-being related to the reproductive system and its functions", "Only sports fitness", "Only eyesight", "Only digestion"], answer: 0 },
    { q: "Why is personal hygiene important during adolescence?", options: ["It helps manage body changes and reduce infection risk", "It stops all body changes", "It removes the need for food", "It prevents growth"], answer: 0 },
    { q: "Where should students seek reliable health information?", options: ["Trusted health professionals and reliable health sources", "Random rumors", "Unknown social media accounts only", "Unverified messages"], answer: 0 },
    { q: "What is community health?", options: ["Health conditions and services affecting people in a community", "Only one person's health", "Only hospital buildings", "Only sports"], answer: 0 },
    { q: "Why is sanitation important?", options: ["It helps prevent disease and keeps surroundings clean", "It increases pollution", "It creates stagnant water", "It removes clean water"], answer: 0 },

    { q: "How should household waste be managed?", options: ["Disposed of safely and separated where appropriate", "Thrown into rivers", "Burned everywhere", "Left on roads"], answer: 0 },
    { q: "What can stagnant water provide?", options: ["Breeding places for mosquitoes", "Clean drinking water automatically", "Fresh air", "Healthy food"], answer: 0 },
    { q: "What is air pollution?", options: ["Harmful substances in the air at levels that can affect health/environment", "Clean air", "Pure oxygen", "Rainfall"], answer: 0 },
    { q: "How can planting trees help the environment?", options: ["Trees can absorb carbon dioxide and help improve local environments", "Trees create plastic", "Trees increase smoke", "Trees remove all diseases"], answer: 0 },
    { q: "Which is a cleaner transport choice when practical?", options: ["Walking or cycling", "Leaving engines running", "Burning waste", "Using smoky vehicles for short trips"], answer: 0 },
    { q: "Why should garbage not be burned openly?", options: ["It can release harmful smoke and pollutants", "It makes air cleaner", "It produces drinking water", "It prevents all disease"], answer: 0 },
    { q: "What is a nutritious snack?", options: ["Fruit and nuts", "Only candy", "Only soft drinks", "Only chips"], answer: 0 },
    { q: "Why is dietary fibre useful?", options: ["It supports healthy digestion", "It replaces water", "It is a vitamin only", "It causes dehydration"], answer: 0 },
    { q: "What is dehydration?", options: ["A condition caused by losing more fluid than the body takes in", "Too much sleep", "A broken bone", "A vitamin deficiency only"], answer: 0 },
    { q: "A common sign of dehydration is:", options: ["Thirst and dark urine", "Improved hydration", "Stronger eyesight", "Lower need for water"], answer: 0 },

    { q: "Why should medicines be used responsibly?", options: ["Incorrect use can cause harm", "More medicine is always better", "Medicine replaces food", "Anyone can prescribe any medicine"], answer: 0 },
    { q: "What should you do before taking a medicine prescribed to you?", options: ["Follow the instructions of a qualified health professional", "Double the dose yourself", "Share it with friends", "Mix it with anything"], answer: 0 },
    { q: "Why is regular handwashing important?", options: ["It reduces the spread of many germs", "It causes disease", "It replaces vaccination", "It makes hands permanently sterile"], answer: 0 },
    { q: "What is a healthy lifestyle?", options: ["A pattern including balanced food, activity, sleep and healthy habits", "Only studying", "Only exercise", "Only dieting"], answer: 0 },
    { q: "Why should breakfast be nutritious?", options: ["It can provide energy and nutrients for the morning", "It prevents all illness", "It replaces lunch and dinner", "It removes the need for water"], answer: 0 },
    { q: "Why should fruits and vegetables be included in meals?", options: ["They provide vitamins, minerals and fibre", "They contain no nutrients", "They replace all protein", "They prevent the need for sleep"], answer: 0 },
    { q: "What is body mass index (BMI) used for?", options: ["A screening measure relating body mass to height", "Measuring blood pressure directly", "Measuring eyesight", "Measuring temperature"], answer: 0 },
    { q: "Why should health advice online be checked carefully?", options: ["Online information can be inaccurate or misleading", "Everything online is always correct", "Health facts never change", "Sources do not matter"], answer: 0 },
    { q: "What is empathy?", options: ["Understanding and caring about another person's feelings", "Ignoring others", "Winning every argument", "Avoiding communication"], answer: 0 },
    { q: "What is good communication?", options: ["Sharing information clearly and listening to others", "Shouting only", "Never listening", "Using rumors"], answer: 0 },

    { q: "Why are supportive friendships important?", options: ["They can provide social support and a sense of belonging", "They always solve every problem", "They replace professional help", "They remove the need for sleep"], answer: 0 },
    { q: "What is a healthy way to handle anger?", options: ["Pause, breathe and communicate calmly", "Hit someone", "Break things", "Keep escalating"], answer: 0 },
    { q: "Why is road safety important?", options: ["It helps prevent injuries and deaths", "It increases traffic risk", "It replaces first aid", "It is only for drivers"], answer: 0 },
    { q: "What should a pedestrian do before crossing a road?", options: ["Look carefully for traffic and cross safely", "Run without looking", "Use a phone while crossing", "Cross anywhere suddenly"], answer: 0 },
    { q: "Why should helmets be worn when riding a bicycle or motorcycle?", options: ["They help protect the head during crashes", "They increase speed", "They replace brakes", "They prevent all injuries"], answer: 0 },
    { q: "What is a safe drinking-water practice?", options: ["Use a clean, protected water source", "Drink from polluted rivers", "Share dirty cups", "Store water uncovered"], answer: 0 },
    { q: "Why should food be covered?", options: ["To protect it from contamination", "To increase germs", "To make it spoil faster", "To remove nutrients"], answer: 0 },
    { q: "What is food hygiene?", options: ["Practices that keep food safe and clean", "Only eating quickly", "Only cooking sweets", "Only storing water"], answer: 0 },
    { q: "Why should raw and cooked foods be handled carefully?", options: ["To reduce cross-contamination", "To mix germs", "To increase spoilage", "To remove protein"], answer: 0 },
    { q: "What is a nutritious source of iron?", options: ["Green leafy vegetables and legumes", "Only sugar", "Soft drinks", "Candy"], answer: 0 },

    { q: "Why is iron important?", options: ["It helps form haemoglobin and supports oxygen transport", "It makes bones transparent", "It replaces water", "It is only a vitamin"], answer: 0 },
    { q: "Why is calcium important during growth?", options: ["It supports bones and teeth", "It replaces protein", "It prevents all infections", "It is a source of oxygen"], answer: 0 },
    { q: "What is a healthy alternative to smoking?", options: ["Physical activity or another healthy hobby", "More cigarettes", "Chewing tobacco", "Breathing smoke"], answer: 0 },
    { q: "Why should tobacco products be avoided by young people?", options: ["They can cause addiction and harm developing bodies", "They improve lung health", "They increase fitness", "They are harmless"], answer: 0 },
    { q: "What is consent in a health and relationship context?", options: ["Clear and voluntary agreement", "Forced agreement", "Silence always meaning yes", "Agreement under pressure"], answer: 0 },
    { q: "Why should a young person respect personal boundaries?", options: ["It supports safety, dignity and healthy relationships", "It causes conflict always", "It removes communication", "It is only for adults"], answer: 0 },
    { q: "Why is clean air important?", options: ["It supports healthy breathing and reduces exposure to harmful pollutants", "It increases smoke", "It replaces food", "It causes dehydration"], answer: 0 },
    { q: "Why should classrooms be kept clean?", options: ["Clean surroundings support a healthier learning environment", "It increases germs", "It prevents learning", "It wastes all water"], answer: 0 },
    { q: "Why is enough physical activity important for students?", options: ["It supports healthy growth and fitness", "It replaces studying", "It removes the need for sleep", "It guarantees perfect health"], answer: 0 },
    { q: "Why is drinking enough safe water important?", options: ["It helps maintain normal body functions and hydration", "It replaces every nutrient", "It prevents every disease", "It replaces sleep"], answer: 0 }
  ]
};


// ============================================================
// DAILY QUIZ SYSTEM
// ============================================================

let selectedSubject = "english";
let dailyQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;


// ------------------------------------------------------------
// GET TODAY'S DATE IN NEPAL TIME
// ------------------------------------------------------------

function getNepalDate() {
  return new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Kathmandu"
  });
}


// ------------------------------------------------------------
// CREATE A NUMBER FROM TEXT
// ------------------------------------------------------------

function hashString(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}


// ------------------------------------------------------------
// SEEDED RANDOM
// Same date + subject = same 10 questions that day
// New Nepal date = new selection
// ------------------------------------------------------------

function seededRandom(seed) {
  let x = seed || 123456789;

  return function () {
    x += 0x6D2B79F5;

    let t = x;

    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}


// ------------------------------------------------------------
// SHUFFLE QUESTIONS
// ------------------------------------------------------------

function shuffleQuestions(array, seed) {
  const result = [...array];
  const random = seededRandom(seed);

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}


// ------------------------------------------------------------
// CREATE DAILY 10 QUESTIONS
// ------------------------------------------------------------

function createDailyQuestions(subject) {
  const bank = questionBanks[subject];

  if (!bank || bank.length < DAILY_TARGET) {
    console.error(
      `Subject "${subject}" does not have enough questions.`
    );

    return [];
  }

  const today = getNepalDate();

  const seed = hashString(
    today + "_" + subject
  );

  return shuffleQuestions(
    bank,
    seed
  ).slice(0, DAILY_TARGET);
}


// ------------------------------------------------------------
// STORAGE KEY
// Every subject has its own daily progress
// ------------------------------------------------------------

function getStorageKey(subject) {
  return "quizProgress_" +
    getNepalDate() +
    "_" +
    subject;
}


// ------------------------------------------------------------
// LOAD SAVED PROGRESS
// ------------------------------------------------------------

function loadProgress(subject) {
  try {
    const saved = localStorage.getItem(
      getStorageKey(subject)
    );

    if (!saved) {
      return {
        count: 0,
        score: 0
      };
    }

    const data = JSON.parse(saved);

    return {
      count: Number(data.count) || 0,
      score: Number(data.score) || 0
    };

  } catch (error) {

    console.error(
      "Could not load quiz progress:",
      error
    );

    return {
      count: 0,
      score: 0
    };
  }
}


// ------------------------------------------------------------
// SAVE PROGRESS
// ------------------------------------------------------------

function saveProgress() {
  try {
    localStorage.setItem(
      getStorageKey(selectedSubject),
      JSON.stringify({
        count: currentQuestionIndex,
        score: score
      })
    );

  } catch (error) {

    console.error(
      "Could not save quiz progress:",
      error
    );
  }
}


// ------------------------------------------------------------
// GET ELEMENTS SAFELY
// ------------------------------------------------------------

function getQuizElements() {

  return {
    quiz: document.getElementById("quiz"),
    submitBtn: document.getElementById("submitBtn"),
    result: document.getElementById("result"),
    subjectSelect: document.getElementById("subjectSelect"),
    quizSubject: document.getElementById("quizSubject"),
    quizDate: document.getElementById("quizDate"),
    currentCount: document.getElementById("currentCount"),
    targetComplete: document.getElementById("targetComplete"),
    retryBtn: document.getElementById("retryBtn")
  };
}


// ------------------------------------------------------------
// SHOW HEADER INFORMATION
// ------------------------------------------------------------

function updateQuizInfo() {

  const elements = getQuizElements();

  if (elements.quizSubject) {
    elements.quizSubject.textContent =
      "Subject: " +
      selectedSubject.charAt(0).toUpperCase() +
      selectedSubject.slice(1);
  }

  if (elements.quizDate) {
    elements.quizDate.textContent =
      "Date: " + getNepalDate();
  }

  if (elements.currentCount) {
    elements.currentCount.textContent =
      `Question: ${Math.min(currentQuestionIndex + 1, DAILY_TARGET)} / ${DAILY_TARGET}`;
  }
}


// ------------------------------------------------------------
// DISABLE ALL OPTIONS
// ------------------------------------------------------------

function disableOptions() {

  const options =
    document.querySelectorAll(
      'input[name="quizOption"]'
    );

  options.forEach(function (option) {
    option.disabled = true;
  });
}


// ------------------------------------------------------------
// SHOW CURRENT QUESTION
// ------------------------------------------------------------

function renderQuestion() {

  const elements = getQuizElements();

  if (!elements.quiz) {
    console.error(
      'Element with id="quiz" was not found.'
    );

    return;
  }

  if (
    currentQuestionIndex >= DAILY_TARGET ||
    !dailyQuestions[currentQuestionIndex]
  ) {
    finishQuiz();
    return;
  }

  answered = false;

  const question =
    dailyQuestions[currentQuestionIndex];

  let html = "";

  html += `
    <div class="quiz-question">
      <h3>
        ${currentQuestionIndex + 1}. ${question.q}
      </h3>
  `;

  question.options.forEach(function (option, index) {

    html += `
      <label class="quiz-option">
        <input
          type="radio"
          name="quizOption"
          value="${index}"
        >
        <span>${option}</span>
      </label>
    `;
  });

  html += `</div>`;

  elements.quiz.innerHTML = html;

  if (elements.result) {
    elements.result.innerHTML = "";
  }

  if (elements.submitBtn) {
    elements.submitBtn.textContent =
      "Submit Answer";

    elements.submitBtn.disabled = false;
  }

  updateQuizInfo();
}


// ------------------------------------------------------------
// FINISH QUIZ
// ------------------------------------------------------------

function finishQuiz() {

  const elements = getQuizElements();

  currentQuestionIndex = DAILY_TARGET;

  saveProgress();

  if (elements.quiz) {
    elements.quiz.innerHTML = "";
  }

  if (elements.submitBtn) {
    elements.submitBtn.disabled = true;
    elements.submitBtn.textContent =
      "Today's Quiz Complete";
  }

  if (elements.result) {
    elements.result.innerHTML = `
      <div class="quiz-complete">
        <h2>🎉 Today's Quiz Complete!</h2>

        <p>
          You completed all
          <strong>${DAILY_TARGET}</strong>
          questions.
        </p>

        <p>
          Score:
          <strong>${score} / ${DAILY_TARGET}</strong>
        </p>

        <p>
          You can continue again tomorrow.
        </p>
      </div>
    `;
  }

  if (elements.targetComplete) {
    elements.targetComplete.hidden = false;
  }

  // IMPORTANT:
  // Retry is disabled so the student cannot restart
  // and bypass the 10-question daily limit.

  if (elements.retryBtn) {
    elements.retryBtn.hidden = true;
  }

  updateQuizInfo();
}


// ------------------------------------------------------------
// SUBMIT / NEXT QUESTION
// ------------------------------------------------------------

function submitAnswer() {

  const elements = getQuizElements();

  if (answered) {

    currentQuestionIndex++;

    saveProgress();

    if (currentQuestionIndex >= DAILY_TARGET) {
      finishQuiz();
    } else {
      renderQuestion();
    }

    return;
  }

  const selected =
    document.querySelector(
      'input[name="quizOption"]:checked'
    );

  if (!selected) {

    if (elements.result) {
      elements.result.innerHTML = `
        <p>
          ⚠️ Please select an answer first.
        </p>
      `;
    }

    return;
  }

  const selectedAnswer =
    Number(selected.value);

  const question =
    dailyQuestions[currentQuestionIndex];

  const correctAnswer =
    question.answer;

  const isCorrect =
    selectedAnswer === correctAnswer;

  if (isCorrect) {
    score++;
  }

  answered = true;

  disableOptions();

  // Save progress immediately after answering.
  // This makes refresh-safe progress possible.

  saveProgress();

  if (elements.result) {

    if (isCorrect) {

      elements.result.innerHTML = `
        <div class="correct-answer">
          ✅ <strong>Correct!</strong>
        </div>
      `;

    } else {

      elements.result.innerHTML = `
        <div class="wrong-answer">
          ❌ <strong>Wrong!</strong>
          <br>
          Correct answer:
          <strong>
            ${question.options[correctAnswer]}
          </strong>
        </div>
      `;
    }
  }

  if (elements.submitBtn) {

    if (
      currentQuestionIndex ===
      DAILY_TARGET - 1
    ) {

      elements.submitBtn.textContent =
        "Finish Quiz";

    } else {

      elements.submitBtn.textContent =
        "Next Question";
    }
  }

  updateQuizInfo();
}


// ------------------------------------------------------------
// START / LOAD SELECTED SUBJECT
// ------------------------------------------------------------

function startQuiz(subject) {

  if (!questionBanks[subject]) {
    console.error(
      "Unknown subject:",
      subject
    );

    return;
  }

  selectedSubject = subject;

  const progress =
    loadProgress(selectedSubject);

  currentQuestionIndex =
    Math.min(
      progress.count,
      DAILY_TARGET
    );

  score =
    Math.min(
      progress.score,
      DAILY_TARGET
    );

  dailyQuestions =
    createDailyQuestions(
      selectedSubject
    );

  updateQuizInfo();

  if (
    currentQuestionIndex >=
    DAILY_TARGET
  ) {

    finishQuiz();

  } else {

    renderQuestion();
  }
}


// ------------------------------------------------------------
// CHANGE SUBJECT
// ------------------------------------------------------------

function handleSubjectChange() {

  const elements = getQuizElements();

  if (!elements.subjectSelect) {
    return;
  }

  const newSubject =
    elements.subjectSelect.value;

  startQuiz(newSubject);
}


// ------------------------------------------------------------
// INITIALIZE QUIZ
// ------------------------------------------------------------

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const elements =
      getQuizElements();

    // Subject selector exists in the current quiz.html.
    // If it exists, use its selected value.

    if (elements.subjectSelect) {

      selectedSubject =
        elements.subjectSelect.value ||
        "english";

      elements.subjectSelect.addEventListener(
        "change",
        handleSubjectChange
      );
    }

    // Submit button

    if (elements.submitBtn) {

      elements.submitBtn.addEventListener(
        "click",
        submitAnswer
      );
    }

    // Retry button intentionally does nothing
    // because retrying would bypass the daily limit.

    if (elements.retryBtn) {
      elements.retryBtn.hidden = true;
    }

    startQuiz(selectedSubject);
  }
);

import { Calendar, Flame, Home, Users, Star, Flower2 } from 'lucide-react';

export const POOJAS = [
  {
    id: 'satyanarayan',
    title: 'Satyanarayan Katha',
    description:
      "Bring prosperity and peace to your home with the holy narration of Lord Satyanarayan's story.",
    image:
      'https://images.unsplash.com/photo-1604928153523-3b5d91d14f9d?q=80&w=800&auto=format&fit=crop', // Placeholder, will use generated if available or stock
    duration: '2-3 Hours',
    price: '₹2,100',
  },
  {
    id: 'griha-pravesh',
    title: 'Griha Pravesh',
    description:
      'Auspicious ceremony for entering a new home to ensure happiness and ward off evil spirits.',
    image:
      'https://images.unsplash.com/photo-1582794543139-8ac92a900275?q=80&w=800&auto=format&fit=crop',
    duration: '3-4 Hours',
    price: '₹5,100',
  },
  {
    id: 'ganesh-pooja',
    title: 'Ganesh Pooja',
    description: 'Invoke Lord Ganesha, the remover of obstacles, before starting any new venture.',
    image:
      'https://images.unsplash.com/photo-1567591414240-e1365e0ae902?q=80&w=800&auto=format&fit=crop',
    duration: '1-2 Hours',
    price: '₹1,500',
  },
  {
    id: 'mahamrityunjaya',
    title: 'Mahamrityunjaya Jaap',
    description: 'Powerful chant for longevity, health, and protection from untimely death.',
    image:
      'https://images.unsplash.com/photo-1609206402287-483875988a6d?q=80&w=800&auto=format&fit=crop',
    duration: '4-5 Hours',
    price: '₹7,100',
  },
];
export const POOJAS_NEW = [
  {
    id: 1,
    name: 'Annaprashan Puja',
    category: 'Child Rituals & Sanskar',
    image: '/images/Annaprashan Puja.jpg',
    shortDesc: "A sacred first feeding ceremony marking a baby's transition to solid food.",
    fullDesc:
      "Annaprashan, also known as the 'First Feeding Ceremony,' is the seventh of the sixteen Vedic Shodasha Sanskars. It marks a significant milestone in a child's life when they are introduced to solid food for the first time, usually in the form of rice or kheer. This ritual is performed to seek blessings for the child's health, prosperity, and wisdom, ensuring a nourished and fulfilling life ahead.",
    duration: '2 - 3 Hours',
    price: '₹3,100',

    mantra: {
      text_sanskrit:
        'अन्नपतेऽन्नस्य नो देह्यनमीवस्य शुष्मिणः । प्रप्रदातारं तारिष ऊर्ज नो धेहि द्विपदे चतुष्पदे ॥',
      text_transliteration:
        'Annapate Annasya No Dehyanamivasya Shushminah | Prapradataram Tarisha Urjam No Dhehi Dvipade Chatushpade ||',
      meaning:
        'O Lord of Food, bless us with nourishing and disease-free food. Grant us strength and energy for all beings.',
    },

    benefits: [
      'Ensures the child’s physical growth and healthy development.',
      'Invokes purity and nourishment in the child’s lifelong diet.',
      'Strengthens digestive health by seeking blessings of Agni (digestive fire).',
      'Attracts prosperity and blessings of Maa Annapurna (Goddess of Food).',
      'Includes a symbolic ritual to predict the child’s future interests and tendencies.',
    ],

    procedure: [
      'Ganesha & Kuldevta Puja: Invocation of Lord Ganesha and family deity for an auspicious start.',
      'Havan: Sacred fire ritual to purify the environment and bless the child.',
      'Preparation of Kheer: Rice pudding is prepared in a silver or bronze vessel.',
      'First Feeding: The maternal uncle or grandfather feeds the child the first bite using a gold or silver spoon.',
      'Mantra Chanting: Priests chant Vedic mantras to sanctify the food.',
      'Game of Destiny: Objects like a book, gold, pen, and clay are placed to predict future inclinations.',
      'Tilak & Ashirwad: Applying tilak and seeking blessings from elders.',
      'Kanya Pujan: Feeding young girls as a tribute to the divine feminine.',
      'Aarti: Devotional songs to conclude the ceremony.',
      'Dana: Donation of food, clothes, or essentials to the needy or priest.',
    ],

    includes: [
      'Experienced Pandit for performing rituals',
      'Basic puja samagri (materials)',
      'Guidance for complete ceremony',
      'Mantra chanting and havan setup',
    ],

    materials: [
      'Rice (for kheer)',
      'Milk and sugar',
      'Silver or bronze vessel',
      'Gold or silver spoon',
      'Puja thali and samagri',
      'Fruits and flowers',
      'Havan kund and samidha',
      'Tilak (sandalwood/vermilion)',
    ],

    bestTime:
      'Typically performed when the baby is 6 months old (varies based on gender and family traditions). Auspicious dates are chosen based on the Hindu calendar.',

    faqs: [
      {
        question: 'When should Annaprashan Puja be performed?',
        answer:
          'It is usually performed when the baby is around 6 months old, depending on cultural traditions.',
      },
      {
        question: 'Who feeds the baby first during the ceremony?',
        answer: 'Traditionally, the maternal uncle (Mama) or grandfather feeds the first bite.',
      },
      {
        question: 'What food is given to the baby?',
        answer: 'Rice or kheer (sweet rice pudding) is commonly used as the first solid food.',
      },
      {
        question: 'Is the ceremony mandatory?',
        answer:
          'While not mandatory, it is considered an important cultural and spiritual milestone in Hindu tradition.',
      },
    ],

    tags: [
      'Annaprashan',
      'First Feeding Ceremony',
      'Baby Ritual',
      'Sanskar',
      'Child Puja',
      'Hindu Traditions',
    ],
  },
  {
    id: 2,
    name: 'Bajrang Baan Path',
    category: 'Protection & Strength',
    image: '/images/Bajrang Ban.jpg',
    shortDesc: 'A powerful Hanuman path to remove fear, enemies, and life obstacles.',
    fullDesc:
      "Bajrang Baan is a highly powerful devotional hymn dedicated to Lord Hanuman, composed by Saint Tulsidas. Known as a 'Baan' (arrow), it is believed to directly invoke Lord Hanuman’s divine intervention. This path is especially performed during times of fear, crisis, or when facing seemingly impossible obstacles, offering protection, courage, and strength.",

    duration: '45 - 90 Minutes',
    price: '₹1,100',

    mantra: {
      text_sanskrit: 'ॐ हनुमते नमः ॥ जय हनुमंत संत हितकारी, सुन लीजै प्रभु अरज हमारी ॥',
      text_transliteration:
        'Om Hanumate Namah || Jai Hanumant Sant Hitkari, Sun Lijai Prabhu Araj Hamari ||',
      meaning:
        'Salutations to Lord Hanuman. O protector of devotees, kindly listen to our prayers and bless us with strength and protection.',
    },

    benefits: [
      'Eliminates fear of negative energies, spirits, and unknown threats.',
      'Provides protection from enemies and harmful intentions.',
      'Helps in overcoming major life obstacles and challenges.',
      'Boosts self-confidence, courage, and mental strength.',
      'Offers immediate divine support during crises or difficult situations.',
    ],

    procedure: [
      'Purification: Take a bath and wear clean red or orange clothes.',
      'Sankalp: Take a vow by stating your wish or problem while holding water.',
      'Lighting the Lamp: Light a diya with jasmine oil (Chameli ka Tel) or ghee.',
      'Asana: Sit on a red woollen mat facing East or North direction.',
      'Ganesha & Guru Puja: Begin by remembering Lord Ganesha and your Guru.',
      'Hanuman Pujan: Offer sindoor, flowers, and fruits to Lord Hanuman.',
      'Recitation: Chant the Bajrang Baan with full devotion (1, 7, 11, or 21 times).',
      'Bhog: Offer jaggery (gur) and roasted grams (chana) as prasad.',
      'Aarti: Perform Hanuman ji’s aarti to conclude.',
      'Forgiveness: Seek forgiveness for any mistakes during the ritual.',
    ],

    includes: [
      'Experienced Pandit for guided recitation',
      'Basic puja samagri',
      'Hanuman pujan assistance',
      'Guidance for correct chanting procedure',
    ],

    materials: [
      'Hanuman idol or picture',
      'Sindoor (vermilion)',
      'Red flowers',
      'Jaggery (gur) and chana',
      'Diya (lamp)',
      'Jasmine oil or ghee',
      'Red woollen aasan',
      'Incense sticks',
    ],

    bestTime:
      'Tuesdays and Saturdays are considered highly auspicious for Bajrang Baan Path. It is also performed during times of distress or urgent need.',

    faqs: [
      {
        question: 'How many times should Bajrang Baan be recited?',
        answer:
          'It is commonly recited 1, 7, 11, or 21 times depending on the devotee’s intent and situation.',
      },
      {
        question: 'Can this path be done at home?',
        answer: 'Yes, it can be performed at home with proper devotion and basic rituals.',
      },
      {
        question: 'Is Bajrang Baan powerful?',
        answer:
          'Yes, it is considered extremely powerful and should be recited with sincerity and respect.',
      },
      {
        question: 'What should be offered to Lord Hanuman?',
        answer: 'Sindoor, red flowers, jaggery, and roasted grams are commonly offered.',
      },
    ],

    tags: [
      'Bajrang Baan',
      'Hanuman Puja',
      'Protection',
      'Remove Fear',
      'Obstacle Removal',
      'Spiritual Strength',
    ],
  },
  {
    id: 3,
    name: 'Bhoomi Puja',
    category: 'Property & Construction',
    image: '/images/Bhoomi Pujan.jpg',
    shortDesc:
      'Sacred ritual performed before construction to seek blessings of Mother Earth and Vastu Purush.',
    fullDesc:
      'Bhoomi Puja is a sacred Hindu ritual performed before beginning any construction activity on land. It is dedicated to Vastu Purush (the deity of directions) and Maa Bhoomi (Mother Earth) to seek permission and blessings before disturbing the earth. This puja ensures harmony with natural energies, removes Vastu doshas, and brings prosperity, safety, and success to the construction and its future occupants.',

    duration: '2 - 4 Hours',
    price: '₹4,500',

    mantra: {
      text_sanskrit: 'ॐ वसुधायै विद्महे मेदिन्यै धीमहि तन्नो भूमिः प्रचोदयात् ॥',
      text_transliteration: 'Om Vasudhayai Vidmahe Medinyai Dhimahi Tanno Bhumih Prachodayat ||',
      meaning:
        'We meditate upon Mother Earth (Bhoomi Devi), may she inspire and bless us with stability, prosperity, and well-being.',
    },

    benefits: [
      'Seeks permission and forgiveness from Mother Earth before construction.',
      'Removes Vastu Dosha and aligns the land with positive energies.',
      'Ensures smooth construction without delays, accidents, or financial issues.',
      'Brings prosperity, health, and happiness to future occupants.',
      'Protects the site from negative energies and natural disturbances.',
    ],

    procedure: [
      'Selection of Spot: The North-East (Ishanya) corner of the plot is cleaned and chosen for the ritual.',
      'Sankalp: A vow is taken to complete the construction with purity and divine blessings.',
      'Ganesha Puja: Lord Ganesha is worshipped to remove obstacles.',
      'Shuddhikaran: The land is purified using Ganga Jal and mantra chanting.',
      'Bhoomi Pujan: Offerings of flowers, rice, and incense are made to Mother Earth.',
      'Vastu Purush Puja: Worship of the Vastu deity to ensure stability and balance.',
      'Digging the First Pit: The first excavation is done at an auspicious muhurat.',
      'Laying Foundation Stone: The first brick (Shila) is placed with prayers.',
      'Balidanam (Offering): Fruits, sweets, or symbolic offerings are made to appease energies.',
      'Aarti & Prasad: Ritual concludes with aarti and distribution of prasad.',
    ],

    includes: [
      'Experienced Pandit for Bhoomi Puja',
      'Complete puja samagri',
      'Vastu consultation basics',
      'Havan setup and mantra chanting guidance',
    ],

    materials: [
      'Flowers and garlands',
      'Rice and turmeric',
      'Coconut and kalash',
      'Ganga Jal',
      'Bricks or foundation stone',
      'Fruits and sweets',
      'Incense sticks and diya',
      'Havan samagri',
    ],

    bestTime:
      'Performed on an auspicious muhurat as per Vedic astrology, preferably during Shubh days avoiding Rahu Kaal. Morning hours are generally considered best.',

    faqs: [
      {
        question: 'When should Bhoomi Puja be performed?',
        answer:
          'It should be done before starting any construction, on an auspicious date and time suggested by a priest.',
      },
      {
        question: 'Which direction is ideal for the ritual?',
        answer: 'The North-East (Ishanya) corner of the plot is considered most auspicious.',
      },
      {
        question: 'Is Bhoomi Puja necessary?',
        answer:
          'While not mandatory, it is highly recommended to ensure positive energy and smooth construction.',
      },
      {
        question: 'Who performs the first digging?',
        answer: 'Usually, the property owner or head of the family initiates the first digging.',
      },
    ],

    tags: [
      'Bhoomi Puja',
      'Construction Ritual',
      'Vastu Puja',
      'Property Puja',
      'Foundation Ceremony',
      'Land Blessing',
    ],
  },
  {
    id: 4,
    name: 'Engagement Puja (Sagai/Roka)',
    category: 'Marriage & Relationships',
    image: '/images/Roka Ceremony (Engagement).jpg',
    shortDesc:
      'Sacred ceremony marking the formal commitment between two individuals and families.',
    fullDesc:
      'Engagement Puja, also known as Sagai or Roka, is a sacred Hindu ceremony that marks the formal commitment between two individuals and their families. It signifies the beginning of the marital journey and is performed to seek divine blessings for a harmonious, stable, and loving future. This ritual ensures that the union starts with positivity, spiritual grace, and mutual respect between families.',

    duration: '2 - 3 Hours',
    price: '₹3,500',

    mantra: {
      text_sanskrit:
        'ॐ स्वस्ति न इंद्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः । स्वस्ति नस्तार्थ्यो अरिष्टनेमिः स्वस्ति नो बृहस्पतिर्दधातु ॥',
      text_transliteration:
        'Om Swasti Na Indro Vriddhashravah Swasti Nah Pusha Vishvavedah | Swasti Nastarkshyo Arishtanemih Swasti No Brihaspatirdadhatu ||',
      meaning:
        'May Indra bless us with strength, may Pusha (the nourisher) grant us knowledge, may Garuda protect us, and may Brihaspati bless us with wisdom and prosperity.',
    },

    benefits: [
      'Seeks divine blessings for a successful and harmonious relationship.',
      'Removes obstacles in wedding preparations and future life.',
      'Strengthens the bond and understanding between both families.',
      'Balances planetary influences for better compatibility.',
      'Invites prosperity, happiness, and emotional well-being for the couple.',
    ],

    procedure: [
      'Ganesha Puja: Worship Lord Ganesha to remove obstacles from the new beginning.',
      'Sankalp: A formal vow by the couple and families to honor the alliance.',
      'Vagdan (Oral Agreement): Official declaration and acceptance of the relationship.',
      'Kalash Sthapana: Establishing a sacred pot representing divine presence.',
      'Navagraha Pujan: Worship of nine planets for peace and harmony.',
      'Exchange of Tilak: Applying vermillion or sandalwood paste on foreheads.',
      'Ring Ceremony: Exchange of rings symbolizing eternal love and commitment.',
      'Vastra & Jewelry Offering: Exchange of gifts, clothes, and jewelry between families.',
      'Ashirwad (Blessings): Elders bless the couple for a happy and prosperous life.',
      'Aarti & Prasad: Concluding the ceremony with prayers and distribution of sweets.',
    ],

    includes: [
      'Experienced Pandit for ceremony',
      'Complete puja samagri',
      'Guidance for rituals and ring ceremony',
      'Navagraha pujan setup',
    ],

    materials: [
      'Kalash and coconut',
      'Flowers and garlands',
      'Tilak (kumkum/sandalwood)',
      'Rings for ceremony',
      'Fruits and मिठाई (sweets)',
      'Clothes and gift items',
      'Incense sticks and diya',
      'Puja thali',
    ],

    bestTime:
      'Performed on an auspicious muhurat selected by a priest, typically before the wedding. Avoid Rahu Kaal and inauspicious timings.',

    faqs: [
      {
        question: 'Is Engagement Puja necessary before marriage?',
        answer:
          'While not mandatory, it is considered highly auspicious and helps begin the journey with divine blessings.',
      },
      {
        question: 'What is the difference between Roka and Sagai?',
        answer:
          'Roka signifies the initial agreement between families, while Sagai (engagement) includes ring exchange and formal ceremony.',
      },
      {
        question: 'Can this puja be done at home?',
        answer: 'Yes, it is commonly performed at home, banquet halls, or temples.',
      },
      {
        question: 'What is the significance of the ring ceremony?',
        answer: 'It symbolizes commitment, trust, and the beginning of a lifelong bond.',
      },
    ],

    tags: [
      'Engagement Puja',
      'Sagai Ceremony',
      'Roka Ritual',
      'Marriage Ritual',
      'Couple Ceremony',
      'Wedding Preparation',
    ],
  },
];

export const PANDITS = [
  {
    id: 1,
    name: 'Pandit Ram Krishna',
    experience: '15 Years',
    location: 'Varanasi',
    specialty: ['Vedic Rituals', 'Griha Pravesh'],
    rating: 4.9,
    reviews: 124,
    languages: ['Hindi', 'Sanskrit', 'English'],
    image: 'pandit1', // Will map to generated image
  },
  {
    id: 2,
    name: 'Acharya Sharma Ji',
    experience: '22 Years',
    location: 'Haridwar',
    specialty: ['Wedding', 'Kundali Milan'],
    rating: 5.0,
    reviews: 210,
    languages: ['Hindi', 'Sanskrit'],
    image: 'pandit2',
  },
  {
    id: 3,
    name: 'Shastri Vikram Bhatt',
    experience: '8 Years',
    location: 'Mumbai',
    specialty: ['Ganesh Pooja', 'Office Opening'],
    rating: 4.7,
    reviews: 85,
    languages: ['Hindi', 'Marathi', 'English'],
    image: 'pandit3',
  },
];

export const ITEMS = [
  {
    id: 1,
    name: 'Complete Havan Kit',
    price: '₹1,200',
    image: 'item1',
  },
  {
    id: 2,
    name: 'Premium Pooja Thali',
    price: '₹2,500',
    image: 'item2',
  },
];

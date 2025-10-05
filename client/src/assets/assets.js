import logo from './logo.png'
import sample_cover from './sample_cover.jpg'
import sample_profile from './sample_profile.jpg'
import bgImage from './bgImage.png'
import group_users from './group_users.png'
import { Home, UsersRound, Search, UserIcon, Link2, Store, NotebookPen, LineChart} from 'lucide-react'
import sponsored_img from './sponsored_img.png'
import group_youth from './group_youth.jpg'


export const bagImage = import.meta.glob('./bags/*.{png,jpg,jpeg,svg}', { eager: true }); 
export const jollery = import.meta.glob('./jollery/*.{png,jpg,jpeg,svg}', { eager: true }); 
export const shoes= import.meta.glob('./choes/*.{png,jpg,jpeg,svg}', { eager: true }); 
export const menDress = import.meta.glob('./menDress/*.{png,jpg,jpeg,svg}', { eager: true }); 
export const womenDress = import.meta.glob('./womenDress/*.{png,jpg,jpeg,svg}', { eager: true }); 
export const watch = import.meta.glob('./watch/*.{png,jpg,jpeg,svg}', { eager: true });
export const project = import.meta.glob('./projects/*.{png,jpg,jpeg,svg,avif}', { eager: true });


const bagImages = Object.values(bagImage).map(img => img.default || img);
const jolleryImages = Object.values(jollery).map(img => img.default || img);
const shoesImages = Object.values(shoes).map(img => img.default || img);
const menDressImages = Object.values(menDress).map(img => img.default || img);
const womenDressImages = Object.values(womenDress).map(img => img.default || img);
const watchImages = Object.values(watch).map(img => img.default || img);
const projectImages = Object.values(project).map(img => img.default || img);

export const assets = {
    logo,
    sample_cover,
    sample_profile,
    bgImage,
    group_users,
    group_youth,
    sponsored_img
}

export const menuItemsData = [
    { to: '/', label: 'Home', Icon: Home },
    { to: '/messages', label: 'Relations', Icon: UsersRound},
    { to: '/stores', label: 'Stores', Icon: Store },
    { to: '/project', label: 'Project', Icon: NotebookPen},
    { to: '/finance', label: 'Finance', Icon: LineChart}, 
    { to: '/connections', label: 'Connections', Icon: Link2},
    { to: '/discover', label: 'Discover', Icon: Search },
    { to: '/profile', label: 'Profile', Icon: UserIcon },
];

export const dummyUserData = {
    "_id": "user_2zdFoZib5lNr614LgkONdD8WG32",
    "email": "admin@example.com",
    "full_name": "John Warren",
    "username": "john_warren",
    "bio": "🌍 Dreamer | 📚 Learner | 🚀 Doer\r\nExploring life one step at a time.\r\n✨ Staying curious. Creating with purpose.",
    "profile_picture": sample_profile,
    "cover_photo": sample_cover,
    "location": "New York, NY",
    "followers": ["user_2", "user_3"],
    "following": ["user_2", "user_3"],
    "connections": ["user_2", "user_3"],
    "posts": [],
    "is_verified": true,
    "createdAt": "2025-09-02T09:26:59.231Z",
    "updatedAt": "2025-09-02T06:56:50.017Z",
}

const dummyUser2Data = {
    ...dummyUserData,
    _id: "user_2",
    username: "Richard Hendricks",
    full_name: "Richard Hendricks",
    profile_picture: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
}

const dummyUser3Data = {
    ...dummyUserData,
    _id: "user_3",
    username: "alexa_james",
    full_name: "Alexa james",
    profile_picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
}

const dummyUser4Data = {
    ...dummyUserData,
    _id: "user_4",
    username: "alex_janie",
    full_name: "Alex janies",
    profile_picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
}

export const dummyStoriesData = [
    {
        "_id": "68833d466e4b42b685068860",
        "user": dummyUserData,
        "content": "📌 This isn't the story I wanted to tell… not yet. But if you're reading this, know that something interesting is in motion 🔄. The next post will make more sense 🧩.",
        "media_url": "",
        "media_type": "text",
        "background_color": "#4f46e5",
        "createdAt": "2025-09-02T08:16:06.958Z",
        "updatedAt": "2025-09-02T08:16:06.958Z",
    },
    {
        "_id": "688340046e4b42b685068a73",
        "user": dummyUserData,
        "content": "",
        "media_url": "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
        "media_type": "image",
        "background_color": "#4f46e5",
        "createdAt": "2025-09-02T08:27:48.134Z",
        "updatedAt": "2025-09-02T08:27:48.134Z",
    },
    {
        "_id": "68833fe96e4b42b685068a5e",
        "user": dummyUserData,
        "content": "",
        "media_url": "https://videos.pexels.com/video-files/14447442/14447442-hd_1080_1920_30fps.mp4",
        "media_type": "video",
        "background_color": "#4f46e5",
        "createdAt": "2025-09-02T08:27:21.289Z",
        "updatedAt": "2025-09-02T08:27:21.289Z",
    },
    {
        "_id": "68833e136e4b42b685068937",
        "user": dummyUserData,
        "content": "",
        "media_url": "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
        "media_type": "image",
        "background_color": "#4f46e5",
        "createdAt": "2025-09-02T08:19:31.080Z",
        "updatedAt": "2025-09-02T08:19:31.080Z",
    },
    {
        "_id": "68833d706e4b42b685068875",
        "user": dummyUserData,
        "content": "🤫 Not every moment needs to be loud. Sometimes, the best things happen in silence — in drafts 📝, in progress 🧪, in planning 📊. That's where I am right now.",
        "media_url": "",
        "media_type": "text",
        "background_color": "#4f46e5",
        "createdAt": "2025-09-02T08:16:48.617Z",
        "updatedAt": "2025-09-02T08:16:48.617Z",
    },
    {
        "_id": "68833c9e6e4b42b6850687e7",
        "user": dummyUserData,
        "content": "✨ Something meaningful is on the way. I'm working behind the scenes 🛠️ to bring it all together. This space is just the beginning 🌱. Stay tuned 👀.",
        "media_url": "",
        "media_type": "text",
        "background_color": "#4f46e5",
        "createdAt": "2025-09-02T08:13:18.111Z",
        "updatedAt": "2025-09-02T08:13:18.111Z",
    }
]


export const dummyPostsData = [
    {
        "_id": "68773e977db16954a783839c",
        "user": dummyUserData,
        "content": "We're a small #team with a big vision — working day and night to turn dreams into products, and #products into something people love.",
        "image_urls": [group_youth],
        "post_type": "text_with_image",
        "likes_count": [],
        "createdAt": "2025-09-04T05:54:31.191Z",
        "updatedAt": "2025-09-04T05:54:31.191Z",
    },
    {
        "_id": "686e6d0407845749500c24cd",
        "user": dummyUserData,
        "content": "Unlock your potential—every small step counts. Stay consistent, stay focused, and trust the process. Growth takes time, but every day is a new chance to be better than yesterday. 🌱✨\r\n\r\n#Motivation #GrowthMindset #DailyInspiration #StayFocused #LevelUp #PositiveVibes #KeepGoing #SelfImprovement #MindsetMatters #SuccessJourney",
        "image_urls": [],
        "post_type": "text",
        "likes_count": [],
        "createdAt": "2025-09-03T13:22:12.601Z",
        "updatedAt": "2025-09-03T13:22:12.601Z",
    },
    {
        "_id": "686e6b21de877d29cf02e2a7",
        "user": dummyUserData,
        "content": "This is a sample paragraph with some #hashtags like #socialmedia and #marketing. Let's find them!",
        "image_urls": ["https://www.youtube.com/watch?v=3i1OB6wKYms"],
        "post_type": "video", 
        "likes_count": [],
        "createdAt": "2025-09-03T13:14:09.144Z",
        "updatedAt": "2025-09-03T13:14:09.144Z",
    },
    {
        "_id": "686e3e47ba0cf0fecba19947",
        "user": dummyUserData,
        "content": "",
        "image_urls": [
            "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg"
        ],
        "post_type": "image",
        "likes_count": [
            "user_2zdJbcAqiOX9jq2DIueBRQn0lMt"
        ],
        "createdAt": "2025-09-02T10:02:47.213Z",
        "updatedAt": "2025-09-02T10:09:37.075Z",
    },
    {
        "_id": "686e39e86e0585e9e2e58dd3",
        "user": dummyUserData,
        "content": "Finally , got the car !",
        "image_urls": [
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
        ],
        "post_type": "text_with_image",
        "likes_count": [],
        "createdAt": "2025-09-02T09:44:08.626Z",
        "updatedAt": "2025-09-02T09:44:08.626Z",
    },
    {
        "_id": "686e361389841ba9f2633201",
        "user": dummyUserData,
        "content": "Hello, Everyone this is my first Post",
        "image_urls": ["https://www.youtube.com/watch?v=uFgNbl8nOTs"],
        "post_type": "video",
        "likes_count": [],
        "createdAt": "2025-09-02T09:27:47.529Z",
        "updatedAt": "2025-09-02T09:27:47.529Z",
    }
]

export const dummyProductsData = [
    {
      "_id": "prod_001",
      "user": dummyUserData,
      "name": "Best Jollery",
      "description": "High quality jollery for you.",
      "price": 59.99,
      "image_urls": [jolleryImages[0], jolleryImages[3]],
      "category": "Electronics",
      "stock": 25,
      "likes_count": [],
      "createdAt": "2025-09-01T09:15:00.000Z",
    },
    {
      "_id": "prod_002",
      "user": dummyUserData,
      "name": "Bags",
      "description": "Beautifull Bags for Men and Women.",
      "price": 129.99,
      "image_urls": [bagImages[5], bagImages[0], bagImages[9], bagImages[6]],
      "category": "Wearables",
      "stock": 40,
      "likes_count": [],
      "createdAt": "2025-09-02T12:30:00.000Z",
    },
    {
      "_id": "prod_003",
      "user": dummyUserData,
      "name": "Running Shoes",
      "description": "Lightweight running shoes designed for speed and comfort.",
      "price": 74.50,
      "image_urls": [shoesImages[1], shoesImages[9], shoesImages[7], shoesImages[10]],
      "category": "Fashion",
      "stock": 60,
      "likes_count": [],
      "createdAt": "2025-09-03T14:20:00.000Z",
    },
    {
      "_id": "prod_004",
      "user": dummyUserData,
      "name": "Men Dresses",
      "description": "Beautiful men dresses for comfort and fashion.",
      "price": 1499.00,
      "image_urls": [menDressImages[1], menDressImages[2], menDressImages[3], menDressImages[4]],
      "category": "Electronics",
      "stock": 10,
      "likes_count": [],
      "createdAt": "2025-09-04T10:10:00.000Z",
    },
    {
      "_id": "prod_005",
      "user": dummyUserData,
      "name": "Watches",
      "description": "Beautifull Watches for men and women around the world.",
      "price": 89.00,
      "image_urls": [watchImages[0], watchImages[1], watchImages[2], watchImages[3]],
      "category": "Home Appliances",
      "stock": 35,
      "likes_count": [],
      "createdAt": "2025-09-05T08:45:00.000Z",
    },
    {
      "_id": "prod_006",
      "user": dummyUserData,
      "name": "women Dresses",
      "description": "The Best African women dresses for comfort and fashion.",
      "price": 39.99,
      "image_urls": [womenDressImages[0], womenDressImages[7], womenDressImages[2], womenDressImages[3]],
      "category": "Electronics",
      "stock": 50,
      "likes_count": [],
      "createdAt": "2025-09-06T11:00:00.000Z",
    }
  ];
  
  export const dummyFinanceData = {
    incomes: [
      {
        _id: "inc_001",
        source: "Salary",
        amount: 450000, // en FCFA
        date: "2025-09-01",
        category: "Work"
      },
      {
        _id: "inc_002",
        source: "Business Online",
        amount: 120000,
        date: "2025-09-05",
        category: "Business"
      },
      {
        _id: "inc_003",
        source: "Investments",
        amount: 80000,
        date: "2025-09-10",
        category: "Finance"
      },
      {
        _id: "inc_004",
        source: "Gifts",
        amount: 20000,
        date: "2025-09-10",
        category: "Friends & Family"
      }
    ],
    expenses: [
      {
        _id: "exp_001",
        title: "House Rent",
        amount: 150000,
        increase:20000,
        date: "2025-09-02",
        category: "Logement"
      },
      {
        _id: "exp_002",
        title: "Food Shoping",
        amount: 60000,
        increase:10000,
        date: "2025-09-04",
        category: "Nourriture"
      },
      {
        _id: "exp_003",
        title: "Transport",
        amount: 25000,
        increase:-5000,
        date: "2025-09-06",
        category: "Transport"
      },
      {
        _id: "exp_004",
        title: "Hobbies",
        amount: 30000,
        increase:-5000,
        date: "2025-09-08",
        category: "Divertissement"
      },
      {
        _id: "exp_005",
        title: "Bills (Elect, Watter, Int)",
        amount: 45000,
        increase:0,
        date: "2025-09-09",
        category: "Charges fixes"
      }
    ],
    savings: [
      {
        _id: "sav_001",
        goal: "Emergency Fund",
        targetAmount: 500000,
        currentAmount: 250000,
        dueDate: "2025-12-31"
      },
      {
        _id: "sav_002",
        goal: "Travel Project",
        targetAmount: 1000000,
        currentAmount: 400000,
        dueDate: "2026-06-01"
      }
    ],
    investments: [
      {
        _id: "inv_001",
        type: "Crypto",
        asset: "Bitcoin",
        amountInvested: 200000,
        currentValue: 350000,
        date: "2025-07-01"
      },
      {
        _id: "inv_002",
        type: "Sotck Exchange",
        asset: "Tesla",
        amountInvested: 150000,
        currentValue: 180000,
        date: "2025-08-15"
      }
    ]
  };

  export const dummyProjectsData = [
    {
      _id: "proj_001",
      title: "Projet d'immigration en Allemagne",
      description: "Préparer tous les documents, suivre les cours d'allemand et organiser le départ.",
      status: "En cours",
      deadline: "2026-01-15",
      picture: projectImages[7],
      progress: 45, // %
      tasks: [
        { id: "task_001", title: "Inscription aux cours d’allemand", done: true },
        { id: "task_002", title: "Passage du TestDaF", done: false },
        { id: "task_003", title: "Constitution du dossier d'immigration", done: false },
        { id: "task_004", title: "Réservation du billet d'avion", done: false },
      ]
    },
    {
      _id: "proj_002",
      title: "Création d'une application mobile",
      description: "Développer et lancer une application sociale pour connecter les jeunes investisseurs.",
      status: "En cours",
      deadline: "2025-12-01",
      picture: projectImages[3],
      progress: 30,
      tasks: [
        { id: "task_005", title: "Conception UI/UX", done: true },
        { id: "task_006", title: "Développement backend", done: false },
        { id: "task_007", title: "Développement frontend", done: false },
        { id: "task_008", title: "Phase de test", done: false },
      ]
    },
    {
      _id: "proj_003",
      title: "Apprentissage du développement web",
      description: "Suivre une formation complète en React, Node.js et bases de données.",
      status: "En cours",
      deadline: "2025-11-30",
      picture: projectImages[13],
      progress: 60,
      tasks: [
        { id: "task_009", title: "Maîtriser HTML/CSS/JS", done: true },
        { id: "task_010", title: "Apprendre React", done: true },
        { id: "task_011", title: "Apprendre Node.js", done: false },
        { id: "task_012", title: "Projet pratique final", done: false },
      ]
    },
    {
      _id: "proj_004",
      title: "Projet d'épargne pour une voiture",
      description: "Mettre de côté chaque mois un montant fixe pour acheter une voiture d'ici 2 ans.",
      status: "Planifié",
      deadline: "2027-01-01",
      picture: projectImages[1],
      progress: 10,
      tasks: [
        { id: "task_013", title: "Définir le budget", done: true },
        { id: "task_014", title: "Ouvrir un compte épargne dédié", done: false },
        { id: "task_015", title: "Mettre en place des versements automatiques", done: false },
      ]
    },
    {
      _id: "proj_005",
      title: "Organisation d'un mariage",
      description: "Préparer tous les aspects logistiques et financiers du mariage.",
      status: "En cours",
      deadline: "2026-06-10",
      picture: projectImages[0],
      progress: 20,
      tasks: [
        { id: "task_016", title: "Réserver la salle", done: true },
        { id: "task_017", title: "Engager un traiteur", done: false },
        { id: "task_018", title: "Préparer la liste des invités", done: false },
        { id: "task_019", title: "Choisir la décoration", done: false },
      ]
    }
  ];
  


export const dummyRecentMessagesData = [
    {
        "_id": "68833af618623d2de81b5381",
        "from_user_id": dummyUser2Data,
        "to_user_id": dummyUserData,
        "text": "I seen your profile",
        "message_type": "text",
        "media_url": "",
        "seen": true,
        "createdAt": "2025-09-02T08:06:14.436Z",
        "updatedAt": "2025-09-02T08:47:47.768Z",
    },
    {
        "_id": "6878cc3c17a54e4d3748012f",
        "from_user_id": dummyUserData,
        "to_user_id": dummyUserData,
        "text": "This is a Samsung Tablet",
        "message_type": "text",
        "media_url": "",
        "createdAt": "2025-09-03T10:11:08.437Z",
        "updatedAt": "2025-09-02T08:07:11.893Z",
        "seen": true
    },
    {
        "_id": "686fb66c7f0dcbff63b239e7",
        "from_user_id": dummyUser3Data,
        "to_user_id": dummyUserData,
        "text": "how are you",
        "message_type": "text",
        "media_url": "",
        "createdAt": "2025-09-02T12:47:40.510Z",
        "updatedAt": "2025-09-02T12:47:40.510Z",
        "seen": false
    }
]

export const dummyMessagesData = [
    {
        "_id": "6878cc3217a54e4d37480122",
        "from_user_id": "user_2zwZSCMRXQ9GaEEVLgm6akQo96i",
        "to_user_id": "user_2zdFoZib5lNr614LgkONdD8WG32",
        "text": "",
        "message_type": "image",
        "media_url": "https://images.pexels.com/photos/106341/pexels-photo-106341.jpeg",
        "createdAt": "2025-09-03T10:10:58.524Z",
        "updatedAt": "2025-09-04T10:43:50.346Z",
        "seen": true
    },
    {
        "_id": "6878cc3c17a54e4d3748012f",
        "from_user_id": "user_2zwZSCMRXQ9GaEEVLgm6akQo96i",
        "to_user_id": "user_2zdFoZib5lNr614LgkONdD8WG32",
        "text": "This is a Samsung Tablet",
        "message_type": "text",
        "media_url": "",
        "createdAt": "2025-09-03T10:11:08.437Z",
        "updatedAt": "2025-09-04T10:43:50.346Z",
        "seen": true
    },
    {
        "_id": "68835ffc6e4b42b685069def",
        "from_user_id": "user_2zdFoZib5lNr614LgkONdD8WG32",
        "to_user_id": "user_2zwZSCMRXQ9GaEEVLgm6akQo96i",
        "text": "yah , this tablet is good",
        "message_type": "text",
        "media_url": "",
        "seen": false,
        "createdAt": "2025-09-04T10:44:12.753Z",
        "updatedAt": "2025-09-04T10:44:12.753Z",
    },
        {
        "_id": "6878cc2817a54e4d3748010c",
        "from_user_id": "user_2zdFoZib5lNr614LgkONdD8WG32",
        "to_user_id": "user_2zwZSCMRXQ9GaEEVLgm6akQo96i",
        "text": "you can purchase it from amazon",
        "message_type": "text",
        "media_url": "",
        "createdAt": "2025-09-03T10:10:48.956Z",
        "updatedAt": "2025-09-04T10:43:50.346Z",
        "seen": true
    },
]

export const dummyProducts = [
    {}, {}, {}, {}, {}
]

export const dummyConnectionsData = [
    dummyUserData,
    dummyUser2Data,
    dummyUser3Data,
    dummyUser4Data,
]

export const dummyFollowersData = [
    dummyUser2Data,
    dummyUser3Data
]

export const dummyFollowingData = [
    dummyUser2Data,
    dummyUser3Data
]

export const dummyPendingConnectionsData = [
    dummyUserData,
    dummyUser2Data,
    dummyUser3Data,
    dummyUser4Data,
]

import logo from './logo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyEventsData = [
    {
        "_id": "001",
        "id": 1,
        "title": "Tech Talk: Future of AI",
        "overview": "Join us for an engaging tech talk on Artificial Intelligence trends by industry experts. Open for all departments!",
        "poster_path": "https://source.unsplash.com/featured/?technology",
        "backdrop_path": "https://source.unsplash.com/featured/?ai,conference",
        "genres": [
            { "id": 1, "name": "Seminar" },
            { "id": 2, "name": "Technology" }
        ],
        "casts": [
            { "name": "Dr. Rohan Mehta", "profile_path": "https://randomuser.me/api/portraits/men/32.jpg" },
            { "name": "Prof. Shalini Das", "profile_path": "https://randomuser.me/api/portraits/women/44.jpg" }
        ],
        "release_date": "2025-08-01",
        "original_language": "en",
        "tagline": "Explore the future, today.",
        "vote_average": 9.1,
        "vote_count": 215,
        "runtime": 90
    },
    {
        "_id": "002",
        "id": 2,
        "title": "Cultural Night 2025",
        "overview": "An evening filled with dance, drama, music, and magic. Showcase your talent or just come and enjoy the vibe!",
        "poster_path": "https://source.unsplash.com/featured/?stage,concert",
        "backdrop_path": "https://source.unsplash.com/featured/?college,event",
        "genres": [
            { "id": 3, "name": "Cultural" },
            { "id": 4, "name": "Entertainment" }
        ],
        "casts": [
            { "name": "College Dance Club", "profile_path": "https://randomuser.me/api/portraits/men/55.jpg" },
            { "name": "Drama Society", "profile_path": "https://randomuser.me/api/portraits/women/65.jpg" }
        ],
        "release_date": "2025-08-03",
        "original_language": "en",
        "tagline": "Feel the beat, own the stage.",
        "vote_average": 8.7,
        "vote_count": 157,
        "runtime": 180
    },
    {
        "_id": "003",
        "id": 3,
        "title": "Hackathon: CodeStorm 2.0",
        "overview": "24-hour coding marathon for passionate developers. Win exciting prizes and internship offers.",
        "poster_path": "https://source.unsplash.com/featured/?coding,hackathon",
        "backdrop_path": "https://source.unsplash.com/featured/?laptop,students",
        "genres": [
            { "id": 5, "name": "Hackathon" },
            { "id": 2, "name": "Technology" }
        ],
        "casts": [
            { "name": "Tech Club Core Team", "profile_path": "https://randomuser.me/api/portraits/men/70.jpg" }
        ],
        "release_date": "2025-08-05",
        "original_language": "en",
        "tagline": "Code. Compete. Conquer.",
        "vote_average": 9.5,
        "vote_count": 500,
        "runtime": 1440
    },
    {
        "_id": "004",
        "id": 4,
        "title": "Photography Exhibition",
        "overview": "Explore stunning captures by our college photographers. Open gallery for all students and faculty.",
        "poster_path": "https://source.unsplash.com/featured/?photography,exhibition",
        "backdrop_path": "https://source.unsplash.com/featured/?gallery,photos",
        "genres": [
            { "id": 6, "name": "Exhibition" },
            { "id": 7, "name": "Art" }
        ],
        "casts": [
            { "name": "Photography Club", "profile_path": "https://randomuser.me/api/portraits/men/80.jpg" }
        ],
        "release_date": "2025-08-07",
        "original_language": "en",
        "tagline": "Through the lens of passion.",
        "vote_average": 8.3,
        "vote_count": 97,
        "runtime": 360
    }
]

import  {createContext} from 'react';

export const Users = createContext({});
export const handleData = [{ 
  "name": "Fulufhelo",
  "username": "desta",
  "id": 1,
  "profession": "Software Engineer",
  "email": "fulufhelo@gmail.com",
  "password": "fulufhelo",
  "age": 24
},
];

export const data = [
      {
        "_id": "1",
        "name": "Emma",
        "status": "active",
        "recommended": "yes",
        "connection": "Connect",
        "userProfile": "https://images.unsplash.com/photo-1620424037570-15137a4a562d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        "_id": "2",
        "name": "Liam",
        "status": "away",
        "recommended": "no",
        "connection": "Pending",
        "userProfile": "https://images.unsplash.com/photo-1541453456074-d59763a931de?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "_id": "3",
        "name": "Olivia",
        "status": "active",
        "recommended": "yes",
        "connection": "Connect",
        "userProfile": "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

      },
      {
        "_id": "4",
        "name": "Noah",
        "status": "offline",
        "recommended": "yes",
        "connection": "pending",
        "userProfile": "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "_id": "5",
        "name": "Ava",
        "status": "active",
        "recommended": "no",
        "connection": "Connected",
        "userProfile": "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        "_id": "6",
        "name": "Sophia",
        "status": "away",
        "recommended": "yes",
        "connection": "Connected",
        "userProfile": "https://images.unsplash.com/photo-1554727242-741c14fa561c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "messages": [
          {
            "sender": "user1",
            "content": "Hello!",
            "timestamp": "2023-11-07T12:30:00Z"
          },
          {
            "sender": "user2",
            "content": "Hi there!",
            "timestamp": "2023-11-07T12:35:00Z"
          },
          {
            "sender": "user1",
            "content": "How are you?",
            "timestamp": "2023-11-07T12:40:00Z"
          },
          {
            "sender": "user2",
            "content": "I'm good, thanks!",
            "timestamp": "2023-11-07T12:45:00Z"
          }
        ],
      },
      {
        "_id": "7",
        "name": "Jackson",
        "status": "active",
        "recommended": "no",
        "connection": "Pending",
        "userProfile": "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "_id": "8",
        "name": "Isabella",
        "status": "offline",
        "recommended": "yes",
        "connection": "Rejected",
        "userProfile": "https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        "_id": "9",
        "name": "Lucas",
        "status": "active",
        "recommended": "no",
        "connection": "Connected",
        "userProfile": "https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "messages": [
          {
            "sender": "user1",
            "content": "Hello!",
            "timestamp": "2023-11-07T12:30:00Z"
          },
          {
            "sender": "user2",
            "content": "Hi there!",
            "timestamp": "2023-11-07T12:35:00Z"
          },
          {
            "sender": "user1",
            "content": "How are you?",
            "timestamp": "2023-11-07T12:40:00Z"
          },
          {
            "sender": "user2",
            "content": "I'm good, thanks!",
            "timestamp": "2023-11-07T12:45:00Z"
          }
        ],
      },
      {
        "_id": "10",
        "name": "Mia",
        "status": "away",
        "recommended": "yes",
        "connection": "Pending",
        "userProfile": "https://images.unsplash.com/photo-1592621385645-e41659e8aabe?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }

]

export const chats =  [
  {
    "id": "9",
    "messages": [
      {
        "sender": "user1",
        "content": "Hello!",
        "timestamp": "2023-11-07T12:30:00Z"
      },
      {
        "sender": "user2",
        "content": "Hi there!",
        "timestamp": "2023-11-07T12:35:00Z"
      },
      {
        "sender": "user1",
        "content": "How are you?",
        "timestamp": "2023-11-07T12:40:00Z"
      },
      {
        "sender": "user2",
        "content": "I'm good, thanks!",
        "timestamp": "2023-11-07T12:45:00Z"
      }
    ],
    "contentShared": [
      {
        "sender": "user1",
        "contentType": "image",
        "contentURL": "https://example.com/image1.jpg",
        "timestamp": "2023-11-07T12:50:00Z"
      },
      {
        "sender": "user2",
        "contentType": "text",
        "content": "Check out this article: https://example.com/article",
        "timestamp": "2023-11-07T12:55:00Z"
      }
    ]
  },
  {
    "id": "6",
    "messages": [
      {
        "sender": "user1",
        "content": "Hello!",
        "timestamp": "2023-11-07T12:30:00Z"
      },
      {
        "sender": "user2",
        "content": "Hi there!",
        "timestamp": "2023-11-07T12:35:00Z"
      },
      {
        "sender": "user1",
        "content": "How are you?",
        "timestamp": "2023-11-07T12:40:00Z"
      },
      {
        "sender": "user2",
        "content": "I'm good, thanks!",
        "timestamp": "2023-11-07T12:45:00Z"
      }
    ],
    "contentShared": [
      {
        "sender": "user1",
        "contentType": "image",
        "contentURL": "https://example.com/image1.jpg",
        "timestamp": "2023-11-07T12:50:00Z"
      },
      {
        "sender": "user2",
        "contentType": "text",
        "content": "Check out this article: https://example.com/article",
        "timestamp": "2023-11-07T12:55:00Z"
      }
    ]
  },
  {
    "id": "5",
    "messages": [
      {
        "sender": "user1",
        "content": "Hello!",
        "timestamp": "2023-11-07T12:30:00Z"
      },
      {
        "sender": "user2",
        "content": "Hi there!",
        "timestamp": "2023-11-07T12:35:00Z"
      },
      {
        "sender": "user1",
        "content": "How are you?",
        "timestamp": "2023-11-07T12:40:00Z"
      },
      {
        "sender": "user2",
        "content": "I'm good, thanks!",
        "timestamp": "2023-11-07T12:45:00Z"
      }
    ],
    "contentShared": [
      {
        "sender": "user1",
        "contentType": "image",
        "contentURL": "https://example.com/image1.jpg",
        "timestamp": "2023-11-07T12:50:00Z"
      },
      {
        "sender": "user2",
        "contentType": "text",
        "content": "Check out this article: https://example.com/article",
        "timestamp": "2023-11-07T12:55:00Z"
      }
    ]
  }
];

export const details = [ 
  { header: 'Account Settings', content: 'Manage account password, Customize settings, Preferences' },
  { header: 'Activity and Content', content: 'Recent activitys,History content, Favoourite feed' },
  { header: 'Connected Accounts', content: 'Linked social media accounts' },
  { header: 'Payment and Subscription', content: 'Manage payments, History transactins, Subscription details' },
  { header: 'App Preferences', content: 'Theme and display settings, Customize app experience' },
  { header: 'Log Out', content: 'Currently log in as Fulufhelo' }
]

// export const handleData = [{ 
//         "d": [
//           {
//             "i": {
//               "height": 1500,
//               "imageUrl": "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
//               "width": 1000
//             },
//             "id": "tt0944947",
//             "l": "Game of Thrones",
//             "q": "TV series",
//             "qid": "tvSeries",
//             "rank": 23,
//             "s": "Emilia Clarke, Peter Dinklage",
//             "y": 2011,
//             "yr": "2011-2019"
//           },
//           {
//             "i": {
//               "height": 1500,
//               "imageUrl": "https://m.media-amazon.com/images/M/MV5BODkwZjc2NTgtNzljZC00NzRkLTgxNjctMDUxODU3NGM2ZDkyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
//               "width": 1000
//             },
//             "id": "tt15397918",
//             "l": "Game of Love",
//             "q": "feature",
//             "qid": "movie",
//             "rank": 5431,
//             "s": "Bella Thorne, Benjamin Mascolo",
//             "y": 2022
//           },
//           {
//             "i": {
//               "height": 1655,
//               "imageUrl": "https://m.media-amazon.com/images/M/MV5BYjQzMjZhMzktZDUyMy00YzUwLTk5MDYtNTMzYzIwMDc0NmYwXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_.jpg",
//               "width": 1140
//             },
//             "id": "tt0077594",
//             "l": "Game of Death",
//             "q": "feature",
//             "qid": "movie",
//             "rank": 8975,
//             "s": "Bruce Lee, Gig Young",
//             "y": 1978
//           },
//           {
//             "i": {
//               "height": 1200,
//               "imageUrl": "https://m.media-amazon.com/images/M/MV5BNTg1MjEyNWYtNzJkZi00ZTM5LThlNWMtMmNiNmE3N2QxNTllXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
//               "width": 782
//             },
//             "id": "tt13380510",
//             "l": "Game of Thrones",
//             "q": "video",
//             "qid": "video",
//             "rank": 9114,
//             "s": "Roy Dotrice",
//             "y": 2003
//           },
//           {
//             "i": {
//               "height": 2048,
//               "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_.jpg",
//               "width": 1382
//             },
//             "id": "tt1515091",
//             "l": "Sherlock Holmes: A Game of Shadows",
//             "q": "feature",
//             "qid": "movie",
//             "rank": 3441,
//             "s": "Robert Downey Jr., Jude Law",
//             "y": 2011
//           },
//           {
//             "i": {
//               "height": 911,
//               "imageUrl": "https://m.media-amazon.com/images/M/MV5BNWRkMDhiOWItZWE5ZC00OTQ1LTk1ZTItMTkyMmRhNTAzMzE5XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_.jpg",
//               "width": 616
//             },
//             "id": "tt1446072",
//             "l": "Game of Death",
//             "q": "feature",
//             "qid": "movie",
//             "rank": 16997,
//             "s": "Wesley Snipes, Aunjanue Ellis-Taylor",
//             "y": 2011
//           },
//           {
//             "i": {
//               "height": 864,
//               "imageUrl": "https://m.media-amazon.com/images/M/MV5BZDgzY2NkMTgtODQwZC00MWEzLWFlZjQtZTcxOTc3NzU1MDVhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
//               "width": 580
//             },
//             "id": "tt0126916",
//             "l": "For Love of the Game",
//             "q": "feature",
//             "qid": "movie",
//             "rank": 9110,
//             "s": "Kevin Costner, Kelly Preston",
//             "y": 1999
//           },
//           {
//             "i": {
//               "height": 1600,
//               "imageUrl": "https://m.media-amazon.com/images/M/MV5BZGRjMmMzMDAtMDg0Mi00YzFiLWFhMjItOGM0OWIxZDc5NDk5XkEyXkFqcGdeQXVyMTYyODkzNzU4._V1_.jpg",
//               "width": 1200
//             },
//             "id": "tt14421754",
//             "l": "Dirty Games",
//             "q": "feature",
//             "qid": "movie",
//             "rank": 9681,
//             "s": "Emily Eaton-Plowright, Daniel Godfrey",
//             "y": 2022
//           }
//         ],
//         "q": "game%20of",
//         "v": 1
//       },
// ];

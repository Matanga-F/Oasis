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

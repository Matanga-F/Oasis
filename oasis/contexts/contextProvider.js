
import React, { useState, useEffect } from 'react'
import { appContext } from './contextApi';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { details, handleData } from './handleData';
// import { searchAndCombineData } from '../authentication/fetchApiData';


const ContextProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState('Initial Value');
  const Stack = createNativeStackNavigator();
  const [data, setData] = useState(handleData);
  const [content, setContent] = useState(details)
  const [auth, setAuth] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [playists, setPlayList] = useState(tracks.playists);
  const [topTracks, setTopTracks] = useState(tracks)
  const [movies, setMovies] = useState([]);
  const [fake, setFake] = useState([])
  const [dummy, setDummy] = useState([])
  const [isLoading, setLoading] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);


  // const [data, SetData] = useState(handleData)
  const usernames = data.map((item) => { return item.username });
  const passwords = data.map((item) => { return item.password });


  const getRandomItem = () => {
    const randomIdx = Math.floor(Math.random() * 7);
    setRandomIndex(randomIdx);
  };

  const handleRandomImdbApi = async () => {
    const options = ['run', 'chosen', 'Gossip girls', 'The originals', 'Uncharted', "Mogwli", 'Lord of', 'Euphoria'];
    const option = options[randomIndex];
    const results = await searchAndCombineData(option);
    setFake(results.imdbData);

  }
  const handleRandomSportifyApi = async () => {
    const options = ['run', 'love is blind ', 'Chris brown', 'amapiano latests', 'Hiphop', "R kelly", 'Makhadzi', 'Nasty C'];
    const option = options[randomIndex];
    const results = await searchAndCombineData(option);
    setPlayList(results.spotifyData.playists);

  }





  const image = {
    uri:
      'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    // 'https://cdn.pixabay.com/photo/2022/01/22/16/11/giant-gorilla-6957777_1280.jpg',
  };
  const user = {
    // uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', 
    uri: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2ZpbGUlMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  }


  return (
    <appContext.Provider value={{ handleRandomSportifyApi, topTracks, setTopTracks, showPassword, setShowPassword, password, setPassword, email, setEmail, username, setUsername, tracks, setTracks, movies, setMovies, image, auth, setAuth, dummy, setDummy, randomIndex, setRandomIndex, getRandomItem, fake, setFake, isLoading, setLoading, data, usernames, passwords, user, content, playists }}>
      {children}
    </appContext.Provider>
  );
};

export default ContextProvider
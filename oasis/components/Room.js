import { View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, {useRef, useState, useEffect} from 'react'
import room from './styles/room.style';
import Live from './Live';
import Chat from './Chat';
import Trailers from './Trailers';
import ForYou from './ForYou';
import Movies from './Movies';
import Entertainment from './Entertainment';
import Reels from './Reels';
import { Video,  ResizeMode  } from 'expo-av';

const Room = ({videoSource}) => {

    const tabs = ['Chats', 'Live', 'For you','Reels', 'Trailers', 'Movies', 'Entertainment'];
    const scrollViewRef = useRef(null);
    const [activeTab, setActiveTab] = useState('Chats');
  
    const handleTabPress = (tab) => {
      setActiveTab(tab);
    };
  
    const renderTabs = () => {
      return tabs.map((tab) => (
        <TouchableOpacity key={tab} onPress={() => handleTabPress(tab)} style={room.tab}>
          <Text style={[room.tabText, activeTab === tab ? room.activeTabText : {}]}>{tab}</Text>
        </TouchableOpacity>
      ));
    };
  
    const renderContent = () => {
      switch (activeTab) {
        case 'Chats':
          return <View>
            <Chat />
            </View>
        case 'Reels':
          return <Reels />
        case 'Live':
          return <View>
            <Live />
          </View>
        case 'Trailers':
          return <Trailers />
        case 'For you':
          return <ForYou />
        case 'Movies':
          return <Movies />
        case 'Entertainment':
          return <Entertainment />
        default:
            return <Text style={room.headerText} >Display Entertainment content</Text>;

      }
    };
  
    // const handleScroll = (event) => {
    //   const contentOffset = event.nativeEvent.contentOffset.x;
    //   const tabWidth = room.tabWidth; // Define the width of each tab in your style
    //   const activeTabIndex = Math.round(contentOffset / tabWidth);
    //   const activeTab = tabs[activeTabIndex];
    //   setActiveTab(activeTab);
    // };
  
    // // const handleSwipe = (direction) => {
    // //   const currentIndex = tabs.indexOf(activeTab);
    // //   let newIndex;
  
    // //   if (direction === 'left') {
    // //     newIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    // //   } else {
    // //     newIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
    // //   }
  
    // //   setActiveTab(tabs[newIndex]);
    // //   scrollViewRef.current.scrollTo({ x: newIndex * room.tabWidth, animated: true });
    // // };

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const image = require("../asserts/images/reels.png")
  
    const handlePlayPause = async () => {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    };
    
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
  
    useEffect(() => {
      // Load and play the video when the component mounts
      (async () => {
        if (videoRef.current) {
          await videoRef.current.loadAsync(videoSource, {}, true);
          await videoRef.current.playAsync();
        }
      })();
  
      return () => {
        // Unload the video when the component unmounts
        if (videoRef.current) {
          videoRef.current.unloadAsync();
        }
      };
    }, [videoSource]);
    
  return (
    <View style={room.container}>
            <View style={room.innerContainer}>
            <View>
                <ScrollView 
                ref={scrollViewRef} 
                horizontal
                showsHorizontalScrollIndicator={false}
                // onScroll={handleScroll}
                // contentContainerStyle={room.horizontalTab}
                >
                    {renderTabs()}
                </ScrollView>
            </View>
            <View>{renderContent()}</View>
            
            </View>
    </View>
  )
}

export default Room
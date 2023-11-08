import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, Animated } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import chatroom from './styles/chatrom.styles';
import { Ionicons } from '@expo/vector-icons';
import { data } from '../contexts/handleData';
import UserAvator from './UserAvator';

const Chat = () => {
  const [wrapVisible, setWrapVisible] = useState(true);
  const [iconName, setIconName] = useState('close-outline');
  const [users, setUsers] = useState([]);
  const scrollY = new Animated.Value(0);

  useEffect(() => {
    // Load the JSON data from your home directory
    const fetchData = async () => {
      try {
        // Use the imported data array
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const user = {
    uri: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2ZpbGUlMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  };


  const slideAnimation = {
    from: { translateY: 0 },
    to: { translateY: wrapVisible ? 0 : -500 },
    duration: 300,
  };
  const verified = require("../asserts/images/verified.png");
  const checking = require("../asserts/images/checked.png");




  return (
<View style={chatroom.container}>
        <View>
          <View>
            <TouchableOpacity onPress={() => setWrapVisible(false)}>
              <Ionicons name='close-outline' size={18} style={chatroom.closeCross} />
            </TouchableOpacity>
          </View>
          <View style={chatroom.rowContainer}>
            <Text style={chatroom.header}>Discover friends</Text>
            <TouchableOpacity>
              <Text style={chatroom.grid}>see all</Text>
            </TouchableOpacity>
          </View>
          <View>

          </View>
          <FlatList
            data={users}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={chatroom.tab}>
                <View>
                  <View>
                    <TouchableOpacity>
                      <Ionicons name='close-outline' style={chatroom.cross} />
                    </TouchableOpacity>
                  </View>
                  <Image source={{uri: item.userProfile}} size={26} style={chatroom.useProfile} />
                  <Text style={chatroom.text}>
                    {item.name}
                    {item.recommended ==="yes" ? <Image source={verified} size={13} style={chatroom.status} /> : <Image source={checking} size={9} style={chatroom.check} />}

                  </Text>
                  {/* <Text style={chatroom.recommended}>{item.recommended}</Text> */}
                  <TouchableOpacity style={chatroom.connect}>
                    <Text style={chatroom.text}>{item.connection}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item) => item._id}
          />
          

          <View>
            <Text style={chatroom.chat}>Chats</Text>
            <UserAvator friend={users} />
            <Text style={chatroom.chatOptions}>Tap and hold on a chat for more options</Text>
          </View>
        </View>
    </View>
    
  );
};

export default Chat;

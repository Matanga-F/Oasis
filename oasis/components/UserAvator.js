import { View, Text, Image, FlatList } from 'react-native'
import React, { useContext } from 'react';
import { appContext } from '../contexts/contextApi';
import { Ionicons } from '@expo/vector-icons';
import userAvator from './styles/avator.styles';

const UserAvator = ({ friend }) => {
  const { user } = useContext(appContext);
  return (
    <View style={userAvator.container} >
      <FlatList
        data={friend}
        showsVerticalScrollIndicator= {false}
        renderItem={({ item, index }) => {
          if (item.connection === "Connected") {
            return (
              <View style={userAvator.innercontainer}>
                <View>
                  <Image source={user} style={userAvator.userAvator} />
                  <Ionicons name="" size={13} />
                </View>

                <View>
                  <Text style={userAvator.userName}>{item.name}</Text>
                  <Text style={userAvator.message}>Message display</Text>
                </View>

                <View>
                  <Text style={userAvator.status}>last seen</Text>
                </View>
              </View>
            );
          } else {
            // Return null or another component for the case when connection is not "connected"
            return null;
          }
        }}
      />
    </View>
  );
}

export default UserAvator;

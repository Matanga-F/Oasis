import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { appContext } from '../contexts/contextApi';

const Content = () => {
    const details = [ 
        { header: 'Account Settings', content: 'Manage account password, Customize settings, Preferences' },
        { header: 'Activity and Content', content: 'Recent activitys,History content, Favoourite feed' },
        { header: 'Connected Accounts', content: 'Linked social media accounts' },
        { header: 'Payment and Subscription', content: 'Manage payments, History transactins, Subscription details' },
        { header: 'App Preferences', content: 'Theme and display settings, Customize app experience' },
        { header: 'Log Out', content: 'Currently log in as Fulufhelo' }
      ]

  return (
    <View style={content.container}>
      <FlatList
        data={details}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={content.header}>{item.header}</Text>
            <Text style={content.content}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const content = {
    container:{
        width: '90%',
        margin: 'auto',
        height: 120,
    },
    header: {
        color: 'rgba(255, 255, 255, .8)',
        fontSize: 20,
    }
}

export default Content;

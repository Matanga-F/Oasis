import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContextProvider from './contexts/contextProvider';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <ContextProvider>
       <View style={styles.container}>
          <AppNavigator />
        </View>
    </ContextProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgbe(0, 0, 0, 1)'
  },
});

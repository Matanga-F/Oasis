import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from '../components/landingPage';
const Stack = createNativeStackNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="landingPage"
          component={LandingPage}
          options={{
            animation: 'slide_from_bottom',
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
import { View, Text, TouchableOpacity, } from 'react-native';
import React, {useContext, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import landing from './styles/landing.styles';
// import { appContext } from '../../contexts/contextApi';

const LandingScreen = () => {
//   const {image,auth,  setAuth, getRandomItem }  = useContext(appContext)
  const navigation = useNavigation(); // Hook to get the navigation object

  const handleLoginPress = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };


  const handleRegister = () =>{
    // getRandomItem();
    // setAuth(true)
    navigation.navigate('Register');

  };
  
  return (
    <View style={landing.container}>
      <View style={landing.innerContainer}>
        <View stye={landing.content}>


          <Text style={landing.header}>Agree to Oasis's terms and policies</Text>
          <View>
          <Text  style={landing.policy} >Users who use our service may have uploaded your contact information to YourTaste Platform.<TouchableOpacity><Text style={landing.link}>learn more.</Text></TouchableOpacity> </Text>
          <Text  style={landing.policy} >By taping I agree, you agree to create an account and to YourTaste <TouchableOpacity><Text  style={landing.link}>Terms</Text></TouchableOpacity> , <TouchableOpacity><Text  style={landing.link}>Privacy</Text></TouchableOpacity>,<TouchableOpacity><Text  style={landing.link}> Policy</Text></TouchableOpacity> and <TouchableOpacity><Text  style={landing.link}>Cookies Policy. </Text></TouchableOpacity></Text>
          <Text  style={landing.policy} >Our product <TouchableOpacity style={landing.touchableLink} ><Text style={landing.link} >Privacy Policy</Text></TouchableOpacity> describes the ways we can user the information we collect to build user experince and recommended algorithms.</Text>
          </View> 
          <TouchableOpacity  style={landing.agree} onPress={handleRegister}>
            <Text style={landing.text}>I agree</Text>
          </TouchableOpacity>

          <View style={landing.account}>
            <TouchableOpacity onPress={handleLoginPress}>
            <Text style={landing.accountText} >Already have an account?</Text>
            </TouchableOpacity>
            
          </View>

        </View>
      </View>

      </View>
  )
}

export default LandingScreen
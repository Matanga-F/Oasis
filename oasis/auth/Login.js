import { View, Text, TouchableOpacity,Vibration,Image, TextInput} from 'react-native'
import React, {useContext} from 'react'
import authentication from "./styles/authentications.styles"
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation } from '@react-navigation/native';
import { appContext } from '../contexts/contextApi';


const Login = () => {
const {auth, setAuth,username, setUsername, isLoading, setLoading, password, setPassword,showPassword, setShowPassword, image, email,usernames, passwords } = useContext(appContext);
  const navigation = useNavigation();

  const twitter = require("../asserts/images/twitter1.png")
  const google = require("../asserts/images/search.png")
  const facebook = require("../asserts/images/facebook.png")
  const user = require("../asserts/images/man1.png")
const lock = require("../asserts/images/password 1.gif")

  const handleLogin = () => {
    setLoading(true); // Start loading
  
    // Simulate authentication process
    setTimeout(() => {
      const isUsernameDefined = username !== undefined;
      const isEmailDefined = email !== undefined;
      const isPasswordDefined = password !== undefined;
  
      const isUsernameOrEmailValid =
        isUsernameDefined &&
        (usernames.includes(username.toLowerCase()));
  
      const isPasswordValid = isPasswordDefined && passwords.includes(password.toLowerCase());
  
      const isAuthenticated = (isUsernameOrEmailValid) && isPasswordValid;
  
      setAuth(isAuthenticated);
      setLoading(false); // Stop loading
  
      if (isAuthenticated) {
        navigation.navigate('Choice');
        setPassword('');
      } else {
        Vibration.vibrate(100);
      }
    }, 500); // Simulated delay of .5 second
  
  };

  const handleLoginPress = async () => {};
  const handleRegister = ()=>{
    navigation.navigate('Register')
  }

  return (
        <LinearGradient
            colors={['rgba(0, 0, 0, .99)', 'rgba(1, 10, 55, 1)','rgba(0, 0, 0, 1)']}
            style={authentication.container}
            >
                <View style={authentication.innerContainer}>

                    <View style={authentication.header}>
                <Ionicons name="finger-print-outline" size={34} style={authentication.fingerPrint} />
                <Text style={authentication.text}>Log in</Text>
                    </View>

                    <View style={authentication.inputContainer}>
                        <Ionicons name="person-outline" size={26} style={authentication.user} />
             

                            {/* <Image source={user} size={26} style={authentication.user} /> */}

                                <TextInput
                                placeholder="Username or Email"
                                placeholderTextColor="lightgrey"
                                value={username}
                                style={authentication.input}
                                onChangeText={(text) => setUsername(text)}
                                />

                    </View>

                    <View style={[authentication.inputContainer, { marginTop: 30}]}>
            <Ionicons name="lock-closed-outline" size={26} style={authentication.user} />
            

            {/* <Image source={lock} size={26} style={authentication.user} /> */}

                <TextInput
                 placeholder="Password"
                 placeholderTextColor="lightgrey"
                 style={auth ? authentication.input : authentication.incorrect}
                 value={password}
                 secureTextEntry={!showPassword} 
                 onChangeText={(text) => setPassword(text)}
               />
               <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
         {showPassword ? 
           <Ionicons name="eye-off-outline" size={26} style={authentication.eye} /> 
          : 
           <Ionicons name="eye-outline" size={26} style={authentication.eye} /> 
         }
       </TouchableOpacity>
                    </View>


                <View style={authentication.forgetContainer}>

                  {auth ? null : <TouchableOpacity>
                  <Text style={authentication.forgot}>forgot password?</Text>
                                
                        </TouchableOpacity>}

                </View>

                <View style={authentication.bottomContainer}>

             <View style={authentication.bottonContainer}>
             <TouchableOpacity stye={authentication.loginButton} onPress={handleLogin}>
                     <Text  style={authentication.buttonText}>Sign in</Text>
                   </TouchableOpacity>
             </View>
             <View>
            <Text  style={authentication.or} >
              <View style={authentication.horizontalBorder}></View> Or Connect With  <View style={authentication.horizontalBorder}>
                </View>
                </Text>
            <View style={authentication.google}>
              <TouchableOpacity onPress={handleLoginPress }>
               <Image source={google} style={authentication.logo} />


              </TouchableOpacity>
              <TouchableOpacity>
               <Image source={twitter} style={authentication.logo} />

              </TouchableOpacity>
              <TouchableOpacity>
               <Image source={facebook} style={authentication.logo} />

              </TouchableOpacity>

            </View>
          </View>
          </View>

          <View style={authentication.account}>
            <TouchableOpacity onPress={ handleRegister}>
            <Text style={authentication.accountText} >Dont have an account?</Text>
            </TouchableOpacity>
            
          </View>

          {isLoading && <View style={authentication.loadingContainer}>
          <Text style={authentication.loading}>Loading...</Text>
          </View>}

                

                </View>

                
           
          
            {/* Your other components */}
            </LinearGradient>
    
  )
}

export default Login
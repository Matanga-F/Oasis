import { View, Text, TextInput, TouchableOpacity,Image,Vibration, Button } from 'react-native'
import React, {useContext} from 'react'
import authentication from './styles/authentications.styles'
import { appContext } from '../contexts/contextApi';
import {useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const Register = () => {
    const { data, auth, setAuth,username, setUsername, isLoading, setLoading, password, setPassword,showPassword, setShowPassword, image, email } = useContext(appContext);
  
    const emails = data.map((item) => { return item.email });
    const usernames = data.map((item) => { return item.username });
    const passwords = data.map((item) => { return item.password });
    
  const twitter = require("../asserts/images/twitter1.png")
  const google = require("../asserts/images/search.png")
  const facebook = require("../asserts/images/facebook.png")
  
    const navigation = useNavigation();
  
    const handleLogin = () => {
      setLoading(true); // Start loading
  
      // Simulate authentication process
      setTimeout(() => {
        const isAuthenticated = (usernames.includes(username.toLowerCase()) || emails.includes(email.toLowerCase())) && passwords.includes(password.toLowerCase()) ;
        setAuth(isAuthenticated);
        setLoading(false); // Stop loading
  
        if (isAuthenticated) {
          navigation.navigate('BottomNavigation');
          setPassword('')
        } else {
          Vibration.vibrate(100);
        }
      }, 1000); // Simulated delay of 1 second
    };
    const handleRegister = ()=>{
      navigation.navigate('Login')
    }
  
    return(
        <LinearGradient
        colors={['rgba(0, 0, 0, .99)', 'rgba(1, 10, 55, 1)','rgba(0, 0, 0, 1)']}
        style={authentication.container}
        >
            <View style={authentication.innerContainer}>
                
            <View style={authentication.header}>
              {/* <Ionicons name="finger-print-outline" size={34} style={authentication.fingerPrint} /> */}
              <Text style={authentication.text}>Register</Text>
              </View>

              <View style={authentication.inputContainer}>
             <Ionicons name="person-outline" size={26} style={authentication.user} />
                 <TextInput
                  placeholder="Username or Email"
                  placeholderTextColor="lightgrey"
                  value={username}
                  style={authentication.input}
                  onChangeText={(text) => setUsername(text)}
                />

            </View>

            <View style={[authentication.inputContainer, { marginTop: 20}]}>
            <Ionicons name="lock-closed-outline" size={26} style={authentication.user} />
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

           <View style={[authentication.inputContainer, { marginTop: 20}]}>
            <Ionicons name="lock-closed-outline" size={26} style={authentication.user} />
                <TextInput
                 placeholder="Confirm Password"
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
                     <Text  style={authentication.buttonText}>Sign Up</Text>
             </TouchableOpacity>
             </View>
             <View>
            <Text  style={authentication.or} ><View style={authentication.horizontalBorder}></View> Or Connect With  <View style={authentication.horizontalBorder}></View></Text>
            
            
            <View style={authentication.google}>
              <TouchableOpacity >
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
          <View style={authentication.accountR}>
            <TouchableOpacity onPress={ handleRegister}>
            <Text style={authentication.accountText} >Already have an account?</Text>
            </TouchableOpacity>
            
          </View>


            </View>

        </LinearGradient>
);
  }

export default Register

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import { Button } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile]=useState();


  // const submitHandler = async() => {
  
  // };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.signup}>Create An Account</Text>

      <TextInput
        placeholder="First Name"
        style={styles.input}
        onChange={(e) => {
          setFirstname(e.nativeEvent.text)}}
      />

      <TextInput
        placeholder="Last Name"
        style={styles.input}
        onChange={(e) => setLastname(e.nativeEvent.text)}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        onChange={(e) => setEmail(e.nativeEvent.text)}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />

      <TextInput
        placeholder="Mobile mobile"
        style={styles.input}
        onChange={(e) => setMobile(e.nativeEvent.text)}
       
      />

      <TouchableOpacity style={styles.signupButton}>
        <Button style={styles.signupButtonText} onPress={async()=>{ 
           try {
            const api ="https://wigomarket-backend-api-8a20a7c8ce69.herokuapp.com"
      const config ={
        headers:{
          "Content-type":"application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      
 const {data} = await axios.post(`${api}/api/user/register`,{firstname: firstname, lastname: lastname, password:password, email:email, mobile:mobile},config).then(()=>{

});

    } catch (error) {
    throw new Error(error);
    }
    
  } }>Sign Up</Button>
      </TouchableOpacity>

      <Text style={styles.orText}>Sign up with</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Image source={require('../assets/icons/google1.png')} style={styles.customGoogleIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
          <FontAwesome5 name="apple" size={24} color="#A8A8A8" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Image source={require('../assets/icons/facebook2.png')} style={styles.customFacebookIcon} /> 
        </TouchableOpacity>
      </View>

      <View style={styles.signupLinkContainer}>
        <Text style={styles.signupLinkText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => {
            try {
            
              navigation.navigate('Login')
            } catch (error) {
              
            }
        }
        
          }>
          <Text style={[styles.signinLinkText2, styles.signinLinkClickable]}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 70,
  },
  signup: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#3AB44A',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 30,
    marginTop: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    color: '#666',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleButton: {
    backgroundColor: 'rgba(170, 235, 164, 0.25);',
  },
  googleButton: {
    backgroundColor: 'rgba(170, 235, 164, 0.25);',
  },
  facebookButton: {
    backgroundColor: 'rgba(170, 235, 164, 0.25);',
  },

  signupLinkContainer: {
    flexDirection: 'row',
    marginTop: 30,
    
  },
  signinLinkText: {
    color: 'rgba(0, 0, 0, 0.50);',
    opacity: 20,
    marginRight: 5,
  },

  signinLinkText2: {
    color: '#FFB800',
    opacity: 20,
    marginRight: 5,
  },
 
  


});

export default SignupScreen;

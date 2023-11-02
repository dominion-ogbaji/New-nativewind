import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
const [email, setEmail] = useState();
const [password, setPassword] = useState();

const LoginScreen = ({ navigation }) => {
    const handleLogin = async() => {
        try {
         const api ="https://wigomarket-backend-api-8a20a7c8ce69.herokuapp.com"
   const config ={
     headers:{
       "Content-type":"application/json",
       "Access-Control-Allow-Origin": "*",
     },
   };
   
const {data} = await axios.post(`${api}/api/user/login`,{ password:password, email:email},config).then(()=>{
  navigation.navigate('Home');
});

 } catch (error) {
 throw new Error(error);
 }
    };

    const handleForgotPassword = async() =>{
      try {
        const api ="https://wigomarket-backend-api-8a20a7c8ce69.herokuapp.com"
  const config ={
    headers:{
      "Content-type":"application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  
const {data} = await axios.post(`${api}/api/user/forgot-password-token`,{email:email},config);

} catch (error) {
throw new Error(error);
}

    };

    // const handleSignup = () => {
    //     // Perform any necessary login logic here
    //     // For this example, we'll just navigate to the "Home" screen
    //     navigation.navigate('Signup')
    //   };
   
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/wigo.png")} style={styles.logo} />

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

      <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText} >Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupLinkContainer}>
        <Text style={styles.signupLinkText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup') }>
          <Text style={[styles.signupLinkText2, styles.signupLinkClickable]}>Sign up</Text>
        </TouchableOpacity>
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight: 35
  },
  forgotPasswordText: {
    color: '#3AB44A',
  },
  loginButton: {
    backgroundColor: '#3AB44A',
    paddingVertical: 15,
    paddingHorizontal: 65,
    borderRadius: 8,
    marginTop: 25,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupLinkContainer: {
    flexDirection: 'row',
    marginTop: 70,
    
  },
  signupLinkText: {
    color: 'rgba(0, 0, 0, 0.50);',
    opacity: 20,
    marginRight: 5,
  },

  signupLinkText2: {
    color: '#FFB800',
    opacity: 20,
    marginRight: 5,
  },
 
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#e1e1e1',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const handleLogin = () => {
      // Perform any necessary login logic here
      // For this example, we'll just navigate to the "Home" screen
      navigation.navigate('Home')
    };

    const handleSignup = () => {
        // Perform any necessary login logic here
        // For this example, we'll just navigate to the "Home" screen
        navigation.navigate('Signup')
      };
   
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/wigo.png")} style={styles.logo} />

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupLinkContainer}>
        <Text style={styles.signupLinkText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
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

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const SignupScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.signup}>Signup</Text>

      <TextInput
        placeholder="First Name"
        style={styles.input}
      />

      <TextInput
        placeholder="Last Name"
        style={styles.input}
      />

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

      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
    paddingTop: 120,
  },
  signup: {
    fontSize: 20,
    marginBottom: 30,
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

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay for the welcome/loading screen
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 5000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Top Left Logo */}
      <Image
        source={require('../assets/images/pngwing.png')}
        style={[styles.logo, styles.topLeftLogo]}
      />

      {/* Bottom Right Logo */}
      <Image
        source={require('../assets/images/pngwing.png')}
        style={[styles.logo, styles.bottomRightLogo]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDF1CA',
  },
  logo: {
    position: 'absolute',
    opacity: 0.5,
  },
  topLeftLogo: {
    top: 0,
    left: 0,
  },
  bottomRightLogo: {
    bottom: 0,
    right: 0,
  },
});

export default WelcomeScreen;
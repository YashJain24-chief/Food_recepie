import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('home');
    }, 3000);
  }, []);

  return (
    <View style={styles['splash_container']}>
      <Image source={require('../assets/splash.png')} style={styles.splash} />
    </View>
  );
};

const styles = StyleSheet.create({
  splash_container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D70F64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash: {
    width: '100%',
    height: '50%',
  },
});

export default SplashScreen;

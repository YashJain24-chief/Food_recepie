import React from 'react';
import {StyleSheet, View} from 'react-native';
import FeaturedItem from '../components/FeaturedItem';

const HomeScreen = () => {
  return (
    <View style={styles['home_container']}>
      <FeaturedItem />
    </View>
  );
};

const styles = StyleSheet.create({
  home_container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#242B2E',
  },
});

export default HomeScreen;

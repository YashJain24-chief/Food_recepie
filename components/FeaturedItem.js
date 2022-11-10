import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FeaturedItem = ({navigation, data}) => {
  function navigate() {
    navigation.navigate('details', {
      ingredients: data.ingredients,
      instructions: data.instructions,
      image: data.img,
      recepieName: data.recepieName,
      by: data.by,
    });
  }

  return (
    <View style={styles.item_height}>
      <TouchableOpacity onPress={navigate}>
        <View>
          <Image
            style={styles['item_image']}
            source={{
              uri: data.img,
            }}
          />
          <View style={styles.details}>
            <Text style={{...styles.text, ...styles.fontTitle}}>
              {data.recepieName}
            </Text>
            <Text style={{...styles.text, ...styles.fontBy}}>by {data.by}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item_image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  details: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
  },
  item_height: {
    height: '50%',
    padding: 10,
  },
  text: {
    color: 'white',
    marginVertical: 2,
  },
  fontTitle: {
    fontSize: 30,
  },
  fontBy: {
    fontSize: 20,
  },
});

export default FeaturedItem;

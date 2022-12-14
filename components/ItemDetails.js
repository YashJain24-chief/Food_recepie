import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';

const ItemDetails = ({route}) => {
  const {ingredients, instructions, image, recepieName, by} = route.params;

  function postRating(rating) {
    fetch(
      'https://my-json-server.typicode.com/YashJain24-chief/Food_recepie/user_ratings',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({recepieName: recepieName, rating: rating}),
      },
    )
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  async function ratingCompleted(rating) {
    postRating(rating);
    console.log(rating);
  }

  return (
    <View style={styles['item_container']}>
      <View style={styles.item_height}>
        <Image
          style={styles['item_image']}
          source={{
            uri: image,
          }}
        />
        <View style={styles.details}>
          <Text style={{...styles.text_white, ...styles.fontTitle}}>
            {recepieName}
          </Text>
          <Text style={{...styles.text_white, ...styles.fontBy}}>by {by}</Text>
        </View>
      </View>
      <Text style={{...styles.text, ...styles.fontBy, ...styles.marginTop}}>
        Ingredients
      </Text>
      {ingredients.map((item, index) => (
        <Text key={index} style={styles.text}>
          {index + 1}. {item}
        </Text>
      ))}
      <View style={styles.marginTop}>
        <Text style={{...styles.text, ...styles.fontBy, ...styles.marginTop}}>
          Instructions
        </Text>
        <Text style={styles.text}>{instructions}</Text>
      </View>
      <Rating
        onFinishRating={ratingCompleted}
        style={{...styles.marginTop}}
        type="heart"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item_container: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: 'rgb(255,255,255)',
  },
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
  },
  text: {
    color: 'black',
    marginVertical: 3,
  },
  text_white: {
    color: 'white',
    marginVertical: 3,
  },
  fontTitle: {
    fontSize: 30,
  },
  fontBy: {
    fontSize: 20,
  },
  marginTop: {
    marginTop: 15,
  },
});

export default ItemDetails;

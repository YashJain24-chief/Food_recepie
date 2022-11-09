import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const FeaturedItem = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/YashJain24-chief/demo/featured')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles['item_container']}>
      <View style={styles.item_height}>
        <Image
          style={styles['item_image']}
          source={{
            uri: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=a&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFuZWVyfHx8fHx8MTY2Nzg4NzM2Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920',
          }}
        />
        <View style={styles.details}>
          <Text style={{...styles.text, ...styles.fontTitle}}>
            Featured Recepie
          </Text>
          <Text style={{...styles.text, ...styles.fontBy}}>By Admin</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item_container: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  item_image: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
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
    color: 'white',
    marginVertical: 2,
  },
  fontTitle: {
    fontSize: 30,
    opacity: 0.7,
  },
  fontBy: {
    fontSize: 20,
    opacity: 0.6,
  },
});

export default FeaturedItem;

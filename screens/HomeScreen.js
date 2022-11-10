import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FeaturedItem from '../components/FeaturedItem';
import MenuItem from '../components/MenuItem';

const HomeScreen = ({navigation}) => {
  const [featuredData, setFeaturedData] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/YashJain24-chief/Food_recepie/featured',
    )
      .then(res => res.json())
      .then(data => setFeaturedData(data))
      .catch(err => console.log(err));

    fetch(
      'https://my-json-server.typicode.com/YashJain24-chief/Food_recepie/menu',
    )
      .then(res => res.json())
      .then(data => setMenu(data))
      .catch(err => console.log(err));
  }, []);

  function addRecepie() {
    navigation.navigate('addRecepie');
  }

  return (
    <>
      <View style={styles['home_container']}>
        {featuredData && (
          <FeaturedItem navigation={navigation} data={featuredData} />
        )}
        {menu && (
          <FlatList
            style={styles.list}
            data={menu}
            renderItem={({item}) => (
              <MenuItem navigation={navigation} data={item} />
            )}
            numColumns={2}
            keyExtractor={item => item.id}
          />
        )}
      </View>
      <TouchableOpacity onPress={addRecepie}>
        <Image
          source={require('../assets/fab_icon.png')}
          style={styles.fab_icon}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  home_container: {
    width: '100%',
    height: '100%',
  },
  fab_icon: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    width: 50,
    height: 50,
  },
});

export default HomeScreen;

import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const AddRecepieScreen = ({navigation}) => {
  const [textInputCount, setTextInputCount] = useState(1);

  function addTextInput() {
    setTextInputCount(textInputCount + 1);
  }

  function save() {
    navigation.navigate('home');
  }

  return (
    <View style={styles.add_recepie_container}>
      <TextInput placeholder="Recepie Name" style={styles.textInput} />

      <TextInput placeholder="Instructions" style={styles.textInput} />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={styles.text}>Ingredients</Text>
        <TouchableOpacity onPress={addTextInput}>
          <Image
            source={require('../assets/fab_icon.png')}
            style={{...styles.add_icon, marginLeft: 10, marginTop: 5}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.ingredients_container_child}>
        {Array(textInputCount)
          .fill('')
          .map((item, index) => (
            <TextInput
              placeholder="Ingredients"
              key={index}
              style={{
                ...styles.textInput,
              }}
            />
          ))}
        <Button title="Save" onPress={save} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  add_recepie_container: {
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 20,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  ingredients_container: {
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ingredients_container_child: {
    width: '85%',
  },
});

export default AddRecepieScreen;

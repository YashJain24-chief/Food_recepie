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

  const [formData, setFormData] = useState({});

  function addTextInput() {
    setTextInputCount(textInputCount + 1);
  }

  function save() {
    const dataFormat = {ingredients: []};
    for (content in formData) {
      if (content.includes('ingredient')) {
        dataFormat.ingredients.push(formData[content]);
      } else {
        dataFormat[content] = formData[content];
      }
    }
    fetch(
      'https://my-json-server.typicode.com/YashJain24-chief/Food_recepie/menu',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataFormat),
      },
    )
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
    navigation.navigate('home');
  }

  function handleFormData(name, value) {
    setFormData(prv => {
      return {
        ...prv,
        [name]: value,
      };
    });
  }

  return (
    <View style={styles.add_recepie_container}>
      <TextInput
        placeholder="Recepie Name"
        style={styles.textInput}
        onChangeText={text => handleFormData('recepieName', text)}
      />

      <TextInput
        placeholder="Instructions"
        style={styles.textInput}
        onChangeText={text => handleFormData('instructions', text)}
      />
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
      {Array(textInputCount)
        .fill('')
        .map((item, index) => (
          <TextInput
            placeholder="Ingredients"
            onChangeText={text =>
              handleFormData(`ingredient${index + 1}`, text)
            }
            key={index}
            style={{
              ...styles.textInput,
            }}
          />
        ))}
      <Button title="Save" onPress={save} />
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
});

export default AddRecepieScreen;

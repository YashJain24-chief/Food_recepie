import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import ItemDetails from './components/ItemDetails';
import AddRecepieScreen from './screens/AddRecepieScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#D70F64" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
          <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{
              title: 'Food Magic',
              headerStyle: {backgroundColor: '#D70F64'},
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="details"
            component={ItemDetails}
            options={{
              title: 'Food Details',
              headerStyle: {backgroundColor: '#D70F64'},
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="addRecepie"
            component={AddRecepieScreen}
            options={{
              title: 'Add Recepie',
              headerStyle: {backgroundColor: '#D70F64'},
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

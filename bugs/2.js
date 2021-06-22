import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Home Screen</Text>
    <Button
      title="Go to Jane's Contact Screen"
      onPress={() => {
        navigation.navigate('Contact', { name: 'Jane' });
      }}
    />
  </View>
);

/////
// Do not edit anything above this line
/////

const ContactScreen = ({route, navigation}) => ( 
    <View style={styles.screen}>  
    <Text style={styles.label}>{route.params.name} Contact Screen</Text>
    <Button
      title="Go to Lucy's Contact screen"
      onPress={() => {
        navigation.navigate('Contact', { name: 'Lucy' });
      }}
    />
  </View>
  
);

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

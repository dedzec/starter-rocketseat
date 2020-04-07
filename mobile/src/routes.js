import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';
import Product from './pages/product';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#DA552F'},
      }}>
      <Stack.Screen name="Main" component={Main} options={{title: 'JSHunt'}} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}

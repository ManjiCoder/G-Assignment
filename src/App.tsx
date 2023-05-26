/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Explore from './screens/Explore';
import Refine from './screens/Refine';
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Explore"
        activeColor="navy"
        inactiveColor="navy">
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: () => <FontAwesome name="eye" color="navy" size={26} />,
          }}
        />
        <Tab.Screen
          name="Refine"
          component={Refine}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="format-list-checks"
                color="navy"
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

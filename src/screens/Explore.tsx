/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PeopleInfo from '../components/PeopleInfo';
import ProPeopleInfo from '../components/ProPeopleInfo';
import MerchantInfo from '../components/MerchantInfo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createMaterialTopTabNavigator();

const Explore = () => {
  return (
    <Tab.Navigator
      initialRouteName="Individual"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 11},
        tabBarStyle: {backgroundColor: '#F3EDF6'},
      }}>
      <Tab.Screen
        name="Individual"
        component={PeopleInfo}
        options={{
          tabBarIcon: () => <FontAwesome name="users" color="navy" size={18} />,
          tabBarLabel: 'Individual',
          tabBarActiveTintColor: 'navy',
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <Tab.Screen
        name="Professional"
        component={ProPeopleInfo}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="free-code-camp" color="navy" size={18} />
          ),
          tabBarLabel: 'Professional',
          tabBarActiveTintColor: 'navy',
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <Tab.Screen
        name="Merchant"
        component={MerchantInfo}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="shopping-bag" color="navy" size={18} />
          ),
          tabBarActiveTintColor: 'navy',
          tabBarInactiveTintColor: 'grey',
          tabBarLabel: 'Merchanst',
        }}
      />
    </Tab.Navigator>
  );
};

export default Explore;

/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ActivityIndicator} from 'react-native-paper';

const url = 'https:/randomuser.me/api';

const status = ['invite', 'pending', 'friend'];

const PeopleInfo = () => {
  // State
  const [people, setPeople] = useState([]);

  // API Call
  const getPeopleInfo = async () => {
    const res = await fetch(url);
    const data = await res.json();
    let obj = {};
    obj.name = Object.values(data.results[0].name).join(' ');
    obj.city = data.results[0].location.city;
    obj.img = data.results[0].picture.large;

    // console.log(obj);
    setPeople(state => {
      // console.log({state});
      return state.concat([obj]);
    });
    // console.warn(people.concat([data.results[0]]));
  };

  useEffect(() => {
    for (let i = 0; i < 21; i++) {
      getPeopleInfo();
    }
  }, []);

  return (
    <View className="py-3 flex-1 bg-slate-300 min-h-screen">
      {/* Card-Container */}
      {people.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <ScrollView className="flex-1 gap-y-3 mb-5">
          {people.map((item, i) => {
            let randomStatus =
              status[Math.floor(Math.random() * status.length)];
            // console.log(item.city);
            return (
              <View
                className="mx-5 bg-[#F3EDF6] flex-row justify-between py-3 px-4 rounded-lg"
                style={[styles.elevation]}
                key={i}>
                {/* Image */}
                <View className="flex-row" style={styles.elevation}>
                  <Image
                    className="h-20 w-20 rounded-full mr-7"
                    source={{uri: item?.img}}
                  />
                  <View className="justify-center gap-y-1">
                    <Text className="font-bold text-blue-900 text-base font-sans">
                      {item?.name.length > 23
                        ? item?.name.substring(0, 23) + '...'
                        : item?.name}
                    </Text>
                    <View className="flex-row gap-2">
                      <Icon name="location-arrow" size={20} color="navy" />
                      <Text className="text-xs font-medium text-gray-700">
                        {item?.city.length > 16
                          ? item?.city.substring(0, 16) + '...'
                          : item?.city}
                      </Text>
                      <Text className="text-xs text-gray-700">
                        within{' '}
                        <Text className="font-medium text-gray-700">
                          {Math.floor(Math.random() * 100) + 1}Km
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
                {/* Info */}
                <View className="flex-row absolute items-center gap-x-1 right-3 top-2">
                  <Icon
                    name={
                      randomStatus === 'invite'
                        ? 'plus'
                        : randomStatus === 'pending'
                        ? ''
                        : 'user'
                    }
                    size={16}
                    color={randomStatus === 'friend' && 'navy'}
                  />
                  <Text
                    className={`font-medium capitalize text-xs ${
                      randomStatus === 'pending'
                        ? 'text-gray-400'
                        : randomStatus === 'friend'
                        ? 'text-blue-900'
                        : 'text-gray-700'
                    }`}>
                    {randomStatus}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default PeopleInfo;

const styles = StyleSheet.create({
  elevation: {
    elevation: 5,
  },
});

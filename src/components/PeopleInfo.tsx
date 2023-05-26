/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const url = 'https:/randomuser.me/api';

const status = ['invite', 'pending', 'friend'];

const PeopleInfo = () => {
  // State
  const [people, setPeople] = useState([]);

  const getPeopleInfo = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPeople(people.concat([data.results[0]]));
    // console.warn(people.concat([data.results[0]]));
  };

  useEffect(() => {
    getPeopleInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="py-3 flex-1 bg-slate-300 min-h-screen">
      {/* Card-Container */}
      <ScrollView className="flex-1 gap-y-3 mb-5">
        {people.map((item, i) => {
          let randomStatus = status[Math.floor(Math.random() * status.length)];
          // console.log(item.name);
          return (
            <View
              className="mx-5 bg-[#F3EDF6] flex-row justify-between py-3 px-4 rounded-lg"
              style={[styles.elevation]}
              key={i}>
              {/* Image */}
              <View className="flex-row" style={styles.elevation}>
                <Image
                  className="h-20 w-20 rounded-full mr-7"
                  source={{uri: item?.picture?.large}}
                />
                <View className="justify-center gap-y-1">
                  <Text className="font-bold text-blue-900 text-base">
                    {Object.values(item.name).join(' ')}
                  </Text>
                  <View className="flex-row gap-2">
                    <Icon name="location-arrow" size={20} color="navy" />
                    <Text className="text-xs font-medium">
                      {item?.location?.city}
                    </Text>
                    <Text className="text-xs">
                      within{' '}
                      <Text className="font-medium">
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
                      : ''
                  }`}>
                  {randomStatus}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PeopleInfo;

const styles = StyleSheet.create({
  elevation: {
    elevation: 5,
  },
});

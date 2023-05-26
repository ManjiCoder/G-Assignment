/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActivityIndicator} from 'react-native-paper';

const url = 'https:/randomuser.me/api';

const MerchantInfo = () => {
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
    <View className="py-3 flex-1 bg-green-200 min-h-screen">
      {/* Card-Container */}
      {people.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <ScrollView className="flex-1 gap-y-3 mb-5">
          {people.map((item, i) => (
            <View
              className="mx-5 bg-[#F3EDF6] flex-row justify-between py-3 px-4 rounded-lg"
              style={[styles.elevation]}
              key={i}>
              {/* Image */}
              <View className="flex-row" style={styles.elevation}>
                <View className="">
                  <Image
                    className="h-20 w-20 rounded-md mr-7"
                    source={{uri: item?.img}}
                  />
                  <View className="flex-row items-center">
                    <MaterialCommunityIcons
                      name="check-circle"
                      size={16}
                      color="navy"
                    />
                    <Text className="font-medium capitalize text-sm text-blue-900">
                      Business
                    </Text>
                  </View>
                </View>

                <View className="justify-center gap-y-1">
                  <Text className="font-bold text-blue-900 text-base font-sans">
                    {item?.name.length > 23
                      ? item?.name.substring(0, 23) + '...'
                      : item?.name}
                  </Text>
                  <View className="flex-row gap-2">
                    <MaterialCommunityIcons
                      name="map-marker-check"
                      size={20}
                      color="navy"
                    />
                    <Text className="text-xs font-medium">
                      {item?.city.length > 16
                        ? item?.city.substring(0, 16) + '...'
                        : item?.city}
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
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default MerchantInfo;

const styles = StyleSheet.create({
  elevation: {
    elevation: 5,
  },
});

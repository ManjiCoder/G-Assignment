/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const url = 'https:/randomuser.me/api';

const status = ['invite', 'pending', 'friend'];

const Refine = () => {
  const [people, setPeople] = useState([
    {
      gender: 'female',
      name: {title: 'Ms', first: 'Buse', last: 'Erginsoy'},
      location: {
        street: {number: 1128, name: 'Anafartalar Cd'},
        city: 'İstanbul',
        state: 'Samsun',
        country: 'Turkey',
        postcode: 13587,
        coordinates: {latitude: '70.8521', longitude: '117.3083'},
        timezone: {
          offset: '-7:00',
          description: 'Mountain Time (US & Canada)',
        },
      },
      email: 'buse.erginsoy@example.com',
      login: {
        uuid: '16f2116a-0a3b-4416-98b4-811349e74c8d',
        username: 'goldenlion193',
        password: 'pippen',
        salt: 'MmSsgz2H',
        md5: '5f92509eb7457c16341408f89f0ec3a5',
        sha1: 'a0619e0f011b177e502c4d1c377d21417ca163ed',
        sha256:
          'd7038f5c1a9a99998829f3a1c70a8a658b05567f2786c237739cd0cdecfc0913',
      },
      dob: {date: '1948-05-18T18:21:57.206Z', age: 75},
      registered: {date: '2006-02-01T07:55:01.344Z', age: 17},
      phone: '(594)-285-8050',
      cell: '(668)-612-4536',
      id: {name: '', value: null},
      picture: {
        large: 'https://randomuser.me/api/portraits/women/28.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/28.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/28.jpg',
      },
      nat: 'TR',
    },
    {
      gender: 'female',
      name: {title: 'Ms', first: 'Buse', last: 'Erginsoy'},
      location: {
        street: {number: 1128, name: 'Anafartalar Cd'},
        city: 'İstanbul',
        state: 'Samsun',
        country: 'Turkey',
        postcode: 13587,
        coordinates: {latitude: '70.8521', longitude: '117.3083'},
        timezone: {
          offset: '-7:00',
          description: 'Mountain Time (US & Canada)',
        },
      },
      email: 'buse.erginsoy@example.com',
      login: {
        uuid: '16f2116a-0a3b-4416-98b4-811349e74c8d',
        username: 'goldenlion193',
        password: 'pippen',
        salt: 'MmSsgz2H',
        md5: '5f92509eb7457c16341408f89f0ec3a5',
        sha1: 'a0619e0f011b177e502c4d1c377d21417ca163ed',
        sha256:
          'd7038f5c1a9a99998829f3a1c70a8a658b05567f2786c237739cd0cdecfc0913',
      },
      dob: {date: '1948-05-18T18:21:57.206Z', age: 75},
      registered: {date: '2006-02-01T07:55:01.344Z', age: 17},
      phone: '(594)-285-8050',
      cell: '(668)-612-4536',
      id: {name: '', value: null},
      picture: {
        large: 'https://randomuser.me/api/portraits/women/28.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/28.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/28.jpg',
      },
      nat: 'TR',
    },
    {
      gender: 'female',
      name: {title: 'Ms', first: 'Buse', last: 'Erginsoy'},
      location: {
        street: {number: 1128, name: 'Anafartalar Cd'},
        city: 'İstanbul',
        state: 'Samsun',
        country: 'Turkey',
        postcode: 13587,
        coordinates: {latitude: '70.8521', longitude: '117.3083'},
        timezone: {
          offset: '-7:00',
          description: 'Mountain Time (US & Canada)',
        },
      },
      email: 'buse.erginsoy@example.com',
      login: {
        uuid: '16f2116a-0a3b-4416-98b4-811349e74c8d',
        username: 'goldenlion193',
        password: 'pippen',
        salt: 'MmSsgz2H',
        md5: '5f92509eb7457c16341408f89f0ec3a5',
        sha1: 'a0619e0f011b177e502c4d1c377d21417ca163ed',
        sha256:
          'd7038f5c1a9a99998829f3a1c70a8a658b05567f2786c237739cd0cdecfc0913',
      },
      dob: {date: '1948-05-18T18:21:57.206Z', age: 75},
      registered: {date: '2006-02-01T07:55:01.344Z', age: 17},
      phone: '(594)-285-8050',
      cell: '(668)-612-4536',
      id: {name: '', value: null},
      picture: {
        large: 'https://randomuser.me/api/portraits/women/28.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/28.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/28.jpg',
      },
      nat: 'TR',
    },
    {
      gender: 'female',
      name: {title: 'Ms', first: 'Buse', last: 'Erginsoy'},
      location: {
        street: {number: 1128, name: 'Anafartalar Cd'},
        city: 'İstanbul',
        state: 'Samsun',
        country: 'Turkey',
        postcode: 13587,
        coordinates: {latitude: '70.8521', longitude: '117.3083'},
        timezone: {
          offset: '-7:00',
          description: 'Mountain Time (US & Canada)',
        },
      },
      email: 'buse.erginsoy@example.com',
      login: {
        uuid: '16f2116a-0a3b-4416-98b4-811349e74c8d',
        username: 'goldenlion193',
        password: 'pippen',
        salt: 'MmSsgz2H',
        md5: '5f92509eb7457c16341408f89f0ec3a5',
        sha1: 'a0619e0f011b177e502c4d1c377d21417ca163ed',
        sha256:
          'd7038f5c1a9a99998829f3a1c70a8a658b05567f2786c237739cd0cdecfc0913',
      },
      dob: {date: '1948-05-18T18:21:57.206Z', age: 75},
      registered: {date: '2006-02-01T07:55:01.344Z', age: 17},
      phone: '(594)-285-8050',
      cell: '(668)-612-4536',
      id: {name: '', value: null},
      picture: {
        large: 'https://randomuser.me/api/portraits/women/28.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/28.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/28.jpg',
      },
      nat: 'TR',
    },
    {
      gender: 'female',
      name: {title: 'Ms', first: 'Buse', last: 'Erginsoy'},
      location: {
        street: {number: 1128, name: 'Anafartalar Cd'},
        city: 'İstanbul',
        state: 'Samsun',
        country: 'Turkey',
        postcode: 13587,
        coordinates: {latitude: '70.8521', longitude: '117.3083'},
        timezone: {
          offset: '-7:00',
          description: 'Mountain Time (US & Canada)',
        },
      },
      email: 'buse.erginsoy@example.com',
      login: {
        uuid: '16f2116a-0a3b-4416-98b4-811349e74c8d',
        username: 'goldenlion193',
        password: 'pippen',
        salt: 'MmSsgz2H',
        md5: '5f92509eb7457c16341408f89f0ec3a5',
        sha1: 'a0619e0f011b177e502c4d1c377d21417ca163ed',
        sha256:
          'd7038f5c1a9a99998829f3a1c70a8a658b05567f2786c237739cd0cdecfc0913',
      },
      dob: {date: '1948-05-18T18:21:57.206Z', age: 75},
      registered: {date: '2006-02-01T07:55:01.344Z', age: 17},
      phone: '(594)-285-8050',
      cell: '(668)-612-4536',
      id: {name: '', value: null},
      picture: {
        large: 'https://randomuser.me/api/portraits/women/28.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/28.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/28.jpg',
      },
      nat: 'TR',
    },
    {
      gender: 'female',
      name: {title: 'Ms', first: 'Buse', last: 'Erginsoy'},
      location: {
        street: {number: 1128, name: 'Anafartalar Cd'},
        city: 'İstanbul',
        state: 'Samsun',
        country: 'Turkey',
        postcode: 13587,
        coordinates: {latitude: '70.8521', longitude: '117.3083'},
        timezone: {
          offset: '-7:00',
          description: 'Mountain Time (US & Canada)',
        },
      },
      email: 'buse.erginsoy@example.com',
      login: {
        uuid: '16f2116a-0a3b-4416-98b4-811349e74c8d',
        username: 'goldenlion193',
        password: 'pippen',
        salt: 'MmSsgz2H',
        md5: '5f92509eb7457c16341408f89f0ec3a5',
        sha1: 'a0619e0f011b177e502c4d1c377d21417ca163ed',
        sha256:
          'd7038f5c1a9a99998829f3a1c70a8a658b05567f2786c237739cd0cdecfc0913',
      },
      dob: {date: '1948-05-18T18:21:57.206Z', age: 75},
      registered: {date: '2006-02-01T07:55:01.344Z', age: 17},
      phone: '(594)-285-8050',
      cell: '(668)-612-4536',
      id: {name: '', value: null},
      picture: {
        large: 'https://randomuser.me/api/portraits/women/28.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/28.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/28.jpg',
      },
      nat: 'TR',
    },
    {
      gender: 'female',
      name: {title: 'Ms', first: 'Buse', last: 'Erginsoy'},
      location: {
        street: {number: 1128, name: 'Anafartalar Cd'},
        city: 'İstanbul',
        state: 'Samsun',
        country: 'Turkey',
        postcode: 13587,
        coordinates: {latitude: '70.8521', longitude: '117.3083'},
        timezone: {
          offset: '-7:00',
          description: 'Mountain Time (US & Canada)',
        },
      },
      email: 'buse.erginsoy@example.com',
      login: {
        uuid: '16f2116a-0a3b-4416-98b4-811349e74c8d',
        username: 'goldenlion193',
        password: 'pippen',
        salt: 'MmSsgz2H',
        md5: '5f92509eb7457c16341408f89f0ec3a5',
        sha1: 'a0619e0f011b177e502c4d1c377d21417ca163ed',
        sha256:
          'd7038f5c1a9a99998829f3a1c70a8a658b05567f2786c237739cd0cdecfc0913',
      },
      dob: {date: '1948-05-18T18:21:57.206Z', age: 75},
      registered: {date: '2006-02-01T07:55:01.344Z', age: 17},
      phone: '(594)-285-8050',
      cell: '(668)-612-4536',
      id: {name: '', value: null},
      picture: {
        large: 'https://randomuser.me/api/portraits/women/28.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/28.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/28.jpg',
      },
      nat: 'TR',
    },
  ]);
  return (
    <View className="py-3 flex-1">
      {/* Card-Container */}
      <ScrollView className="flex-1 gap-y-3 my-5">
        {people.map((item, i) => {
          // console.log(item.name);
          return (
            <View
              className="mx-5 flex-row justify-between py-3 px-4 rounded-lg bg-white"
              style={[styles.elevation]}
              key={i}>
              {/* Image */}
              <View className="flex-row" style={styles.elevation}>
                <Image
                  className="h-20 w-20 rounded-full mr-7"
                  source={{uri: item?.picture?.large}}
                />
                <View className="justify-center gap-y-1">
                  <Text className="font-bold">
                    {Object.values(item.name).join(' ')}
                  </Text>
                  <View className="flex-row gap-2">
                    <Icon name="rocket" size={20} color="red" />
                    <Text className="text-xs">
                      City: {item?.location?.city}
                    </Text>
                    <Text className="text-xs">
                      within {Math.floor(Math.random() * 100) + 1}Km
                    </Text>
                  </View>
                </View>
              </View>
              {/* Info */}
              <View className="absolute right-3 top-2">
                <Text className="font-medium capitalize">
                  {status[Math.floor(Math.random() * status.length)]}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Refine;

const styles = StyleSheet.create({
  elevation: {
    elevation: 5,
  },
});

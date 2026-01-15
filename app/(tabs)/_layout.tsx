import { Tabs } from 'expo-router';
import React from 'react';
import {Dimensions, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const { height, width } = Dimensions.get("window");

export default function TabLayout() {

  // @ts-ignore
    return (
      <Tabs screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
              position: 'absolute',
              bottom: 27,
              left: 16,
              right: 16,
              height: 72,
              elevation: 0,
              backgroundColor: 'white',
              borderRadius: 16,
              borderTopWidth: 0,
          }
      }}>

          <Tabs.Screen
              name='index'
              options={{
                  tabBarIcon: ({ focused }) => (
                      <View style={{
                          alignItems: 'center',
                          paddingTop: 10,
                          width: width/5

                      }}>
                          <MaterialCommunityIcons
                              name="home"
                              color={focused ? '#343434' : 'grey'}
                              size={24}
                          />

                          <Text>
                              Inicio
                          </Text>
                      </View>
                  )
              }}
          />
          <Tabs.Screen
              name='pantry'
              options={{
                  tabBarIcon: ({ focused }) => (
                      <View style={{
                          alignItems: 'center',
                          paddingTop: 10,
                          width: width/5

                      }}>
                          <MaterialCommunityIcons
                              name="food-variant"
                              color={focused ? '#FFBE0B' : 'grey'}
                              size={24}
                          />
                          <Text>
                              Mercaderia
                          </Text>
                      </View>
                  )
              }}
          />
          <Tabs.Screen
              name='fridge'
              options={{
                  tabBarIcon: ({ focused }) => (
                      <View style={{
                          alignItems: 'center',
                          paddingTop: 10,
                          width: width/5

                      }}>
                          <MaterialCommunityIcons
                              name="fridge"
                              color={focused ? '#2EC4B6' : 'grey'}
                              size={24}
                          />
                          <Text>
                              Refigerador
                          </Text>
                      </View>
                  )
              }}
          />
          <Tabs.Screen
              name='freezer'
              options={{
                  tabBarIcon: ({ focused }) => (
                      <View style={{
                          alignItems: 'center',
                          paddingTop: 10,
                          width: width/5

                      }}>
                          <Ionicons
                              name="ice-cream"
                              color={focused ? '#3a86ff' : 'grey'}
                              size={24}
                          />
                          <Text>
                              Congelador
                          </Text>
                      </View>
                  )
              }}
          />
      </Tabs>
  );
}

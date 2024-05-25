import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../HomeScreen';
import ExploreScreen from '../ExploreScreen';
import AddPostScreen from '../AddPostScreen';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Profile from '../Profile';
export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false
    }}>
      <Tab.Screen name="home" component={HomeScreen} 
      options={{
        tabBarLabel:({color})=>(
            <Text style={{ color:color, fontSize: 12, marginBottom: 3 }}>Home</Text>
        ),
        tabBarIcon:({color, size})=>(
            <Entypo name="home" size={24} color="black" />
        )
    }}
      />
      <Tab.Screen name="explore" component={ExploreScreen} 
      options={{
        tabBarLabel:({color})=>(
            <Text style={{ color:color, fontSize: 12, marginBottom: 3 }}>Explore</Text>
        ),
        tabBarIcon:({color, size})=>(
            <FontAwesome name="search" size={24} color="black" />
        )
    }}
      />
      <Tab.Screen name="addpost" component={AddPostScreen} 
      options={{
        tabBarLabel:({color})=>(
            <Text style={{ color:color, fontSize: 12, marginBottom: 3 }}>Add Post</Text>
        ),
        tabBarIcon:({color, size})=>(
            <MaterialCommunityIcons name="post" size={24} color="black" />
        )
    }}
      />
      <Tab.Screen name="profile" component={Profile} 
      options={{
        tabBarLabel:({color})=>(
            <Text style={{ color:color, fontSize: 12, marginBottom: 3 }}>Profile</Text>
        ),
        tabBarIcon:({color, size})=>(
            <FontAwesome name="user-circle" size={24} color="black" />
        )
    }}
      />
    </Tab.Navigator>
  )
}
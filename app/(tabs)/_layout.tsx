import { Tabs } from 'expo-router';
import React from 'react';
import { Platform ,View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ab9ff2',
        headerShown: false,
        headerStyle: {
          backgroundColor: '#999999',
        },
        headerShadowVisible: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: '#222222',
          display: 'flex',
          flexDirection: 'column',
          paddingTop:`${1}%`,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            focused?  <MaterialIcons name="home-filled" size={24} color={color} /> : <Octicons name={"home"} size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="collectible"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'grid' : 'grid-outline'} color={color} size={20} />
          ),
        }}
        
      />
      <Tabs.Screen
        name="swap"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="repeat" size={20} color={color} />
        ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ?'clock': 'clock-outline' }  size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={20}/>
          ),
        }}
      />
    </Tabs>
  );
}

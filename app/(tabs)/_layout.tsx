import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />

<Tabs.Screen
        name="emulador"
        options={{
          title: 'radio',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="radio" color={color} />,
        }}
      />

<Tabs.Screen
        name="estrutura"
        options={{
          title: 'circle',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="circle" color={color} />,
        }}
      />

<Tabs.Screen
        name="sobre"
        options={{
          title: 'star',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="star" color={color} />,
        }}
      />

      
    </Tabs>

  

    
  );
}
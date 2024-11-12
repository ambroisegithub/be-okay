import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme, Image, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#339206',
        tabBarInactiveTintColor: '#7d7d7d',
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: -5,
          borderTopWidth: 1,
          borderTopColor: "#BEBAB3",
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIconStyle: {
          marginBottom: -14,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.activeLabel : styles.inactiveLabel}>
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/homeIcon.png')} 
              style={[styles.imageIcon, focused && styles.activeIcon]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="MedicalReport"
        options={{
          title: "Medical Report",
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.activeLabel : styles.inactiveLabel}>
              Medical Report
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/medicalreporticon.png')} 
              style={[styles.imageIcon, focused && styles.activeIcon]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Emergency"
        options={{
          title: "Emergency",
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.activeLabel : styles.inactiveLabel}>
              Emergency
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/CarIcon.png')} 
              style={[styles.imageIcon, focused && styles.activeIcon]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Hospitals"
        options={{
          title: "Hospitals",
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.activeLabel : styles.inactiveLabel}>
              Hospitals
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/hospital.png')} 
              style={[styles.imageIcon, focused && styles.activeIcon]}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeLabel: {
    color: "#339206",
    fontWeight: "600",
    marginTop: 5,
  },
  inactiveLabel: {
    color: "#7d7d7d",
    marginTop: 5,
  },
  imageIcon: {
    width: 30,
    height: 30,
    tintColor: '#7d7d7d', // Inactive color
  },
  activeIcon: {
    tintColor: '#339206', // Active color
  },
});

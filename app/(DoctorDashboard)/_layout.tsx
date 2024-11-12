import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1E8161",
        tabBarInactiveTintColor: "#7d7d7d",
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 5,
          borderTopWidth: 1,
          borderTopColor: "#BEBAB3",
          backgroundColor: "#fff",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIconStyle: {
          marginBottom: -5,
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
              source={require("@/assets/Home.png")}
              style={[styles.imageIcon, focused && styles.activeIcon]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="DoctorSetScheduleAppointment"
        options={{
          title: "Calendar",
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.activeLabel : styles.inactiveLabel}>
              Calendar
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/Calendars.png")}
              style={[styles.imageIcon, focused && styles.activeIcon]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="DoctorEmergency"
        options={{
          title: "Emergency",
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.activeLabel : styles.inactiveLabel}>
              Emergency
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/Emergrncy2.png")}
              style={[styles.imageIcon, focused && styles.activeIcon]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="MyCommunity"
        options={{
          title: "Community",
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.activeLabel : styles.inactiveLabel}>
              Community
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/Community.png")}
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
    color: "#1E8161",
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
    tintColor: "#7d7d7d", 
  },
  activeIcon: {
    tintColor: "#1E8161", 
  },
});

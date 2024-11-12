import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header1 = () => {
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [fullName, setFullName] = useState('');
  const router =useRouter();
  const navigateTCheckSupport = () => {

    router.push("/(PatientDashboard)/(home)/CheckSupport");
  };

  const navigateToEditProfile = () => {
    router.push("/(PatientDashboard)/(home)/PatientProfile");
  };
  const navigateToLogout = () => {
    router.push("/screen/Patient/LoginPage");
  };

  const navigateToProfile = () => {
    router.push("/(PatientDashboard)/(home)/EditProfile");
  };
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = await AsyncStorage.getItem("accessToken");
        if (token) {
          const imageResponse = await axios.get(
            "https://beok.onrender.com/users/profile-picture/",
            {
              headers: {
                Authorization: `JWT ${token}`,
              },
            }
          );
          setProfileImageUrl(imageResponse.data.image);

          const profileResponse = await fetch(
            "https://beok.onrender.com/patients/profile/",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `JWT ${token}`,
              },
            }
          );
          const profileData = await profileResponse.json();
          console.log(profileData);
          setFullName(profileData.personal_information.full_name); 
        } else {
          console.log("No access token found");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigateToEditProfile}>
        <Image
            source={profileImageUrl ? { uri: profileImageUrl } : require("@/assets/ProfileImage.png")}

          style={styles.profileImage}
        />
        <Pressable style={styles.EditProfile}
        onPress={navigateToProfile}
        >
          <Text style={styles.edittext}>
            Edit
          </Text>
        </Pressable>
        <View style={styles.activeIcon} />
      </TouchableOpacity>
      <View style={styles.profileDetails}>
      <Text style={styles.profileName}>{fullName}</Text>
        <Text style={styles.ProfileName}>Profile</Text>
      </View>
      <View style={styles.logoutNotificationContainer}>
        <TouchableOpacity style={styles.logout}
        onPress={navigateToLogout}
        >
          <Text style={styles.LogoutText}>Logout</Text>
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={navigateTCheckSupport}>
            <Image source={require("@/assets/MessengerIcon.png")}/>
          </TouchableOpacity>
          <Ionicons name="notifications-sharp" size={30} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Header1;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#93BD68",
    padding: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 100,
    objectFit:"fill",
    // paddingTop:40
  },
  profileDetails: {
    display: "flex",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  profileName: {
    color: "#FFFDFD",
    fontSize: 18,
    fontWeight: "bold",
  },
  secondName: {
    color: "#FFFDFD",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 80,
    position: "relative",
    top: 10,
  },
  subtitle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 14,
    marginLeft: 15,
  },
  activeIcon: {
    position: "absolute",
    bottom: 55,
    right: 0,
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: "#18B415",
  },
  ProfileName: {
    fontSize: 16,
    marginTop: 10,
    color: "white",
  },
  logoutNotificationContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  logout: {
    position: "relative",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    bottom: 7,
    width: 66,
    height: 27,
    borderRadius: 10,
  },
  LogoutText: {
    fontSize: 16,
    color: "#8BB85C",
    fontWeight: "bold",
  },
  EditProfile:{
    alignItems:"center",
    marginTop:2,
  },
  edittext:{
    color:"#fff",
    fontSize:15,
    fontWeight:"bold"

  }
});

// @ts-nocheck
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ConsultationOptions from "./ConsultationOptions";
import { useRouter } from "expo-router";
import Header1 from "@/components/ReusableComponent/Header1";
const ReproductiveOrgan = () => {

const router = useRouter();
  const navigateToBack = () => {
  router.push("./ChatBoxConsultationBodyImagemapping");
  };

  const navigateToConsultation = (bodyPart: String) => {
    router.push("Consultation", { selectedBodyPart: bodyPart });
  };

  const handleOptionSelected = (option:string) => {
    router.push("Consultation", {
      selectedConsultation: {
        title: option.fullName,
        image: option.image
      }
    });
  };


return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Header1/>
          <ConsultationOptions onOptionSelected={handleOptionSelected} />
        <View>
          <TouchableOpacity onPress={navigateToBack} style={styles.backButton}>
            <AntDesign name="arrowleft" style={styles.backButtonText} />
            <Text style={styles.headerIllness}>Pelvis</Text>
          </TouchableOpacity>
          <View style={styles.headerContainer}>
            <View>
              <Image source={require("@/assets/ReproductiveOrgan.png")} />
            </View>
            <View>
              <TouchableOpacity onPress={() => navigateToConsultation('Urinary Problem')} style={styles.detailOption}>
                <View style={styles.circleImage}>
                  <Image source={require("@/assets/pee.png")} />
                </View>
                <Text style={styles.detailOptionText}>Urinary Problem</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToConsultation('Reproductive Health')} style={styles.detailOption}>
                <View style={styles.circleImage}>
                  <Image source={require("@/assets/Reproductive-Health.png")} />
                </View>
                <Text style={styles.detailOptionText}>Reproductive Health</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToConsultation('Lower Back')} style={styles.detailOption}>
                <View style={styles.circleImage}>
                  <Image source={require("@/assets/Lower-Back.png")} />
                </View>
                <Text style={styles.detailOptionText}>Lower Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToConsultation('Bladder')} style={styles.detailOption}>
                <View style={styles.circleImage}>
                  <Image source={require("@/assets/bladder.png")} />
                </View>
                <Text style={styles.detailOptionText}>Bladder</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToConsultation('Kidney')} style={styles.detailOption}>
                <View style={styles.circleImage}>
                  <Image source={require("@/assets/Kidney.png")} />
                </View>
                <Text style={styles.detailOptionText}>Kidney</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToConsultation('Anal problem')} style={styles.detailOption}>
                <View style={styles.circleImage}>
                  <Image source={require("@/assets/anus.png")} />
                </View>
                <Text style={styles.detailOptionText}>Anal problem</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigateToConsultation('Pelvic Pain')} style={styles.detailOption}>
                <View style={styles.circleImage}>
                  <Image source={require("@/assets/Pelvic-Pain.png")} />
                </View>
                <Text style={styles.detailOptionText}>Pelvic Pain</Text>
              </TouchableOpacity >
            </View>
          </View>
        </View>
      </ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    paddingBottom: 60, // Space for the bottom tab bar
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#93BD68",
    padding: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 25,
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
    top: 25,
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
  headerIllness: {
    fontSize: 16,
    fontWeight: "regular",
  },
  backButton: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    gap: 5,
  },
  backButtonText: {
    fontSize: 20,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  detailOption: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  circleImage: {
    width: 50,
    height: 50,
    borderRadius: 25,  
    borderColor: 'grey',
    borderWidth: 0.5,
    justifyContent: 'center',  
    alignItems: 'center',       
  },
  detailOptionText: {},
  DeseasesContainer: {
    display: "flex",
    flexDirection: "column",
  },
  subDeseasesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ViewAll: {
    alignItems: "flex-end",
    marginTop: 5,
  },
  SupDeseasesContainer: {
    margin: 20,
    marginTop: 5,
  },
  addressConsultation: {
    marginBottom: 10,
    color: "black",
    fontWeight: "semibold",
  },
  Others: {
    backgroundColor: "#93BD68",
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
    color: "white",
    width: 135,
  },
  othersText: {
    color: "white",
  },
  bottomTabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  tabItem: {
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    color: "#222",
  },
  activeTab: {
    backgroundColor: '#e0f7e4',
  },
  activeTabText: {
    color: "#93BD68",
  },
});

export default ReproductiveOrgan;

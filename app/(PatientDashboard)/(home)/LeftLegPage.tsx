// @ts-nocheck
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ConsultationOptions from "./ConsultationOptions";
import { useRouter } from "expo-router";
import Header1 from "@/components/ReusableComponent/Header1";

const LeftLegPage = () => {
const router =useRouter();
  const navigateToBack = () => {
    router.push("./ChatBoxConsultationBodyImagemapping");
  };
  const navigateToConsultation = (bodyPart:string) => {
    router.push("./Consultation", { selectedBodyPart: bodyPart });
  };

  const handleOptionSelected = (option) => {
    router.push("./Consultation", {
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
            <Text style={styles.headerIllness}>Leg illness</Text>
          </TouchableOpacity>
          <View style={styles.headerContainer}>
            <View>
              <Image source={require("@/assets/LeftLeg.png")}/>
            </View>
            <View style={styles.detailOptionContainer}>
            <TouchableOpacity onPress={() => navigateToConsultation('Right leg Injury')} style={styles.detailOption}>
              <View style={styles.circleImage}>
                      <Image source={require("@/assets/injury.png")} style={styles.organImage} />
                    </View>
                <Text style={styles.detailOptionText}>Injury</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToConsultation('Right leg pain')} style={styles.detailOption}>
                  <View style={styles.circleImage}>
                        <Image source={require("@/assets/leg-pain.png")} style={styles.organImage} />
                      </View>
                <Text style={styles.detailOptionText}>Leg pain</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToConsultation('Right leg skin')} style={styles.detailOption}>
                  <View style={styles.circleImage}>
                      <Image source={require("@/assets/skinleg.png")} style={styles.organImage} />
                  </View>
                <Text style={styles.detailOptionText}>Skin</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToConsultation('Right leg knee pain')} style={styles.detailOption}>
                 <View style={styles.circleImage}>
                    <Image source={require("@/assets/knee-pain.png")} style={styles.organImage} />
                  </View>
                <Text style={styles.detailOptionText}>Knee Pain</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToConsultation('Right leg foot & ankle')} style={styles.detailOption}>
                 <View style={styles.circleImage}>
                    <Image source={require("@/assets/foot.png")} style={styles.organImage} />
                  </View>
                <Text style={styles.detailOptionText}>Foot & Ankle</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.DescribeIlliness}>
                <Text style={styles.DescribeIllinessText}>Describe illness </Text>
              </TouchableOpacity>
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
    paddingBottom: 60,
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
  DescribeIlliness: {
    backgroundColor: "#93BD68",
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
    color: "white",
    width:'80%',
    margin:"10%"
  },
  DescribeIllinessText: {
    color: "white",
    fontSize:12,
    fontWeight:'regular'
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
  detailOptionContainer:{
    display:"flex",
    flexDirection:"column",
  
  },
  
DeseasesImage:{
   width:36,
   height:36
},
organImage: {
  width: 30,
  height: 30,
  resizeMode: 'contain',
  alignItems: 'center',
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

});

export  default LeftLegPage;

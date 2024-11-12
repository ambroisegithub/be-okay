
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";
const { height } = Dimensions.get("window");
import Header1 from "@/components/ReusableComponent/Header1";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
const MainBodyMapPage = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedPart, setSelectedPart] = useState<string | null>(null); 
  const router=useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedPart(option);
    switch (option) {
      case "Head":
        router.push("/(PatientDashboard)/(home)/Head");
        break;
      case "NeckChest":
        router.push("/(PatientDashboard)/(home)/NeckChest");

        break;
      case "Trunk":
        router.push("/(PatientDashboard)/(home)/TrunkPage");

        break;
      case "ReproductiveOrgan":
        router.push("/(PatientDashboard)/(home)/ReproductiveOrgan");

        break;
      case "LeftArm":
        router.push("/(PatientDashboard)/(home)/LeftArmPage");

        break;
      case "RightArm":
        router.push("/(PatientDashboard)/(home)/RightArmPage");

        break;
      case "LeftLeg":
        router.push("/(PatientDashboard)/(home)/LeftLegPage");

        break;
      case "RightLeg":
        router.push("/(PatientDashboard)/(home)/RightLegPage");

        break;
      default:
        break;
    }
  };

  const consultationOptions = [
    { shortName: "General", fullName: "General Medicine", image: require("@/assets/Consultation/medicine.png") },
    { shortName: "Mental", fullName: "Mental Health", image: require("@/assets/Consultation/alzeimer.png") },
    { shortName: "Fertility", fullName: "Fertility Counseling", image: require("@/assets/Consultation/pregnancy-virus.png")},
    { shortName: "STD's", fullName: "STD's", image: require("@/assets/Consultation/sex-problem.png") },
    { shortName: "Pediatric", fullName: "Pediatric Medicine", image: require("@/assets/Consultation/pediatric-surgery.png")},
    { shortName: "Gynecology", fullName: "Gynecology", image: require("@/assets/Consultation/Gynecology.png") },
    { shortName: "Chronic", fullName: "Chronic illness", image: require("@/assets/Consultation/awareness.png")},
    { shortName: "Intestine", fullName: "Intestine Medicine", image: require("@/assets/Consultation/intestine.png") },
  ];

  const handleOptionSelected = (option: { shortName: string, fullName: string, image: any }) => {
    router.push("./Consultation", {
      selectedConsultation: {
        title: option.fullName,
        image: option.image
      } 
    });
  };

  const consultationData = [
    {
      title: "Alzheimer",
      image: require("@/assets/Consultation/alzeimer.png"),
    },
    {
      title: "Awareness",
      image: require("@/assets/Consultation/awareness.png"),
    },
    {
      title: "Gynecology",
      image: require("@/assets/Consultation/Gynecology.png"),
    },
    {
      title: "Intestine",
      image: require("@/assets/Consultation/intestine.png"),
    },
    {
      title: "Medicine",
      image: require("@/assets/Consultation/medicine.png"),
    },
    {
      title: "Pediatric Surgery",
      image: require("@/assets/Consultation/pediatric-surgery.png"),
    },
    {
      title: "Pregnancy Virus",
      image: require("@/assets/Consultation/pregnancy-virus.png"),
    },
    {
      title: "Sex Problem",
      image: require("@/assets/Consultation/sex-problem.png"),
    },
    {
      title: "Sex Problem",
      image: require("@/assets/Consultation/sex-problem.png"),
    },
    {
      title: "Sex Problem",
      image: require("@/assets/Consultation/sex-problem.png"),
    },
    {
      title: "Sex Problem",
      image: require("@/assets/Consultation/sex-problem.png"),
    },
  ];



  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <View style={styles.header}>
            <Header1 />
          </View>

          <View style={styles.consultContaiiner}>
            <View style={styles.consultionContainer}>
              <View style={styles.consultionContainerText}>
                <Text style={styles.consultTitle}>Consult with Be Okay</Text>
                <Text style={styles.howareyou}>
                  How are you doing? If there is any help you need, please let
                  Be-Okay know.
                </Text>
              </View>
              <View style={styles.closeIconContainer}>
                <Ionicons name="close-circle" style={styles.closeCircle} />
              </View>
            </View>
          </View>

          <View style={styles.AddressConsultationContainer}>
            <Text style={styles.AdressyourConsultation}>
              Address your Consultation
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {consultationOptions.map((option, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.optionButton}
                    onPress={() => handleOptionSelected(option)}
                  >
                    <Text style={styles.optionText}>{option.shortName}</Text>
                  </TouchableOpacity>
                ))}
            </ScrollView>


            <TouchableOpacity
              style={styles.viewAllContainer}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.viewAllContainerText}>View All</Text>
            </TouchableOpacity>

            {dropdownVisible && (
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => handleOptionSelect("Chest")}>
                  <Text style={styles.dropdownItem}>Chest</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleOptionSelect("Abdomen")}>
                  <Text style={styles.dropdownItem}>Abdomen</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleOptionSelect("Back")}>
                  <Text style={styles.dropdownItem}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleOptionSelect("LeftArm")}>
                  <Text style={styles.dropdownItem}>Left Arm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleOptionSelect("RightArm")}
                >
                  <Text style={styles.dropdownItem}>Right Arm</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View>
            <Text style={styles.questionText}>Where do you feel the pain?</Text>
            <View style={styles.bodyMapContainer}>
              <Image
                source={require("@/assets/body2.png")}
                style={styles.bodyMapImage}
              />
              <TouchableOpacity
                style={styles.headTouchArea}
                onPress={() => handleOptionSelect("Head")}
              />
              <TouchableOpacity
                style={styles.NeckChestImageArea}
                onPress={() => handleOptionSelect("NeckChest")}
              />

              {/* ReproductiveOrgan */}
              <TouchableOpacity
                style={styles.trunkTouchArea}
                onPress={() => handleOptionSelect("Trunk")}
              />
              <TouchableOpacity
                style={styles.ReproductiveOrganArea}
                onPress={() => handleOptionSelect("ReproductiveOrgan")}
              />

              <TouchableOpacity
                style={styles.leftArmTouchArea}
                onPress={() => handleOptionSelect("LeftArm")}
              />
              <TouchableOpacity
                style={styles.rightArmTouchArea}
                onPress={() => handleOptionSelect("RightArm")}
              />
              <TouchableOpacity
                style={styles.leftLegTouchArea}
                onPress={() => handleOptionSelect("LeftLeg")}
              />
              <TouchableOpacity
                style={styles.rightLegTouchArea}
                onPress={() => handleOptionSelect("RightLeg")}
              />
            </View>
          </View>
        </View>
      </ScrollView>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>

            <ScrollView>
              <View style={styles.gridContainer}>
                {consultationData.map((item, index) => (
                  <View key={index} style={styles.gridItem}>
                    <View style={styles.imageLogo}>
                      <Image source={item.image} style={styles.image} />
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
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
    zIndex: 1,
    marginBottom: 120,
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

  buttonClose: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 15,
    marginTop: 5,
    padding: 10,
    paddingBottom: 0,
    paddingTop: 0,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridItem: {
    width: "30%",
    alignItems: "center",
    marginVertical: 10,
    gap: 5,
    marginRight: 5,
  },
  imageLogo: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#0C7751",
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    marginTop: 8,
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
  },
  textStyle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
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
  consultionContainer: {
    backgroundColor: "#FFF6C5",
    width: "100%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
  },
  consultionContainerText: {
    padding: 20,
    width: "80%",
  },
  consultTitle: {
    fontSize: 18,
    color: "#809502",
    fontWeight: "bold",
    marginBottom: 5,
  },
  howareyou: {
    color: "#809502",
    fontWeight: "regular",
    fontSize: 14,
  },
  consultContaiiner: {
    padding: 20,
    paddingBottom: 10,
    marginBottom: 10,
  },
  closeCircle: {
    color: "#93BD68",
    fontSize: 25,
  },

  modalContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  modalView: {
    width: "70%",
    height: height * 0.5,
    backgroundColor: "#D9D9D9",
    padding: 5,
    paddingTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    position: "absolute",
    // top:270,
    right: 10,
  },

  closeIconContainer: {
    position: "relative",
    height: 30,
    top: 10,
    left: 40,
  },
  AddressConsultationContainer: {
    backgroundColor: "#FEFAFA",
    padding: 20,
    paddingTop: 0,
  },
  ConsultationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    marginTop: 5,
  },
  AdressyourConsultation: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "regular",
    marginBottom:5
  },
  adressCategory: {
    padding: 2,
    paddingRight: 0,
  },
  adressCategoryText: {
    color: "#5C5C5C",
    fontSize: 12,
    fontWeight: "regular",
  },
  viewAllContainer: {
    alignItems: "flex-end",
  },
  viewAllContainerText: {
    fontSize: 10,
    fontWeight: "regular",
    marginTop: 2,
  },
  dropdown: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    marginTop: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 14,
    color: "#333",
  },
  questionText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  bodyMapContainer: {
    position: "relative",
    alignItems: "center",
  },
  bodyMapImage: {
    width: 131,
    height: 313.56,
    resizeMode: "contain",
  },
  headTouchArea: {
    position: "absolute",
    top: 2,
    width: 40,
    height: 44,
    cursor: "pointer",
  },
  NeckChestImageArea: {
    position: "absolute",
    top: 46,
    width: 48,
    height: 47,
    cursor: "pointer",
  },
  trunkTouchArea: {
    position: "absolute",
    top: 96,
    width: 50,
    height: 60,
  },
  ReproductiveOrganArea: {
    position: "absolute",
    top: 157,
    width: 15,
    height: 18,
    cursor: "pointer",
  },
  leftArmTouchArea: {
    position: "absolute",
    top: 60,
    left: 145,
    width: 30,
    height: 127,
    transform: [{ rotate: "8deg" }],
    opacity: 0,
    cursor: "pointer",
  },
  rightArmTouchArea: {
    position: "absolute",
    top: 60,
    right: 145,
    width: 30,
    height: 127,
    transform: [{ rotate: "-8deg" }],
    cursor: "pointer",
  },
  leftLegTouchArea: {
    position: "absolute",
    top: 160,
    left: 173,
    width: 28,
    height: 150,
    opacity: 0,
    cursor: "pointer",
  },
  rightLegTouchArea: {
    position: "absolute",
    top: 160,
    right: 173,
    width: 28,
    height: 150,
    opacity: 0,
    cursor: "pointer",
  },
  selectedCategoryText: {
    fontWeight: "bold",
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
    backgroundColor: "#e0f7e4",
  },
  activeTabText: {
    color: "#93BD68",
  },
  optionButton:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  optionText:{
    marginRight:10
  }
});

export default MainBodyMapPage;
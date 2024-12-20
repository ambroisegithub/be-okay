import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ConsultationOptions from "./ConsultationOptions";
import {
  useNavigation
} from '@react-navigation/native';
import { useRouter } from "expo-router";
import Header1 from "@/components/ReusableComponent/Header1";
interface ConsultationOption {
  title: string;
  image: any;
  shortName: string;
}
interface RouteParams {
  selectedBodyPart?: string;
  selectedConsultation?: {
    title: string;
    image: any;
    shortName?: string;  // Optional in route params
  };
}
type ConsultationParams = {
  selectedBodyPart?: string;
  selectedConsultation?: {
    title: string;
    image: any;
    shortName?: string;
  };
};

type ConsultationScreenRouteProp = RouteProp<
  Record<string, RouteParams>,
  string
>;

const Consultation = () => {
  const router = useRouter();
  const route = useRoute<ConsultationScreenRouteProp>();
  const { selectedBodyPart, selectedConsultation } = route.params || {};
  const [description, setDescription] = useState("");
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState<ConsultationOption | null>(null);

  const navigateToPreConsultationAI = async () => {
    try {
      const selectedOption = await AsyncStorage.getItem("selectedOption");
      if (selectedOption === "checkup") {
        router.push("./ConsultationWithAI");
      } else if (selectedOption === "consultation") {
        router.push("./ConsultationWithDoctor");
      } else if (selectedOption === "homecare") {
        router.push("./ConsultationWithHomecareForm");
      } else {
        Alert.alert("Error", "No option selected in AsyncStorage");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to retrieve data");
      console.error(error);
    }
  };

  const getBodyPartImage = () => {
    console.log("selectedBodyPart:", selectedBodyPart);
    if (selectedConsultation?.image) {
      return selectedConsultation.image;
    } else if (selectedBodyPart) {
      switch (selectedBodyPart) {
        case "eye":
          return require("@/assets/eye.png");
        case "mouth":
          return require("@/assets/Mouth.png");
        case "teeth":
          return require("@/assets/teeth.png");
        case "tongue":
          return require("@/assets/tongue.png");
        case "ear":
          return require("@/assets/ear.png");
        case "nose":
          return require("@/assets/nose.png");
        case "facial":
          return require("@/assets/facial.png");
        case "head":
          return require("@/assets/relatedHead.png");
        case "Lung":
          return require("@/assets/Lung.png");

        // Trunk-related parts
        case "Chest":
          return require("@/assets/chest.png");
        case "Neck-pain":
          return require("@/assets/neck-pains.png");
        case "Heart":
          return require("@/assets/heart.png");
        case "Shoulder":
          return require("@/assets/shouder.png");
        case "Lungs":
          return require("@/assets/lungss.png");
        case "Breathing-problems":
          return require("@/assets/breathing-problem.png");
        case "Skin-rashes":
          return require("@/assets/skinonneck.png");

        // reproductive organ
        case "Urinary Problem":
          return require("@/assets/pee.png");
        case "Reproductive Health":
          return require("@/assets/Reproductive-Health.png");
        case "Lower Back":
          return require("@/assets/Lower-Back.png");
        case "Bladder":
          return require("@/assets/bladder.png");
        case "Kidney":
          return require("@/assets/Kidney.png");
        case "Anal problem":
          return require("@/assets/anus.png");
        case "Pelvic Pain":
          return require("@/assets/Pelvic-Pain.png");

        //Right arm
        case "Right Injury":
          return require("@/assets/Injury-arm.png");
        case "Right elbow injury":
          return require("@/assets/elbow.png");
        case "Right Elbow Pain":
          return require("@/assets/elbow-pain.png");
        case "Right Skin Rashes":
          return require("@/assets/skinrashes.png");

        //Left arm
        case "Left Injury":
          return require("@/assets/Injury-arm.png");
        case "left elbow injury":
          return require("@/assets/elbow.png");
        case "left Elbow Pain":
          return require("@/assets/elbow-pain.png");
        case "Left Skin Rashes":
          return require("@/assets/skinrashes.png");

        //Left leg
        case "Left leg Injury":
        case "Left leg Skin illness":
        case "Left leg Bursitis":
        case "Left leg others":
          return require("@/assets/LeftLeg.png");

        //RIGHT leg
        case "Right leg Injury":
          return require("@/assets/Injury-arm.png");
        case "Right leg pain":
          return require("@/assets/leg-pain.png");
        case "Right leg skin":
          return require("@/assets/skinleg.png");
        case "Right leg knee pain":
          return require("@/assets/knee-pain.png");
        case "Right leg foot & ankle":
          return require("@/assets/foot.png");

        //stomach part
        case "stomach":
          return require("@/assets/Stomach.png");
        case "ribs":
          return require("@/assets/ribs.png");
        case "digestion-food":
          return require("@/assets/fast-food.png");
        case "back pain":
          return require("@/assets/back pain.png");
        case "skin":
          return require("@/assets/skin.png");
        case "Reproductive":
          return require("@/assets/reproductive.png");
        default:
          return require("@/assets/Lung.png");
      }
    } else if (selectedConsultation) {
      return selectedConsultation.image; // Ensure correct image is used
    }
    return require("@/assets/Lung.png");
  };

  const getBodyPartName = () => {
    console.log("selectedBodyPart (name):", selectedBodyPart);
    if (selectedConsultation?.title) {
      return selectedConsultation.title;
    } else if (selectedBodyPart) {
      switch (selectedBodyPart) {
        case "eye":
          return "Eyes";
        case "mouth":
          return "Mouth";
        case "teeth":
          return "Teeth";
        case "tongue":
          return "Tongue";
        case "ear":
          return "Ears";
        case "nose":
          return "Nose";
        case "facial":
          return "Facial skincare";
        case "head":
          return "Head Related";
        case "lungs":
          return "Lungs";

        // Trunk-related parts
        case "Chest":
          return "Chest";
        case "Neck-pain":
          return "Neck pain";
        case "Heart":
          return "Heart";
        case "Shoulder":
          return "Shoulder";
        case "Lungs":
          return "Lungs";
        case "Breathing-problems":
          return "Breathing problems";
        case "Skin-rashes":
          return "Skin rashes";
        //Right arm
        case "Right Injury":
          return "Injury";
        case "Right elbow injury":
          return "Elbow Injury";
        case "Right Elbow Pain":
          return "Elbow Pain";
        case "Right Skin Rahes":
          return "Skin Rashes";

        case "stomach":
          return "Stomach pain";
        case "ribs":
          return "Ribs";
        case "digestion-food":
          return "Food Poisoning";
        case "back pain":
          return "Back Pain";
        case "skin":
          return "Skin";
        case "Reproductive":
          return "Reproduction health";

        //Left arm
        case "Left Injury":
          return "Injury";
        case "left elbow injury":
          return "Elbow Injury";
        case "left Elbow Pain":
          return "Elbow Pain";
        case "Left Skin Rashes":
          return "Skin Rashes";

        //right arm
        case "Right Injury":
          return "Injury";
        case "Right elbow injury":
          return "Elbow Injury";
        case "Right Elbow Pain":
          return "Elbow Pain";
        case "Right Skin Rashes":
          return "Skin Rashes";

        //left leg
        case "Left leg Injury":
          return "Injury";
        case "Left leg Skin illness":
          return "Leg pain";
        case "Left leg Bursitis":
          return "Bursitis";
        case "Left leg other":
          return "Other";

        //Right Leg
        case "Right leg Injury":
          return "Injury";
        case "Right leg pain":
          return "Leg pain";
        case "Right leg skin":
          return "Skin";
        case "Right leg knee pain":
          return "Knee Pain";
        case "Right leg foot & ankle":
          return "Foot & Ankle";

        //pelvic
        case "Urinary Problem":
          return "Urinary Problem";
        case "Reproductive Health":
          return "Reproductive Health";
        case "Lower Back":
          return "Lower Back";
        case "Bladder":
          return "Bladder";
        case "Kidney":
          return "Kidney";
        case "Anal problem":
          return "Anal problem";
        case "Pelvic Pain":
          return "Pelvic Pain";

        default:
          return "Others";
      }
    } else if (selectedConsultation) {
      return selectedConsultation.title;
    }
    return "Default Body Part";
  };
  useEffect(() => {
    if (route.params?.selectedConsultation) {
      const { title, image, shortName } = route.params.selectedConsultation;
      setSelectedOption({
        title,
        image,
        shortName: shortName || 'Default' 
      });
    }
  }, [route.params]);
  const handleOptionSelected = (option: any) => {
    console.log("Option selected:", option);
    setSelectedOption(option);
    router.setParams({
      selectedConsultation: option,
    });
  };

  return (
    <View style={styles.container}>
      <Header1 />
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.ContentContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <AntDesign name="arrowleft" style={styles.backButtonText} />
            <Text style={styles.headerIllness}>Consult with Be Okay</Text>
          </TouchableOpacity>
          <View style={styles.wetakecarecontainer}>
            <Text style={styles.wetakecare}>
              We take care of your health as is variable to you!
            </Text>
          </View>
          <ConsultationOptions
      onOptionSelected={handleOptionSelected}
    />

          <View>
            <Text>Please select</Text>
            <View style={styles.LungContainer}>
      <View style={styles.circleImage}>
        <Image
          source={selectedOption?.image || getBodyPartImage()}
          style={styles.bodyPartImage}
        />
      </View>
      <View style={styles.centerText}>
        <Text style={styles.Lungs}>
          {selectedOption?.title || getBodyPartName()}
        </Text>
      </View>
    </View>
            <View>
              <Text>Describe your illness</Text>
              <TextInput
                style={styles.textArea}
                placeholder="Enter description"
                placeholderTextColor="#666"
                numberOfLines={4}
                multiline={true}
                onChangeText={setDescription}
                value={description}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={navigateToPreConsultationAI}
          >
            <Text style={styles.textButton}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Consultation;

const styles = StyleSheet.create({
  bodyPartImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  centerText: {
    left: 15,
    top: 24,
    justifyContent: "center",
    alignItems: "center",
  },
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
    padding: 15,
    paddingBottom: 20,
    paddingTop: 20,
  },
  profileImage: {
    width: 25,
    height: 25,
    objectFit: "contain",
  },
  checkProfileConatiner: {
    backgroundColor: "#B2C3FF",
    width: 40,
    height: 40,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  profileDetails: {
    display: "flex",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  profileName: {
    color: "#FFFDFD",
    fontSize: 14,
    fontWeight: "regular",
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
    alignItems: "center",
    gap: 2,
    marginBottom: 20,
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
    marginTop: 25,
    marginBottom: 50,
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
    backgroundColor: "#e0f7e4",
  },
  activeTabText: {
    color: "#93BD68",
  },
  Notification: {
    color: "white",
    backgroundColor: "white",
  },
  NotificationContainer: {
    width: 36,
    height: 36,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  BeokayLog: {
    width: 40,
    height: 33,
  },
  ImageBeokay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 2,
  },
  wetakecarecontainer: {
    marginBottom: -50,
  },
  wetakecare: {
    width: "50%",
    color: "#7E7E7E",
    fontWeight: "regular",
    fontSize: 12,
    lineHeight: 15,
    marginBottom: -90,
  },
  ContentContainer: {
    padding: 30,
    paddingTop:150
  },
  LungContainer: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
    gap: 10,
  },
  Lungs: {
    fontSize: 20,
    fontWeight: "regular",
    marginBottom: 50,
  },
  textArea: {
    height: 100,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
    marginTop: 20,
  },
  nextButton: {
    width: "100%",
    backgroundColor: "#93BD68",
    padding: 10,
    borderRadius: 36,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginTop: 70,
  },
  textButton: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  circleImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: "grey",
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="AppointmentDetails" />
      <Stack.Screen name="ChatBoxConsultationBodyImagemapping" />
      <Stack.Screen name="CheckSupport" />
      <Stack.Screen name="Checkup" />
      <Stack.Screen name="Consultation" />
      <Stack.Screen name="ConsultationResult" />
      <Stack.Screen name="ConsultationTypeResult" />
      <Stack.Screen name="ConsultationWithAI" />
      <Stack.Screen name="ConsultationWithDoctor" />
      <Stack.Screen name="ConsultationWithHomecareForm" />
      <Stack.Screen name="Eprescriptionform" />
      <Stack.Screen name="EditProfile" />
      <Stack.Screen name="Head" />
      <Stack.Screen name="HomeCare" />
      <Stack.Screen name="LeftArmPage" />
      <Stack.Screen name="LeftLegPage" />
      <Stack.Screen name="MedicalLabTest" />
      <Stack.Screen name="MedicalRecommendationForm" />
      <Stack.Screen name="MedicalReport" />
      <Stack.Screen name="NeckChest" />
      <Stack.Screen name="PatientBookDoctorAppointment" />
      <Stack.Screen name="PatientsDashbord" />
      <Stack.Screen name="paymentResult" />
      <Stack.Screen name="ReproductiveOrgan" />
      <Stack.Screen name="RightArmPage" />
      <Stack.Screen name="RightLegPage" />
      <Stack.Screen name="TrunkPage" />
      <Stack.Screen name="PatientMessaging" />
    </Stack>
  );
}

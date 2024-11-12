import PatientBookDoctorAppointmentHeader from "@/components/ReusableComponent/PatientBookDoctorAppointmentHeader";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";

const generateAvailableDates = () => {
  const schedule: Record<string, string[]> = {};
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);
    
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      const dateString = currentDate.toISOString().split('T')[0];
      
      const timeSlots = [
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
      ];
      
      schedule[dateString] = timeSlots;
    }
  }
  
  return schedule;
};

const schedule = generateAvailableDates();

const bookedTimes = ["09:30", "14:30"];

const PatientBookDoctorAppointment = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  React.useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (schedule[today]) {
      setSelectedDate(today);
    } else {
      const nextAvailableDate = Object.keys(schedule).find(date => date >= today);
      if (nextAvailableDate) {
        setSelectedDate(nextAvailableDate);
      }
    }
  }, []);

  const onDayPress = (day: { dateString: string }) => {
    if (schedule[day.dateString]) {
      setSelectedDate(day.dateString);
      setSelectedTime("");
    } else {
      Alert.alert(
        "Unavailable", 
        "The doctor is not available on this day. Please select a weekday."
      );
    }
  };

  const onTimePress = (time: string) => {
    if (bookedTimes.includes(time)) {
      Alert.alert("Time Unavailable", "This time slot is already booked.");
    } else {
      setSelectedTime(time);
    }
  };

  const onBookAppointment = () => {
    if (selectedDate && selectedTime) {
      Alert.alert(
        "Appointment Booked",
        `Your appointment is set for ${selectedDate} at ${selectedTime}.`
      );
    } else {
      Alert.alert("Selection Required", "Please select both a date and time.");
    }
  };

  return (
    <View style={styles.container}>
      <PatientBookDoctorAppointmentHeader />
      <ScrollView style={styles.genContainer}>
        <View style={styles.biographyView}>
          <Text style={styles.biographytext}>Biography</Text>
          <Text style={styles.biography}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </Text>
        </View>

        <View style={styles.calendarContainer}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              ...Object.keys(schedule).reduce(
                (acc, date) => ({
                  ...acc,
                  [date]: {
                    customStyles: {
                      container: {
                        width: date === selectedDate ? 48 : 48,
                        height: date === selectedDate ? 48 : 48,
                        backgroundColor:
                          date === selectedDate ? "#fff" : "#AAAAAA",
                        borderWidth: date === selectedDate ? 1 : 0,
                        borderColor:
                          date === selectedDate ? "#337AF7" : "transparent",
                        borderRadius: date === selectedDate ? 30 : 0,
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      text: {
                        color: date === selectedDate ? "#337AF7" : "black",
                      },
                    },
                  },
                }),
                {}
              ),
            }}
            theme={{
              arrowColor: "#337A7",
              todayTextColor: "#337A7",
              selectedDayBackgroundColor: "#337AF7",
              selectedDayTextColor: "#ffffff",
            }}
            markingType={"custom"}
            minDate={new Date().toISOString().split('T')[0]}
          />

          <Text style={styles.sectionTitle}>Select Time</Text>
          <View style={styles.timesContainer}>
            {(schedule[selectedDate] || []).map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeButton,
                  bookedTimes.includes(time) && styles.bookedTime,
                  selectedTime === time && styles.selectedTime,
                ]}
                onPress={() => onTimePress(time)}
              >
                <Text
                  style={[
                    styles.timeText,
                    bookedTimes.includes(time) && styles.bookedTimeText,
                    selectedTime === time && styles.selectedTimeText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.bookButtonContainer}>
            <TouchableOpacity
              style={styles.bookButton}
              onPress={onBookAppointment}
            >
              <Text style={styles.bookButtonText}>Book Appointment</Text>
            </TouchableOpacity>
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
  genContainer: {
    flex: 1,
    marginTop: 146,
  },
  biographyView: {
    backgroundColor: "#8BB85C",
    paddingBottom: 20,
  },
  biographytext: {
    color: "white",
    marginBottom: 2,
    fontWeight: "medium",
    padding: 10,
  },
  biography: {
    fontSize: 11,
    color: "#ffff",
    marginBottom: 20,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  calendarContainer: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -25,
  },
  timesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  timeButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    margin: 5,
  },
  bookedTime: {
    backgroundColor: "#9D9DC3",
  },
  selectedTime: {
    backgroundColor: "#8BB85C",
  },
  timeText: {
    fontSize: 14,
    color: "#000",
  },
  bookedTimeText: {
    color: "#fff",
  },
  selectedTimeText: {
    color: "#fff",
  },
  bookButton: {
    backgroundColor: "#8BB85C",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    width: "60%",
    justifyContent: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  bookButtonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PatientBookDoctorAppointment;

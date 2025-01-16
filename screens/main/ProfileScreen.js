import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://picsum.photos/60" }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>Đinh Quốc Việt</Text>
          <Text style={styles.description}>
            A passionate explorer of the digital world.
          </Text>
        </View>
      </View>

      <View style={styles.pointsContainer}>
        <Text style={styles.pointsValue}>873 Điểm tích luỹ</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Đinh Quốc Việt</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>lusbnz01@gmail.com</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoValue}>+84 353580848</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Address:</Text>
          <Text style={styles.infoValue}>758 Lang, Dong Da</Text>
        </View>

        <Text style={styles.checkInTitle}>Check-in Photos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{ uri: "https://picsum.photos/150" }}
            style={styles.checkInImage}
          />
          <Image
            source={{ uri: "https://picsum.photos/150" }}
            style={styles.checkInImage}
          />
          <Image
            source={{ uri: "https://picsum.photos/150" }}
            style={styles.checkInImage}
          />
        </ScrollView>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={[
            styles.actionButton,
            { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
          ]}
          onPress={() => navigation.navigate("Promo")}
        >
          <Text style={styles.actionText}>Promo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.actionText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Feedback")}
        >
          <Text style={styles.actionText}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.inactive]}>
          <Text style={styles.actionText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <Text style={styles.actionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.inactive]}>
          <Text style={styles.actionText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.actionButton,
            styles.inactive,
            {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderBottomWidth: 0,
            },
          ]}
        >
          <Text style={styles.actionText}>Social</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#248A3D",
  },
  description: {
    fontSize: 12,
    color: "#777",
  },
  pointsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 20,
    alignItems: "start",
    marginBottom: 20,
    display: "flex",
    flex: 1,
  },
  pointsValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#248A3D",
  },
  detailContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 15,
    marginBottom: 20,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoItem: {
    marginVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  checkInContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 15,
    marginBottom: 20,
  },
  checkInTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  checkInImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  actionsContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  actionButton: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    alignItems: "start",
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  actionText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  inactive: {
    color: "#777",
    backgroundColor: "#f3f4f6",
    opacity: 0.5,
  },
  logoutButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#248A3D",
    padding: 10,
    width: "30%",
    display: "flex",
    alignSelf: "center",
    marginHorizontal: 20,
    marginBottom: 120,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#248A3D",
  },
});

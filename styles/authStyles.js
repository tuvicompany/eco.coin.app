import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#248A3D",
  },
  header: {
    height: 100,
    backgroundColor: "#248A3D",
  },
  authContainer: {
    flex: 1,
    marginTop: 50,
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,
  },
  title: {
    color: "#248A3D",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "start",
    marginBottom: 10,
  },
  description: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "regular",
    textAlign: "start",
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: "#248A3D",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 40,
  },
  link: {
    color: "#248A3D",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  descText: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 60,
    fontSize: 14,
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  socialButton: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  socialButtonText: {
    fontSize: 14,
    color: "#555",
  },
  linkCenter: {
    color: "#248A3D",
    fontSize: 14,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

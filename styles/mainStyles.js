import { StyleSheet, Dimensions } from "react-native";

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cccccc",
  },
  header: {
    height: 0,
    width: "100%",
  },
  mainContainer: {
    position: "absolute",
    top: 250,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,
    shadowColor: "#000",
    paddingVertical: 20,
  },
  horizontalBoxes: {
    paddingHorizontal: 10,
  },
  slideContainer: {
    marginBottom: 20,
  },
  box: {
    width: 200,
    height: 120,
    backgroundColor: "#248A3D",
    marginRight: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  boxText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  bannerSection: {
    padding: 10,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  banner: {
    height: 120,
    backgroundColor: "#248A3D",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  bannerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapOverlay: {
    flex: 1,
  },
  overlayTouchable: {
    ...StyleSheet.absoluteFillObject,
  },
});

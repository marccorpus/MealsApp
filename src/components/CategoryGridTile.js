import { StyleSheet, View, Text } from "react-native";

import colors from "../utils/colors";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

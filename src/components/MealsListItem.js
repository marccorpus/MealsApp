import { StyleSheet, View, Text, Image } from "react-native";

import Card from "./Card";

import colors from "../utils/colors";

const MealsListItem = ({
  imageUrl,
  title,
  duration,
  complexity,
  affordability,
}) => {
  return (
    <Card>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subTitles}>
        <Text style={styles.subTitle}>{duration}m</Text>
        <Text style={styles.subTitle}>{complexity.toUpperCase()}</Text>
        <Text style={styles.subTitle}>{affordability.toUpperCase()}</Text>
      </View>
    </Card>
  );
};

export default MealsListItem;

const styles = StyleSheet.create({
  image: {
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  subTitles: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  subTitle: {
    marginHorizontal: 4,
    color: colors.grey,
  },
});

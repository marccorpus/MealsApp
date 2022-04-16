import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

import List from "./List";

import colors from "../utils/colors";

const MealDetails = ({
  imageUrl,
  title,
  duration,
  complexity,
  affordability,
  ingredients,
  steps,
}) => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subTitles}>
        <Text style={styles.subTitle}>{duration}m</Text>
        <Text style={styles.subTitle}>{complexity.toUpperCase()}</Text>
        <Text style={styles.subTitle}>{affordability.toUpperCase()}</Text>
      </View>
      <List title="Ingredients" data={ingredients} />
      <List title="Steps" data={steps} />
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  image: {
    height: 300,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
    marginHorizontal: 4,
  },
  subTitles: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  subTitle: {
    marginHorizontal: 8,
    color: colors.grey,
  },
});

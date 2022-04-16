import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealsListItem from "./MealsListItem";

const MealsList = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("mealDetailsScreen", { id: item.id })
            }
          >
            <MealsListItem {...item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});

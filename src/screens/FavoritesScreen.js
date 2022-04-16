import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import MealsList from "../components/MealsList";

import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  const favoriteIds = useSelector((state) => state.favorites.ids);

  const meals = MEALS.filter((meal) => favoriteIds.includes(meal.id));

  if (meals.length === 0) {
    return (
      <View style={styles.container}>
        <Text>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList data={meals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

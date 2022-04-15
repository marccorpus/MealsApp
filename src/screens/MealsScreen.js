import { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

import MealsList from "../components/MealsList";

import { MEALS } from "../data/dummy-data";

const MealsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const meals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.id)
  );

  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, []);

  return <MealsList data={meals} />;
};

export default MealsScreen;

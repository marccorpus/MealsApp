import { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";
import colors from "../utils/colors";

const MealDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const meal = MEALS.find((meal) => meal.id === route.params.id);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Ionicons name="star" size={18} color={colors.white} />;
      },
    });
  }, []);

  return <MealDetails {...meal} />;
};

export default MealDetailsScreen;

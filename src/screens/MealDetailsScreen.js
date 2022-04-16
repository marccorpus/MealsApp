import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/reducers/favorites";
import { Ionicons } from "@expo/vector-icons";

import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";
import colors from "../utils/colors";

const MealDetailsScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();

  const meal = MEALS.find((meal) => meal.id === route.params.id);

  const isFavorite = useSelector((state) =>
    state.favorites.ids.includes(route.params.id)
  );

  const toggleIsFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ id: route.params.id }));
    } else {
      dispatch(addToFavorites({ id: route.params.id }));
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={toggleIsFavorite}>
            <Ionicons
              name={isFavorite ? "star" : "star-outline"}
              size={18}
              color={colors.white}
            />
          </TouchableOpacity>
        );
      },
    });
  }, [isFavorite, toggleIsFavorite]);

  return <MealDetails {...meal} />;
};

export default MealDetailsScreen;

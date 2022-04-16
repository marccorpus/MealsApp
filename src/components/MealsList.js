import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealsListItem from "./MealsListItem";

const MealsList = ({ data }) => {
  const navigation = useNavigation();

  return (
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
  );
};

export default MealsList;

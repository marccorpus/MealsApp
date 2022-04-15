import { FlatList } from "react-native";

import MealsListItem from "./MealsListItem";

const MealsList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MealsListItem {...item} />}
    />
  );
};

export default MealsList;

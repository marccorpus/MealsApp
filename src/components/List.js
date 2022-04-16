import { StyleSheet, View, Text } from "react-native";

import colors from "../utils/colors";

const List = ({ title, data }) => {
  return (
    <View style={styles.list}>
      <View style={styles.listTitleContainer}>
        <Text style={styles.listTitle}>{title}</Text>
      </View>

      {data.map((d) => {
        return (
          <View key={d} style={styles.listItemContainer}>
            <Text style={styles.listItem}>{d}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    marginTop: 8,
  },
  listTitleContainer: {
    marginHorizontal: 16,
    padding: 8,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
  listItemContainer: {
    borderRadius: 8,
    backgroundColor: colors.lightGrey,
    marginTop: 8,
    padding: 8,
    marginHorizontal: 16,
  },
  listItem: {
    color: colors.primary600,
    fontSize: 16,
    textAlign: "center",
  },
});

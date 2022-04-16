import { StyleSheet, View } from "react-native";

import colors from "../utils/colors";

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 24,
    paddingBottom: 8,
    borderRadius: 8,
    backgroundColor: colors.white,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNavigator";

import MealsScreen from "../screens/MealsScreen";

import colors from "../utils/colors";

const NativeStack = createNativeStackNavigator();

const NativeStackNavigator = () => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary600,
          },
          headerTintColor: colors.white,
        }}
      >
        <NativeStack.Screen
          name="homeNativeStack"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen name="mealsScreen" component={MealsScreen} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

export default NativeStackNavigator;

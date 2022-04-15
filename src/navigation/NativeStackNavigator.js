import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerNavigator from "./DrawerNavigator";

const NativeStack = createNativeStackNavigator();

const NativeStackNavigator = () => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen
          name="homeNativeStack"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        ></NativeStack.Screen>
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

export default NativeStackNavigator;

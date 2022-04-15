import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

import colors from "../utils/colors";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: colors.brown600 },
        drawerActiveBackgroundColor: colors.brown900,
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.black,
        headerStyle: {
          backgroundColor: colors.brown900,
        },
        headerTintColor: colors.white,
      }}
    >
      <Drawer.Screen
        name="homeDrawer"
        component={HomeScreen}
        options={{
          title: "All Categories",
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="favoritesDrawer"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

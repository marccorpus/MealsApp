import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="homeDrawer"
        component={HomeScreen}
        options={{ title: "All Categories", drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="favoritesDrawer"
        component={FavoritesScreen}
        options={{ title: "Favorites" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

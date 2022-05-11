import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import Basket from "../screens/Basket";
import OrdersScreen from "../screens/OrdersScreen";
import OrderDetails from "../screens/OrderDetails";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderDetails}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard-list" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={OrderDetails}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";
import Basket from "./src/screens/Basket";
import OrdersScreen from "./src/screens/OrdersScreen";
import OrderDetails from "./src/screens/OrderDetails";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RestaurantItem restaurant={restaurants[0]} />
      <RestaurantItem restaurant={restaurants[1]} /> */}
      <OrderDetails />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

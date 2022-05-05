import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import BasketDishItem from "../../components/BasketDishItem";

const restaurant = restaurants[0];

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 19 }}>
        Your Items
      </Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />
      <View style={styles.separator} />
      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    padding: 10,
    paddingVertical: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "#696969",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default Basket;

import { View, Text, Image, FlatList } from "react-native";
import orders from "../../../assets/data/orders.json";
import styles from "../RestaurantDetailsScreen/styles";
import restaurant from "../../../assets/data/restaurants.json";
import OrderListItem from "../../components/ListItem";
import BasketDishItem from "../../components/BasketDishItem";

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtile}>{order.status} &#8226; 2 days ago</Text>
          <Text style={styles.menuTitle}>Your Orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurant[0].dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;

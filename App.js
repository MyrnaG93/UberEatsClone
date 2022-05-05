import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

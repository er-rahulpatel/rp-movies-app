import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";
import IndexScreen from "../screens/indexScreen";

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Index" component={IndexScreen} options={{
                    title: "Movies App",
                    headerStyle: {
                        backgroundColor: "#2c3e50",
                    },
                    headerTitleStyle: {
                        color: "#fff",
                    },
                }} />

                <Stack.Screen name="Detail" component={DetailScreen} options={{
                    title: "Movies App",
                    headerStyle: {
                        backgroundColor: "#fff",
                    },
                    headerTitleStyle: {
                        color: "#000",
                    },
                    headerBackTitle: "Back to List",
                }} />

            </Stack.Navigator>

        </NavigationContainer>
    );
}
export default AppStack;
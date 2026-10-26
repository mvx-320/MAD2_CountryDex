import DeviceMenuScreen from "@/screens/DeviceMenuScreen";
import LinkingScreen from "@/screens/LinkingScreen";
import LocationScreen from "@/screens/LocationScreen";
import SensorsScreen from "@/screens/SensorsScreen";
import { DeviceStackParamList } from "@/types/navigation";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<DeviceStackParamList>();

export default function DeviceStack() {
    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Menu" component={DeviceMenuScreen} />
                    <Stack.Screen name="Linking" component={LinkingScreen} />
                    <Stack.Screen name="Sensors" component={SensorsScreen} />
                    <Stack.Screen name="Location" component={LocationScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    );
}
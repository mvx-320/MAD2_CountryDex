import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountriesStackParamList } from '../types/navigation';

import ListScreen from '../screens/stack/ListScreen';
import DetailsScreen from '../screens/stack/DetailsScreen';

const Stack = createNativeStackNavigator<CountriesStackParamList>();

export default function CountriesStack() {

    return (
        <Stack.Navigator 
            initialRouteName={'List'}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen 
                name="List"
                component={ListScreen}
                options={{ title: 'Countries' }}
            />
            <Stack.Screen 
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Country Details' }}
            />
        </Stack.Navigator>
    );
}
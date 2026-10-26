import ScreenHeader from '@/components/ScreenHeader';
import { LocationState } from '@/types/LocationState';
import * as Location from 'expo-location';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DeviceStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<DeviceStackParamList, 'Location'>;

export default function LocationScreen({ navigation }: Props) {
    const theme = useTheme();
    const [state, setState] = useState<LocationState>({ status: 'idle' });

    const getLocation = async () => {
        const { status, canAskAgain } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setState({ status: 'denied', canAskAgain });
            return;
        }
        setState({ status: 'loading' });
        try {
            const pos = await Location.getCurrentPositionAsync({});
            setState({ status: 'success', latitude: pos.coords.latitude, longitude: pos.coords.longitude });
        } catch (err) {
            setState({ status: 'error', message: (err as Error).message });
        }
    };

    const styles = {
        font: {
            color: theme.colors.onBackground,
            fontSize: 16,
        },
    };

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ScreenHeader title="Location" onBack={navigation.goBack} />
            <Card style={{ margin: 16 }}>
                <Card.Content style={{ gap: 8 }}>
                    {state.status === 'idle' && <Text style={styles.font}>Location not requested yet.</Text>}
                    {state.status === 'loading' && <Text style={styles.font}>Getting location...</Text>}
                    {state.status === 'error' && <Text style={styles.font}>Could not get location: {state.message}</Text>}
                    {state.status === 'denied' && (
                        <Text style={styles.font}>Location permission denied. Can ask again: {String(state.canAskAgain)}</Text>
                    )}
                    {state.status === 'success' && (
                        <>
                            <Text style={styles.font}>Location received.</Text>
                            <Text style={styles.font}>Latitude: {state.latitude.toFixed(5)}</Text>
                            <Text style={styles.font}>Longitude: {state.longitude.toFixed(5)}</Text>
                        </>
                    )}
                    <Button mode="contained" icon="crosshairs-gps" onPress={getLocation}>
                        Use my location
                    </Button>
                </Card.Content>
            </Card>
        </View>
    )
}


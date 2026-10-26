import ScreenHeader from "@/components/ScreenHeader";
import { Accelerometer, Barometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DeviceStackParamList } from "@/types/navigation";

type Props = NativeStackScreenProps<DeviceStackParamList, 'Sensors'>;

export default function SensorsScreen({ navigation }: Props) {
    const theme = useTheme();
    const [data, setData] = useState({ x: 0, y: 0, z: 0});
    const [pressure, setPressure] = useState<number | null>(null);
    const [baroAvailable, setBaroAvailable] = useState<boolean | null>(null);

    useEffect(() => {
        let subscription: ReturnType<typeof Accelerometer.addListener> | undefined;

        Accelerometer.isAvailableAsync().then((available) => {
            if (!available) return;
            Accelerometer.setUpdateInterval(300);
            subscription = Accelerometer.addListener(setData);
        });
        return () => subscription?.remove();
    }, []);

    useEffect(() => {
        let subscription: ReturnType<typeof Barometer.addListener> | undefined;

        Accelerometer.isAvailableAsync().then((available) => {
            setBaroAvailable(available);
            if (!available) return;
            Accelerometer.setUpdateInterval(1000);
            subscription = Barometer.addListener(({pressure}) => setPressure(pressure));
        });
        return () => subscription?.remove();
    }, []);
    
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ScreenHeader title="Sensors" onBack={navigation.goBack} />
            <Card style={{ margin: 16 }}>
                <Card.Title title="Accelerometer" subtitle="Current values" />
                <Card.Content>
                    {(['x', 'y', 'z'] as const).map((axis) => (
                        <Text key={axis} variant="bodyLarge">
                            {axis.toUpperCase()}: {data[axis].toFixed(2)}
                        </Text>
                    ))}
                </Card.Content>
            </Card>
            <Card style={{ margin: 16 }}>
                <Card.Title title="Barometer" subtitle="Current pressure" />
                <Card.Content>
                    {baroAvailable === null && <Text variant="bodyLarge">Checking barometer availability...</Text>}
                    {baroAvailable === false && <Text variant="bodyLarge">Barometer not available on this device.</Text>}
                    {baroAvailable === true && (
                        <Text variant="bodyLarge">
                            Pressure: {pressure !== null ? `${(pressure / 1000).toFixed(3)} bar` : 'Loading...'}
                        </Text>
                    )}
                </Card.Content>
            </Card>
        </View>
    );
}
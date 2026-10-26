import ScreenHeader from "@/components/ScreenHeader";
import { FlatList, View } from "react-native";
import { List, useTheme } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DeviceStackParamList } from "@/types/navigation";

type Props = NativeStackScreenProps<DeviceStackParamList, 'Menu'>;

export default function DeviceMenuScreen({ navigation }: Props) {
    const theme = useTheme();
    const items = [
        { name: 'Linking', icon: 'link', text: 'Call, SMS, website, email' },
        { name: 'Sensors', icon: 'axis-arrow', text: 'Accelerometer, Barometer' },
        { name: 'Location', icon: 'map-marker', text: 'Current position' },
    ] as const;

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ScreenHeader title="Device" />
            {items.map((item) => (
            <List.Item
                key={item.name}
                title={item.name}
                description={item.text}
                left={(props) => <List.Icon {...props} icon={item.icon} />}
                onPress={() => navigation.navigate(item.name)}
            />
            ))}
        </View>
    )
}
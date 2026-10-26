import ScreenHeader from '@/components/ScreenHeader';
import * as Linking from 'expo-linking';
import { View } from 'react-native';
import { Button, Card, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DeviceStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<DeviceStackParamList, 'Linking'>;

const actions = [
    {label: 'Call', icon: 'phone', url: 'tel:+1234567890'},
    {label: 'SMS', icon: 'message-text', url: 'sms:+1234567890'},
    {label: 'Website', icon: 'web', url: 'https://www.tuni.fi'},
    {label: 'Email', icon: 'email', url: 'mailto:info@tuni.fi'},
];

export default function LinkingScreen({ navigation }: Props) {
    const theme = useTheme();
    
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ScreenHeader title="Linking" onBack={navigation.goBack} />
            <Card style={{ margin: 16 }}>
                <Card.Title title="Support team" subtitle="Tap an action" />
                <Card.Content style={{ gap: 8 }}>
                    {actions.map((action) => (
                        <Button key={action.label} mode="contained-tonal" icon={action.icon}
                            onPress={() => Linking.openURL(action.url)}>
                            {action.label}
                        </Button>
                    ))}
                </Card.Content>
            </Card>
        </View>
    );
}
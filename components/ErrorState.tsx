import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

type Props = { onRetry: () => void };

export default function ErrorState({ onRetry }: Props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Something went wrong</Text>
            <Button onPress={onRetry}>Retry</Button>
        </View>
    );
}
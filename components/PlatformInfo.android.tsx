import { Avatar, Card, Text } from 'react-native-paper';

export default function PlatformInfo() {
    return (
        <Card mode="elevated">
            <Card.Title
                title="You are on Android"
                left={(props) => <Avatar.Icon {...props} icon="android" />}
            />
        </Card>
    );
}



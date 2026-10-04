import { Avatar, Card, Text } from 'react-native-paper';

export default function PlatformInfo() {
    return (
        <Card mode="outlined">
            <Card.Title
                title="You are on iOS"
                left={(props) => <Avatar.Icon {...props} icon="apple" />}
            />
        </Card>
    );
}
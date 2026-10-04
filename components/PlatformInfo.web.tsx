import { Avatar, Card, Text } from 'react-native-paper';

export default function PlatformInfo() {
    return (
        <Card mode="contained">
            <Card.Title
                title="Your are on Web"
                left={(props) => <Avatar.Icon {...props} icon="web" />}
            />
        </Card>
    );
}
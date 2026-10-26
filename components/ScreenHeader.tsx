import { Appbar } from "react-native-paper";

type Props = { title: string; onBack?: () => void };

export default function ScreenHeader({ title, onBack }: Props) {
    return (
        <Appbar.Header>
            {onBack && <Appbar.BackAction onPress={onBack} />}
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
}
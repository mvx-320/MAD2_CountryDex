import { Card } from 'react-native-paper';

type Country = {
    id: string;
    name: string;
    capital: string;
    flag: string;
};

type Props = {
    country: Country;
    onPress?: () => void;
};

export default function CountryCard({ country, onPress }: Props) {
    return (
        <Card onPress={onPress}>
            <Card.Title title={`${country.flag} ${country.name}`} subtitle={country.capital} />
        </Card>
    );
}
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CountriesStackParamList } from '../../types/navigation';
import data from '../../data/data.json';
import { useCountry } from '@/hooks/useCountry';
import LoadingState from '@/components/LoadingState';
import ErrorState from '@/components/ErrorState';

type Props = NativeStackScreenProps<CountriesStackParamList, 'Details'>;

export default function DetailsScreen({ route, navigation }: Props) {
	const theme = useTheme();
	const { countryId } = route.params;
	const { detailState, refetch } = useCountry(countryId);
	//const country = data.find((c) => c.id === countryId);

	//if (!country) return <Text>Country not found</Text>;

	const header = (
			<Appbar.Header>
				<Appbar.Content title="Country Details" />
				<Appbar.BackAction onPress={() => navigation.goBack()} />
			</Appbar.Header>
	);

	let content;
	if (detailState.status === 'loading') {
		content = <LoadingState />;
	} else if (detailState.status === 'error') {
		content = <ErrorState onRetry={refetch} />;
	} else if (detailState.status === 'success') {
		const country = detailState.country;
		content = (
			<View style={styles.content}>
				<Text variant="headlineMedium">{country.flag} {country.name}</Text>
				<Text variant="bodyLarge">Capital: {country.capital}</Text>
				<Text variant="bodyLarge">Region: {country.region}</Text>
				<Text variant="bodyLarge">Population: {country.population.toLocaleString()}</Text>
			</View>
		)
	} else {
		content = <Text>Idle state</Text>;
	}

	return (
		<View style={{ flex: 1, backgroundColor: theme.colors.background }}>
			{header}
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		padding: 16,
		gap: 8,
	},
});
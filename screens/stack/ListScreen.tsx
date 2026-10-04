import { View, FlatList } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CountriesStackParamList } from '../../types/navigation';
import CountryCard from '@/components/CountryCard';
import { useCountries } from '@/hooks/useCountries';
import ErrorState from '@/components/ErrorState';
import LoadingState from '@/components/LoadingState';

type Props = NativeStackScreenProps<CountriesStackParamList, 'List'>;

export default function ListScreen({ navigation }: Props) {
	const theme = useTheme();
	const { listState, refetch } = useCountries();

	if (listState.status === 'loading') {
		return <LoadingState />;
	} else if (listState.status === 'error') {
		return <ErrorState onRetry={refetch} />;
	}

	return (
		<View style={{ flex: 1, backgroundColor: theme.colors.background }}>
			<Appbar.Header>
				<Appbar.Content title="Countries" />
			</Appbar.Header>
		<FlatList
			style={{ backgroundColor: theme.colors.background }}
			data={listState.status === 'success' ? listState.countries : []}
			keyExtractor={(item) => item.id}
			contentContainerStyle={{ padding: 16, gap: 12 }}
			renderItem={({ item }) => (
			<CountryCard
				country={item}
				onPress={() => navigation.navigate('Details', { countryId: item.id })}
			/>
			)}
		/>
		</View>
	);
}
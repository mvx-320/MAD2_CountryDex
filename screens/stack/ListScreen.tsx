import { View, FlatList, Text, Platform } from 'react-native';
import { Appbar, useTheme, Searchbar } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CountriesStackParamList } from '../../types/navigation';
import CountryCard from '@/components/CountryCard';
import { useCountries } from '@/hooks/useCountries';
import ErrorState from '@/components/ErrorState';
import LoadingState from '@/components/LoadingState';
import { useState } from 'react';

type Props = NativeStackScreenProps<CountriesStackParamList, 'List'>;

export default function ListScreen({ navigation }: Props) {
	const theme = useTheme();
	const [query, setQuery] = useState('');
	const { listState, refetch } = useCountries();

	const countries = listState.status === 'success' ? listState.countries : [];
	const filtered = countries.filter((c) =>
		c.name.toLowerCase().includes(query.toLowerCase()) ||
		c.capital.toLowerCase().includes(query.toLowerCase())
	);

	if (listState.status === 'loading') {
		return <LoadingState />;
	} else if (listState.status === 'error') {
		return <ErrorState onRetry={refetch} />;
	}

	const searchbar = (
		<Searchbar style={{ margin: 8 }} placeholder="Search country or capital" value={query} onChangeText={setQuery} />
	);
	
	return (
		<View style={{ flex: 1, backgroundColor: theme.colors.background }}>
			<Appbar.Header>
				<Appbar.Content title="Countries" />
			</Appbar.Header>
			{Platform.OS !== 'ios' && searchbar}
			<FlatList
				style={{ backgroundColor: theme.colors.background }}
				data={filtered}
				ListEmptyComponent={<Text style={{ color: theme.colors.onBackground }}>No countries match "{query}"</Text>}
				keyExtractor={(item) => item.id}
				contentContainerStyle={{ padding: 16, gap: 12 }}
				renderItem={({ item }) => (
				<CountryCard
					country={item}
					onPress={() => navigation.navigate('Details', { countryId: item.id })}
				/>
				)}
			/>
			{Platform.OS === 'ios' && searchbar}
		</View>
	);
}
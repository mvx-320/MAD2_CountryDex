import { View, StyleSheet } from 'react-native';
import { Appbar, Text, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CountriesStackParamList } from '../../types/navigation';
import data from '../../data/data.json';

type Props = NativeStackScreenProps<CountriesStackParamList, 'Details'>;

export default function DetailsScreen({ route, navigation }: Props) {
    const theme = useTheme();
  const { countryId } = route.params;
  const country = data.find((c) => c.id === countryId);

  if (!country) return <Text>Country not found</Text>;

  return (
    <View style={[ styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header>
        <Appbar.Content title="Country Details" />
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <Text variant="headlineMedium">{country.flag} {country.name}</Text>
      <Text variant="bodyLarge">Capital: {country.capital}</Text>
      <Text variant="bodyLarge">Region: {country.region}</Text>
      <Text variant="bodyLarge">Population: {country.population.toLocaleString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
});
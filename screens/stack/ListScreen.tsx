import { View, FlatList } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CountriesStackParamList } from '../../types/navigation';
import data from '../../data/data.json';
import CountryCard from '@/components/CountryCard';

type Props = NativeStackScreenProps<CountriesStackParamList, 'List'>;

export default function ListScreen({ navigation }: Props) {
    const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header>
        <Appbar.Content title="Countries" />
      </Appbar.Header>
        <FlatList
          style={{ backgroundColor: theme.colors.background }}
          data={data}
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
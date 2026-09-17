import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import CountryCard from '@/components/CountryCard';
import data from '../data/data.json';


export default function HomeScreen() {
    const theme = useTheme();
    const minute = new Date().getMinutes();
    const seededRandom = (seed: number) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }
    const [randomCountry, setRandomCountry] = useState(
        () => data[Math.floor(seededRandom(minute) * data.length)]);

    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <Appbar.Header>
                <Appbar.Content title="Home" />
            </Appbar.Header>
            <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.text}>Would you like to know more about your Country for this minute?</Text>
            <CountryCard 
                country={randomCountry} />
            <Text style={styles.text}>Check out the Country Tab to learn about the {data.length} countries you have saved!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 18,
        margin: 20,
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'center',
    },
});
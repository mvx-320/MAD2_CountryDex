import * as React from 'react';
import { BottomNavigation, PaperProvider, MD3DarkTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import CountriesStack from './navigation/CountriesStack';

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'countries', title: 'Countries', focusedIcon: 'earth' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeScreen/>,
    countries: () => <CountriesStack/>,
  });

  return (
    <SafeAreaProvider>
      <PaperProvider theme={ MD3DarkTheme }>
        <NavigationContainer>
          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
# MAD2_CountryDex
To you remember *PokeDex*... a programm to compare the stats of monsters, you trap in little balls and let out only to fight against other poor monsters?! \
This is the same thing but with countries and without the fighting😅. You can scroll through countries a see their statistics.
## Screenshots
This is how my app looks until now. The **Home** screen show a pseudo random country every minute to interest the user in using the app.
<table>
  <tr>
    <td><img src="./assets/screenshots/HomeWeb.png" width="300"></td>
    <td><img src="./assets/screenshots/HomeAndroid.png" width="300"></td>
    <td><img src="./assets/screenshots/List.png" width="300"></td>
    <td><img src="./assets/screenshots/Detail.png" width="300"></td>
  </tr>
</table>


## API
- Switched from [restcountries](https://restcountries.com/) to [countries.dev](https://countries.dev/docs), because only default request was without token. But this works as well.
- While we the user waits for the response a loading screen is shown. If something goes wrong an error screen is shown
<table>
  <tr>
    <td><img src="./assets/screenshots/DetailLoading.png" width="300"></td>
    <td><img src="./assets/screenshots/DetailError.png" width="300"></td>
  </tr>
</table>

## Platform 
- Simulated how ListScreen would look like for iOS with `'web'`

<img src="./assets/screenshots/ListIos.png" width="200">

## FutureFeatures
- [ ] Seperate types for List and Detail Screen
- [ ] Klicking Countries Tab Button while tab is active opens ListScreen
## Learnings
### imports
- `@` is a pointer to a directory
- `export default` no `{ }` (`default` marks the main export in a file)
## Troubleshooting
- If the Browser only shows App-Manifest \
    -> Install `npx expo install react-dom react-native-web`

import React, { useEffect } from "react";
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import Home from "./screens/home.js";
import { Alert, AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { SharedStateProvider } from "./screens/SharedStateCtx.js";
import Promo from "./screens/promo.js";
import { MhyForm } from "./screens/numberForm.js";
import { globeIndex_ct, globeIndex_p, globeIndex_prefix, globeIndex_reg, globeIndex_theme } from "./data/globe_index.js";
import { SubPromo } from "./screens/subPromo.js";
import { smartIndex_ct, smartIndex_p, smartIndex_prefix, smartIndex_reg, smartIndex_theme } from "./data/smart_index.js";
import { tm_ct, tm_p, tm_prefix, tm_reg, tm_theme } from "./data/tm_index.js";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Updates from 'expo-updates'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

const Stack = createStackNavigator();
const customFonts = {
  'lato-bold': require('./assets/Lato-Bold.ttf'),
  'lato-black': require('./assets/Lato-Black.ttf'),
  'nunito': require('./assets/Nunito-Regular.ttf'),
  'nunito-semi': require('./assets/Nunito-SemiBold.ttf'),
  'nunito-bold': require('./assets/Nunito-Bold.ttf'),
  'condensed': require('./assets/UbuntuCondensed-Regular.ttf')
};

function Mhyrenz() {
  async function onFetchUpdateAsync() {
    const netinfo = await NetInfo.fetch()
    if (netinfo.isConnected && !(netinfo.type === 'none')) {
      console.log('expo update')
      try {
        const update = await Updates.checkForUpdateAsync();
          if (update.isAvailable) {
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync();
            const isNew = Updates.UpdateEventType
            if (!(isNew === isNew.NO_UPDATE_AVAILABLE)){
              await Updates.readLogEntriesAsync().then((value)=>{
                Alert.alert(value.message)
              })
              
            }
          }
      } catch (error) {
        Alert.alert('Update',`${error}`);
        
      }
    }
  }
  useEffect(()=>{

    onFetchUpdateAsync()
  }, [])
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={
        {
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }
      }/>
      <Stack.Screen name="Globe" options={
        {
          headerShadowVisible: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTintColor: '#3ba1ce',
          headerTitleStyle: {
            color: 'black',
            fontFamily: 'lato-black',
            textTransform: 'uppercase'
          },
          headerLeftContainerStyle: {
            paddingLeft: 5,
          }
        }
      }>
        {()=><Promo promo={globeIndex_p} callText={globeIndex_ct} prefix={globeIndex_prefix} method={globeIndex_reg} theme={globeIndex_theme}/>}
      </Stack.Screen>
      <Stack.Screen name="Smart" options={
        {
          headerShadowVisible: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTintColor: '#3ba1ce',
          headerTitleStyle: {
            color: 'black',
            fontFamily: 'lato-black',
            textTransform: 'uppercase'
          },
          headerLeftContainerStyle: {
            paddingLeft: 5,
          }
        }
      }>
        {()=><Promo promo={smartIndex_p} callText={smartIndex_ct} prefix={smartIndex_prefix} method={smartIndex_reg} theme={smartIndex_theme}/>}
      </Stack.Screen>
      <Stack.Screen name="TM" options={
        {
          headerShadowVisible: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTintColor: '#3ba1ce',
          headerTitleStyle: {
            color: 'black',
            fontFamily: 'lato-black',
            textTransform: 'uppercase'
          },
          headerLeftContainerStyle: {
            paddingLeft: 5,
          }
        }
      }>
        {()=><Promo promo={tm_p} callText={tm_ct} prefix={tm_prefix} method={tm_reg} theme={tm_theme}/>}
      </Stack.Screen>
      <Stack.Screen name="SubPromo" component={SubPromo} options={
        {
          headerShadowVisible: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerTintColor: '#3ba1ce',
          headerTitleStyle: {
            color: 'black',
            fontFamily: 'lato-black'
          },
          headerLeftContainerStyle: {
            paddingLeft: 5,
          }
        }
      }/>
      <Stack.Screen name="Account" component={MhyForm} options={
        {
          headerShadowVisible: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTintColor: '#3ba1ce',
          headerTitle: '',
          headerTitleStyle: {
            color: 'black',
            fontFamily: 'lato-black'
          },
          headerLeftContainerStyle: {
            paddingLeft: 5,
          }
        }
      }/>
    </Stack.Navigator>
  );
}



export default class App extends React.Component {
  
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
    <PaperProvider 
      settings={{
      rippleEffectEnabled: true
    }}>
      <SafeAreaProvider>
      <NavigationContainer>
        <SharedStateProvider>
          <Mhyrenz />
        </SharedStateProvider>
        
      </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);

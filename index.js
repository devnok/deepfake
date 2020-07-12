/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry, YellowBox } from 'react-native';
import App from './app/Entrypoint';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';
enableScreens();
YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);

AppRegistry.registerComponent(appName, () => App);

import { registerRootComponent } from 'expo';

import App from './App';
import Login from './app_old/screens/Login';
import Tienda from './app_old/screens/Tienda';
import ListaProductos from './app_old/screens/ListaProductos';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ListaProductos);

import { registerRootComponent } from 'expo';

import App from './App';
import Podai from './app/screens/Login';
import ListaProductos from './app/screens/ListaProductos';
import Tienda from './app/screens/Tienda';
import Clima from './app/screens/Prueba';
import Weather from  './app/screens/Weather';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Weather);

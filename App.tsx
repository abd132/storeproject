import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import CartProvider from '../project1/src/Contexts/CartContext';

import theme from '../project1/src/global/theme';
import Routes from '../project1/src/Routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <CartProvider>
          <StatusBar
            backgroundColor={theme.colors.green}
            barStyle="light-content"
            animated
          />
          <Routes />
        </CartProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

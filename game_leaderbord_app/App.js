import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { MainScreen } from './src/screens';
import Toast from 'react-native-toast-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { common_styles } from './src/utils/common_styles'

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaProvider style={common_styles.flex_1} >
        <MainScreen />
      </SafeAreaProvider>
      <Toast />
    </Provider>
  );
}


export default App;

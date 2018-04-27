import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducer/index';
import ItemC from './src/component/ItemContainer';
import MapC from './src/component/MapContainer';
import { MALL } from './src/constant';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.ignoredYellowBox = ['Warning'];

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ItemC mall={MALL.CHUU} />
          <MapC />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

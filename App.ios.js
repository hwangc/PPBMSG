import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/reducer';
import AppWithNavigationState from './src/navigation';
import { navMiddleware } from './src/navigation';
import thunk from 'redux-thunk';

console.ignoredYellowBox = ['Warning'];

export default class App extends React.Component {
  store = createStore(rootReducer, applyMiddleware(thunk, navMiddleware));

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

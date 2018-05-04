import React from 'react';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchOrder } from '../action';
import ChuuMain from '../screens/Chuu';
import MossbeanMain from '../screens/Mossbean';
import Icecream12Main from '../screens/Icecream12';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

export const AppNavigator = TabNavigator({
  Chuu: { screen: ChuuMain },
  Mossbean: { screen: MossbeanMain },
  Icecream12: { screen: Icecream12Main }
});

export const middleware = createReactNavigationReduxMiddleware(
  'Chuu',
  state => state.nav
);

const addListener = createReduxBoundAddListener('Chuu');

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);

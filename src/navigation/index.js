import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from '@expo/vector-icons';
import { connect } from 'react-redux';
import ChuuMain from '../screens/Chuu';
import MossbeanMain from '../screens/Mossbean';
import Icecream12Main from '../screens/Icecream12';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers';
import { fetchOrder } from '../action';
import { MALL } from '../constant';

export const AppNavigator = createBottomTabNavigator(
  {
    Chuu: { screen: ChuuMain },
    Mossbean: { screen: MossbeanMain },
    Icecream12: { screen: Icecream12Main }
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

export const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const addListener = createReduxBoundAddListener('root');

class AppWithNavigationState extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    let mall;
    switch (nextProps.nav.index) {
      case 0:
        mall = MALL.CHUU;
        break;
      case 1:
        mall = MALL.MOSSBEAN;
        break;
      case 2:
        mall = MALL.ICECREAM12;
        break;
    }
    nextProps.dispatch(fetchOrder(mall));
  }

  render() {
    const { dispatch, nav } = this.props;
    return <AppNavigator navigation={{ dispatch, state: nav, addListener }} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);

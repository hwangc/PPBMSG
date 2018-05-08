import React from 'react';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import ChuuMain from '../screens/Chuu';
import MossbeanMain from '../screens/Mossbean';
import Icecream12Main from '../screens/Icecream12';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

export const AppNavigator = TabNavigator(
  {
    Chuu: { screen: ChuuMain },
    Mossbean: { screen: MossbeanMain },
    Icecream12: { screen: Icecream12Main }
  },
  {
    animationEnabled: true
  }
);

export const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const addListener = createReduxBoundAddListener('root');

class AppWithNavigationState extends React.Component {
  render() {
    const { dispatch, nav } = this.props;
    console.log(
      '\n===>>> START <<<===\n',
      'AppWithNavigationState this.props: ',
      this.props
    );
    console.log('\n===>>> END <<<===');
    return (
      <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);

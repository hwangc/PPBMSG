import { AppNavigator } from '../../navigation';
import { fetchOrder } from '../../action';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Chuu');
const initialNavState = router.getStateForAction(mainNavAction);

const navReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Navigation/NAVIGATE':
      console.log(
        '\n===>>> START action <<<===\n',
        'action: ',
        action,
        'state route: ',
        state.routes[state.index],
        'state route params: ',
        state.routes[state.index].params
      );
      console.log('\n===>>> END <<<===');
      let navAction;
      navAction = router.getActionForPathAndParams(action.routeName, {
        fetch: true
      });
      navAction = navAction || action;
      nextState = router.getStateForAction(navAction, state);
      break;

    default:
      nextState = router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default navReducer;

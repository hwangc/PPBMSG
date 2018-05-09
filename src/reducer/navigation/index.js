import { AppNavigator } from '../../navigation';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Chuu');
const initialNavState = router.getStateForAction(mainNavAction);

const navReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Navigation/NAVIGATE':
      let navAction;
      navAction = router.getActionForPathAndParams(action.routeName);
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

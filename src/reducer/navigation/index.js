import { AppNavigator } from '../../navigation';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Chuu');
const initialNavState = router.getStateForAction(mainNavAction);

const navReducer = (state = initialNavState, action) => {
  return router.getStateForAction(action, state) || state;
};

export default navReducer;

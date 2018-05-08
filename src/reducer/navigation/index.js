import { AppNavigator } from '../../navigation';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Chuu');
const initialNavState = router.getStateForAction(mainNavAction);

const navReducer = (state = initialNavState, action) => {
  let nextState;
  console.log(
    '\n===>>> START <<<===\n',
    'state: ',
    state,
    '\naction: ',
    action
  );
  console.log('\n===>>> END <<<===');
  switch (action.type) {
    default:
      nextState = router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default navReducer;

import mockStore from 'redux-mock-store';
import * as actions from '../../action';
import { ppbMsg, initialState } from '../index';
import { ORDER } from '../../constant';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

describe('PPB Reducer', () => {
  test('Success to fetch and dispatch ADD_NEW_ORDER', () => {
    expect(
      ppbMsg(initialState, actions.successFetchAction(ORDER))
    ).toMatchSnapshot();
  });
});

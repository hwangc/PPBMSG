import mockStore from 'redux-mock-store';
import * as actions from '../../action';
import { ppbMsgOrder } from '../index';
import { ORDER, initialStateOrder } from '../../constant';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

describe('PPB Reducer', () => {
  test('Success to fetch and dispatch START_FETCH_ORDER', () => {
    expect(
      ppbMsgOrder(initialStateOrder, actions.successFetchOrderAction(ORDER))
    ).toMatchSnapshot();
  });
});

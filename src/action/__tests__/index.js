import * as actions from '../index';
import { CHUU, ORDER } from '../../constant';
import mockStore from 'redux-mock-store';

const store = mockStore({});
global.fetch = jest.fn().mockImplementation(url => {
  if (url) {
    return Promise.resolve({
      json: () => ({
        response: {
          result: ORDER
        }
      })
    });
  } else {
    return null;
  }
});

describe('PPBMSG Action Creators => ', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('SYNC ', () => {
    test('successFetchOrderAction => should create an order payload', () => {
      expect(actions.successFetchOrderAction(ORDER)).toMatchSnapshot();
    });
  });

  describe('ASYNC ', () => {
    test('fetchOrder(CHUU) => should return success action', async () => {
      await store.dispatch(actions.fetchOrder(CHUU));
      expect(store.getActions()).toMatchSnapshot();
    });
    test('fetchOrder(NULL) => should return fail action', async () => {
      await store.dispatch(actions.fetchOrder(null));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});

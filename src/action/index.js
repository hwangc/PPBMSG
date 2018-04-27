import {
  types,
  GEO_API,
  initialStateMap,
  initialStateOrder
} from '../constant';
import {
  getItemsInfo,
  getAddressFromOrder,
  getItemIds,
  getLatLng,
  getOrderFetchUrl,
  getItemFetchUrl,
  getLocationFetchUrl,
  getLocationFetchHeaders
} from '../lib/common';

export const startFetchOrderAction = () => {
  return {
    type: types.START_FETCH_ORDER,
    payload: initialStateOrder
  };
};

export const successFetchOrderAction = order => {
  const orderID = order.order_no;
  const prdNum = order.product ? order.product.length : 0;
  const orderAddress = getAddressFromOrder(order);
  const itemsInfo = order.itemsInfo;

  return {
    type: types.SUCCESS_FETCH_ORDER,
    payload: {
      id: orderID,
      prdNum,
      orderAddress,
      itemsInfo,
      error: ''
    }
  };
};

export const failFetchOrderAction = error => {
  return {
    type: types.FAIL_FETCH_ORDER,
    payload: initialStateOrder
  };
};

export const successFetchLocAction = location => {
  return {
    type: types.SUCCESS_FETCH_LOC,
    payload: {
      location
    }
  };
};

export const failFetchLocAction = error => {
  return {
    type: types.FAIL_FETCH_LOC,
    payload: initialStateMap
  };
};

export const fetchOrder = mall => async dispatch => {
  dispatch(startFetchOrderAction());
  try {
    const resOrder = await fetch(getOrderFetchUrl(mall));
    const resOrderJson = await resOrder.json();
    let order = resOrderJson.response.result;
    const itemIds = getItemIds(order);
    const resItem = await fetch(getItemFetchUrl(itemIds, mall));
    const resItemJson = await resItem.json();
    let item = resItemJson.response.result;
    const itemsInfo = getItemsInfo(item);
    const orderWithItem = Object.assign(order[0], {
      itemsInfo
    });
    const resLatLng = await fetch(
      getLocationFetchUrl(GEO_API.DAUM, orderWithItem),
      getLocationFetchHeaders(GEO_API.DAUM)
    );
    const resLatLngJson = await resLatLng.json();
    let location = getLatLng(GEO_API.DAUM, resLatLngJson);
    dispatch(successFetchOrderAction(orderWithItem));
    dispatch(successFetchLocAction(location));
  } catch (error) {
    dispatch(failFetchOrderAction(error));
    dispatch(failFetchLocAction(error));
  }
};

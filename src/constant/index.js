export const SUCCESS_FETCH_ORDER = 'SUCCESS_FETCH_ORDER';
export const FAIL_FETCH_ORDER = 'FAIL_FETCH_ORDER';
export const START_FETCH_ORDER = 'START_FETCH_ORDER';
export const SUCCESS_FETCH_LOC = 'SUCCESS_FETCH_LOC';
export const FAIL_FETCH_LOC = 'FAIL_FETCH_LOC';
export const START_FETCH_LOC = 'START_FETCH_LOC';
export const types = {
  START_FETCH_ORDER,
  SUCCESS_FETCH_ORDER,
  FAIL_FETCH_ORDER,

  START_FETCH_LOC,
  SUCCESS_FETCH_LOC,
  FAIL_FETCH_LOC
};
export const CHUU = 'chuu';
export const MOSSBEAN = 'mossbean';
export const ICECREAM12 = 'icecream12';
export const MALL = {
  CHUU,
  MOSSBEAN,
  ICECREAM12
};
export const initialStateOrder = {
  id: null,
  prdNum: null,
  orderAddress: null,
  itemsInfo: [],
  error: null
};

export const initialStateMap = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export const ORDER = {
  order_no: 'o_1',
  product: [
    { product_no: 'p_1' },
    { product_no: 'p_2' },
    { product_no: 'p_3' }
  ],
  ship_address1: 'hello',
  ship_address2: 'address'
};
const GOOGLE = 'google';
const DAUM = 'daum';
const FREEGEOIP = 'freegeoip';
export const GEO_API = {
  GOOGLE,
  DAUM,
  FREEGEOIP
};

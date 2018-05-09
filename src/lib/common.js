import { CHUU, MOSSBEAN, ICECREAM12, GEO_API } from '../constant';
import DateTime from 'date-and-time';
import auth from '../../apiConfig.json';

export const setDateTime = DT => {
  const now = DT || new Date();
  const timeFormat = 'YYYY-MM-DD HH:mm:ss';
  const time = DateTime.format(DateTime.addDays(now, -2), timeFormat);

  return time;
};

export const getOrderFetchUrl = mall => {
  let url = 'https://datahub.cafe24.com/openapi/shop/order/v1/search';
  let query = '';
  let AC = '';
  let MI = '';
  let ST = 'ppbstudios';
  let SN = 1;
  let DT = 'json';
  let DS = 'order';
  let LT = 1;
  let SD = setDateTime();
  switch (mall) {
    case CHUU:
      AC = auth.mallAuth.chuu;
      MI = 'chuukr';
      query = `auth_code=${AC}&service_type=${ST}&mall_id=${MI}&data_type=${DT}&start_datetime=${SD}&datetime_select=${DS}&limit=${LT}&shop_no=${SN}`;
      url += `?${query}`;
      break;

    case MOSSBEAN:
      AC = auth.mallAuth.mossbean;
      MI = 'mosbean';
      query = `auth_code=${AC}&service_type=${ST}&mall_id=${MI}&data_type=${DT}&start_datetime=${SD}&datetime_select=${DS}&limit=${LT}&shop_no=${SN}`;
      url += `?${query}`;
      break;

    case ICECREAM12:
      AC = auth.mallAuth.icecream12;
      MI = 'dusvlf91';
      query = `auth_code=${AC}&service_type=${ST}&mall_id=${MI}&data_type=${DT}&start_datetime=${SD}&datetime_select=${DS}&limit=${LT}&shop_no=${SN}`;
      url += `?${query}`;
      break;

    default:
      break;
  }

  return url;
};

export const getItemFetchUrl = (itemIds, mall) => {
  let url = 'https://datahub.cafe24.com/openapi/shop/product/v1/search';

  let AC = '';
  let MI = '';
  const ST = 'ppbstudios';
  const SN = 1;
  const DT = 'json';
  let query = '';

  switch (mall) {
    case CHUU:
      AC = auth.mallAuth.chuu;
      MI = 'chuukr';
      query = `auth_code=${AC}&service_type=${ST}&mall_id=${MI}&data_type=${DT}&shop_no=${SN}&limit=100&product_no=${itemIds}`;
      url += `?${query}`;
      break;

    case MOSSBEAN:
      AC = auth.mallAuth.mossbean;
      MI = 'mosbean';
      query = `auth_code=${AC}&service_type=${ST}&mall_id=${MI}&data_type=${DT}&shop_no=${SN}&limit=100&product_no=${itemIds}`;
      url += `?${query}`;
      break;

    case ICECREAM12:
      AC = auth.mallAuth.icecream12;
      MI = 'dusvlf91';
      query = `auth_code=${AC}&service_type=${ST}&mall_id=${MI}&data_type=${DT}&shop_no=${SN}&limit=100&product_no=${itemIds}`;
      url += `?${query}`;
      break;

    default:
      break;
  }

  return url;
};

export const getItemIds = orders => {
  const ids = orders
    .map(order =>
      order.product.reduce((allItemIDs, item, index, products) => {
        let lastComma = '';
        if (index !== products.length - 1) {
          lastComma = ',';
        }
        return allItemIDs + item.product_no + lastComma;
      }, '')
    )
    .join();

  return ids;
};

export const getItemsInfo = items => {
  let itemsInfo = [];

  for (let item of items) {
    itemsInfo.push({
      name: item.product_name,
      image: item.image_detail_url,
      price: item.sale_price
    });
  }
  return itemsInfo;
};

export const getAddressFromOrder = order => {
  return `${order.ship_address1} ${order.ship_address2}`;
};

export const getLocationFetchUrl = (geoApi, order) => {
  let baseurl = '';
  let query = '';
  const address = getAddressFromOrder(order);

  try {
    switch (geoApi) {
      case GEO_API.GOOGLE:
        baseurl = 'https://maps.googleapis.com/maps/api/geocode/json';
        query = `?address=${encodeURI(address)}&key=${auth.mapAuth.google}`;
        break;

      case GEO_API.DAUM:
        baseurl = 'https://dapi.kakao.com/v2/local/search/address.json';
        query = `?query=${encodeURI(address)}`;

        break;

      case GEO_API.FREEGEOIP:
        baseurl = 'http://freegeoip.net/json';
        query = `/${encodeURI(address)}`;
        console.log('freegeoip ==> ', `${baseurl}${query}`);

        break;

      default:
        throw new Error('Error at setLatLngApiUrl');
    }
  } catch (e) {
    console.log(e);
  }
  return `${baseurl}${query}`;
};

export const getLocationFetchHeaders = geoApi => {
  let headers = {};
  try {
    switch (geoApi) {
      case GEO_API.DAUM:
        headers = {
          method: 'GET',
          headers: {
            Authorization: auth.mapAuth.daum
          }
        };
        break;

      default:
        break;
    }
  } catch (e) {
    console.log(e);
  }
  return headers;
};

export const getLatLng = (geoApi, LatLng) => {
  let location = {};
  switch (geoApi) {
    case 'daum':
      location = getDaumLatLng(LatLng);
      break;

    case 'google':
      location = getGoogleLatLng(LatLng);
      break;

    case 'freegeoip':
      location = getFreeGeoIpLatLng(LatLng);
      break;

    default:
      throw Error('API error getLatLng');
  }

  return location;
};

const getDaumLatLng = LatLng => {
  let location = {
    latitude: 37.551954,
    longitude: 127.058964,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  if (
    LatLng &&
    LatLng.documents &&
    LatLng.documents[0] &&
    typeof LatLng.documents[0].x !== undefined &&
    typeof LatLng.documents[0].y !== undefined
  ) {
    location.longitude = parseFloat(LatLng.documents[0].x, 10);
    location.latitude = parseFloat(LatLng.documents[0].y, 10);
  } else {
    console.log('daum could not get the lat and lng', LatLng);
  }

  return location;
};

const getGoogleLatLng = LatLng => {
  let location = {
    latitude: 37.551954,
    longitude: 127.058964,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  if (
    LatLng &&
    LatLng.results[0] &&
    LatLng.results[0].geometry &&
    LatLng.results[0].geometry.location &&
    typeof LatLng.results[0].geometry.location.lat !== undefined &&
    typeof LatLng.results[0].geometry.location.lng !== undefined
  ) {
    location.longitude = parseFloat(
      LatLng.results[0].geometry.location.lng,
      10
    );
    location.latitude = parseFloat(LatLng.results[0].geometry.location.lat, 10);
  } else {
    console.log('google could not get the lat and lng', LatLng);
  }

  return location;
};

const getFreeGeoIpLatLng = LatLng => {
  let location = {
    latitude: 37.551954,
    longitude: 127.058964,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  if (LatLng) {
    location.longitude = parseFloat(LatLng.longitude, 10);
    location.latitude = parseFloat(LatLng.latitude, 10);
  }

  return location;
};

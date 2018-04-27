import { getOrderUrl } from '../lib/common';

export function getOrder(mall) {
  const url = getOrderUrl(mall);
  return fetch(url);
}

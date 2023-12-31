import {ApiConstants} from '../constants';

const getFlagIcon = (
  code = 'VN',
  style = ApiConstants.COUNTRY_FLAG.STYLE.FLAT,
  size = ApiConstants.COUNTRY_FLAG.SIZE[64],
) => `${ApiConstants.COUNTRY_FLAG.BASE_URL}/${code}/${style}/${size}.png`;

export default {getFlagIcon};

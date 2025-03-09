import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

export const BASE_URL = 'https://api.nytimes.com/svc/archive/v1/';


export const REQUEST_TIMEOUT = 3000;
export const TOKEN = 'vEJwp3nmtqMIO6FDqQwyQdjbTzJcbdAh';
export const TOKEN2 = 'r2Jv6ePw72yZSPiH2Lo75kQKIl57kdeK';

dayjs.extend(utc);
export const YEAR = dayjs.utc().format('YYYY')
export const MONTH = dayjs.utc().format('M');



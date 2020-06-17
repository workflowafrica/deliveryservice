// import { BitlyClient } from 'bitly';
import 'dotenv/config';

export const getEnv = (variable, defaultValue) => {
  const value = process.env[variable] || defaultValue;
  return value;
};

export const Response = (response, resObject) => {
  const { status, message, data } = resObject;
  if (status >= 300) {
    return response.status(status).json({ status, error: message });
  }
  return response.status(status).json({ status, message, data });
};

export const randomNumber = (number = 9999, min = 0) => {
  const adjusted = min + 1;
  return Math.floor((Math.random() + adjusted) * number);
};

// export const generateURL = async (path) => {
//   // console.log(path, 'PATH');

//   const bitly = new BitlyClient(getEnv('BITLY_TOKEN'), {});
//   const bit = await bitly.shorten(`${getEnv('FRONTEND_URL')}/${path}`);
//   // console.log(bit, '==========********00000000');
//   return bit;
// };

export const logger = (params) => {
  const log = console;
  log.table(params);
};

export const objectValueToLowerCase = (obj) => {
  const newObject = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value !== 'object') {
      newObject[key] = typeof value === 'number' ? value : value.toLowerCase();
    } else {
      newObject[key] = objectValueToLowerCase(value);
    }
  });
  return newObject;
};

// export const distance = (lat1, lon1, lat2, lon2, unit) => {
//   const radlat1 = (Math.PI * lat1) / 180;
//   const radlat2 = (Math.PI * lat2) / 180;
//   const theta = lon1 - lon2;
//   const radtheta = (Math.PI * theta) / 180;
//   let dist =
//     Math.sin(radlat1) * Math.sin(radlat2) +
//     Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//   if (dist > 1) {
//     dist = 1;
//   }
//   dist = Math.acos(dist);
//   dist = (dist * 180) / Math.PI;
//   dist = dist * 60 * 1.1515;
//   if (unit === 'K') {
//     dist *= 1.609344;
//   }
//   if (unit === 'N') {
//     dist *= 0.8684;
//   }
//   return dist;
// };
// export const calculateDistance = (currentLat, currentLng, data) => {
//   // eslint-disable-next-line prefer-const
//   const newData = [];
//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < data.length; i++) {
//     // if this location is within 0.1KM of the user, add it to the list
//     if (distance(currentLat, currentLng, data[i].latitude, data[i].longitude, 'K') <= 10) {
//       newData.push(data[i]);
//     }
//   }
//   return newData;
// };

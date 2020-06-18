"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectValueToLowerCase = exports.logger = exports.randomNumber = exports.Response = exports.getEnv = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("dotenv/config");

// import { BitlyClient } from 'bitly';
var getEnv = function getEnv(variable, defaultValue) {
  var value = process.env[variable] || defaultValue;
  return value;
};

exports.getEnv = getEnv;

var Response = function Response(response, resObject) {
  var status = resObject.status,
      message = resObject.message,
      data = resObject.data;

  if (status >= 300) {
    return response.status(status).json({
      status: status,
      error: message
    });
  }

  return response.status(status).json({
    status: status,
    message: message,
    data: data
  });
};

exports.Response = Response;

var randomNumber = function randomNumber() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9999;
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var adjusted = min + 1;
  return Math.floor((Math.random() + adjusted) * number);
}; // export const generateURL = async (path) => {
//   // console.log(path, 'PATH');
//   const bitly = new BitlyClient(getEnv('BITLY_TOKEN'), {});
//   const bit = await bitly.shorten(`${getEnv('FRONTEND_URL')}/${path}`);
//   // console.log(bit, '==========********00000000');
//   return bit;
// };


exports.randomNumber = randomNumber;

var logger = function logger(params) {
  var log = console;
  log.table(params);
};

exports.logger = logger;

var objectValueToLowerCase = function objectValueToLowerCase(obj) {
  var newObject = {};
  Object.entries(obj).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if ((0, _typeof2["default"])(value) !== 'object') {
      newObject[key] = typeof value === 'number' ? value : value.toLowerCase();
    } else {
      newObject[key] = objectValueToLowerCase(value);
    }
  });
  return newObject;
}; // export const distance = (lat1, lon1, lat2, lon2, unit) => {
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


exports.objectValueToLowerCase = objectValueToLowerCase;
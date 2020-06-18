"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.autoPath = void 0;

var _express = _interopRequireDefault(require("express"));

var _admin = require("./admin.controllers");

var adminRoute = _express["default"].Router();

var autoPath = 'admin'.toLowerCase();
exports.autoPath = autoPath;
adminRoute.get('/', //   Security.JWTVerifyMiddleware,
//   Security.RestrictToOnlyAdmins,
_admin.adminFirstRoute);
var _default = adminRoute;
exports["default"] = _default;
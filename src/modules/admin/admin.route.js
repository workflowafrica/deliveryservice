import express from 'express';
import { adminFirstRoute } from './admin.controllers'

const adminRoute = express.Router();
export const autoPath = 'admin'.toLowerCase();

adminRoute.get(
  '/',
//   Security.JWTVerifyMiddleware,
//   Security.RestrictToOnlyAdmins,
  adminFirstRoute
);

export default adminRoute;

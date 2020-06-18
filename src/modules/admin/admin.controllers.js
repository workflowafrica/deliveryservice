import { Response, getEnv } from '../../utils/index';

export const adminFirstRoute = async (req, res) => {
  Response(res, { status: 200, message: 'Testing first route' });
};
  
import { Handle } from 'h3';
import { APIEndpoint } from '~~/utils/api';

const endpoint: Handle = async (_req, _res) => {
  try {
    const response = await fetch(APIEndpoint.PING);
    const data = await response.text();

    _res.statusCode = 200;
    return data;
  } catch (error) {
    _res.statusCode = 500;
    return { message: JSON.stringify(error) };
  }
};

export default endpoint;

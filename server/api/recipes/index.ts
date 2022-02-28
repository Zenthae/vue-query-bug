import { Handle } from 'h3';
import { APIEndpoint } from '~~/utils/api';

const endpoint: Handle = async (_req, _res) => {
  try {
    const response = await fetch(APIEndpoint.ALL_RECIPES);
    const data = await response.json();

    _res.statusCode = 200;
    return data;
  } catch (error) {
    _res.statusCode = 500;
    return { message: JSON.stringify(error) };
  }
};

export default endpoint;

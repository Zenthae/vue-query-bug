import { Handle } from 'h3';

const endpoint: Handle = (_req, _res) => {
  _res.statusCode = 200;
  return {};
};

export default endpoint;

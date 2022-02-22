import { Handle } from 'h3';

const endpoint: Handle = (_req, _res) => {
  if (_req.method !== 'POST') {
    _res.statusCode = 405;
    return _res.end();
  }

  _res.statusCode = 200;
  return {};
};

export default endpoint;

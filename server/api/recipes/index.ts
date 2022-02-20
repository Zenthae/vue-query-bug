import { Handle, useQuery } from 'h3';

const endpoint: Handle = (req, _res) => {
  return useQuery(req);
};

export default endpoint;

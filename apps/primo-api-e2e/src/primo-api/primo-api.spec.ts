import axios from 'axios';
import { HOST, PORT, API_URL } from '@primo-api/api-interface';

describe('GET /', () => {
  it('should return a message', async () => {
    const res = await axios.get(`${HOST}:${PORT}${API_URL}`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Welcome to primo-api!' });
  });
});

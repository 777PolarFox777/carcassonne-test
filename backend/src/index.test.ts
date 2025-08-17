import server from './index.js';

describe('GET /', () => {
  it('returns status ok', async () => {
    const res = await server.inject({ method: 'GET', url: '/' });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ status: 'ok' });
  });
});

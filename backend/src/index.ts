import Fastify from 'fastify';

const server = Fastify();

server.get('/', async () => ({ status: 'ok' }));

export default server;

if (process.env.NODE_ENV !== 'test') {
  const start = async () => {
    try {
      await server.listen({ port: 5000 });
      console.info('Server listening at http://localhost:5000');
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
  };

  start();
}

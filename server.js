const fastify = require('fastify')({ logger: true });

fastify.register(require('fastify-postgres'), {
  connectionString: 'postgres://user:password@localhost:5432/blog',
});

// Define your routes here (e.g., fastify.get, fastify.post)

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' }); // Correct way to pass port and host
    fastify.log.info(`Server running at http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

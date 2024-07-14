// Import the framework and instantiate it
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true,
})

const { PORT = '3000' } = process.env

fastify.get('/', async (request, reply) => {
  return { message: 'Hellooooo node!' }
})

fastify.listen(
  { host: '0.0.0.0', port: parseInt(PORT, 10) },
  (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  }
)

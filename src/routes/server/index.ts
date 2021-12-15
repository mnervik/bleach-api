import { FastifyInstance } from 'fastify'

import testRoute from './test'

export default async (fastify: FastifyInstance) => {
    fastify.register(testRoute, { prefix: 'test' })
}

import { FastifyInstance } from 'fastify'

import path from 'path'

import apiRoute from './api'
import serverRoute from './server'

export default async (fastify: FastifyInstance) => {
    //cors
    fastify.register(require('fastify-cors'))

    //static
    fastify.register(require('fastify-static'), {
        root: path.join(__dirname, '../public/images'),
        prefix: '/images/',
    })

    fastify.register(apiRoute, { prefix: 'api' })
    fastify.register(serverRoute)
}

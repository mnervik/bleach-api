export default {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'Nervik94',
    database: process.env.DB || 'bleach',
}

import mariaDB from 'mariaDB'

import { db as dbConfig } from './config'

const connect = (params = true) => {
    return mariaDB.createConnection({
        host: dbConfig.host,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
        namedPlaceholders: params,
    })
}

export default connect

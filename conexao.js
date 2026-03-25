import mysql from 'mysql2'
import { createConnection } from 'mysql2/promise'

export default class connectDB {

static connect() {

        let connection = mysql.createConnection({
            local: 'localhost',
            user: 'root',
            password: '',
            database:'livro',

    })
    connect.connectDB
    return(connection)

}

}
const myapl = require('mysql2')

export const mysqlPool = myapl.createPool({
    host: 'localhost',
    user: 'root',
    database:'6602490'
})
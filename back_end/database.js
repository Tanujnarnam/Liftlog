import pg from 'pg'

const Pool = pg.Pool

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE
})

export default pool;
import pg from 'pg'

const Pool = pg.Pool

const pool = new Pool({
  user: "mmjbngaz",
  password: "beI58qWzTb4rB64_RXeYU3pEPAFHv0Jr",
  host:"kashin.db.elephantsql.com",
  database:"mmjbngaz"
})

export default pool;
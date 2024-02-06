import { Router } from "express";
import pool from '../database.js'
import authorization from "../middleware/authorization.js";
const router = Router();

router.get("/", authorization, async(req,res) => {
  try{
    const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [req.id]);

    res.json(user.rows[0]);
  }
  catch(err){
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

export default router;
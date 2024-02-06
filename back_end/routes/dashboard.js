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

router.post("/track", authorization, async (req, res) => {
  try{
    const {exercise, weight, reps} = req.body;
    const new_date = Date(Date.now()).toString();

    const response = await pool.query("INSERT INTO data (exercise, weight, reps, date, user_id) VALUES ($1,$2,$3,$4,$5)", [exercise, weight, reps, new_date.slice(4, 15), req.id]);

    res.status(200).send("Entry Logged");
  }catch(err){
    console.log(err.message);
    res.status(500).send("Server Error");
  }
})

router.get("/view", authorization, async (req, res) => {
  try{
    const response = await pool.query("SELECT * FROM data WHERE user_id = $1 ORDER BY date DESC",[req.id]);
  
    res.send(response.rows);
  }catch(err){
    console.log(err.message);
    res.status(500).send("Server Error");
  }
})

export default router;
import { Router } from 'express';
import pool from '../database.js';
import bcrypt from 'bcrypt';
import jwtGenerator from '../utils/jwtGenerator.js';
import validInfo from '../middleware/validinfo.js';
import authorization from '../middleware/authorization.js';

const router = Router();

//registering
router.post("/register", validInfo, async (req,res) => {
  try{
    const { username, password } = req.body;

    //Checking if user already exists
    const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [username]);

    if(user.rows.length !== 0){
      return res.status(401).send("User already exists")
    }

    //encrypting password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    
    const bcryptPassword = await bcrypt.hash(password, salt);

    //entering new user inside database
    const newUser = await pool.query("INSERT INTO users (user_name, user_password) VALUES ($1,$2) RETURNING *", [username, bcryptPassword]);

    //Generating jwtToken
    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });
  }
  catch(err){
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/login", validInfo, async (req,res) => {
  try{
    //destructure req.body
    const {username, password} = req.body;

    //Check if user exists
    const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [username]);

    if(user.rows.length === 0){
      return res.status(401).json("Password or Username is incorrect");
    }

    //check if password is correct
    const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

    if(!validPassword){
      return res.status(401).json("Password or Email is incorrect");
    }

    //give them jwt token
    const token = jwtGenerator(user.rows[0].user_id);

    res.json({token});
  }
  catch(err){
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

router.get('/is-verify',authorization, async (req, res) => {
  try{
    res.json(true);
  }catch(err){
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

export default router;
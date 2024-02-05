export default (req, res, next) => {
  const { username, password } = req.body;

  if (req.path === "/register") {
    console.log(!email.length);
    if (![username, password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } 
  } else if (req.path === "/login") {
    if (![username, password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } 
  }

  next();
};
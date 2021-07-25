const jwt = require('jsonwebtoken')
const config = require('config')

//THis will only apply to protected routes. THis is the middleware to protect it.

module.exports= (req,res, next)=>{
  // Get token from request header
  const token = req.header('x-auth-token')

  // Check if token exists
  if(!token) return res.status(401).json({msg:" No token, authorization denide... FOOL!"})

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'))
    req.user = decoded.user
    next()
  } catch (err) {
  if(!token) return res.status(401).json({msg:" Invalid token"})
    
  }
}
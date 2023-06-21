const jwt = require('jsonwebtoken');

exports.verifyToken = (req,res,next)=>{
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
          message: 'Unauthorized access',
        });
      }
      try {
        const decoded = jwt.verify(token,process.env.secret_key );
    
        req.user = decoded;
        next();
    
        }catch (error) {
            return res.status(401).json({
              message: 'Invalid token',
            });
          }

};

exports.verifyAdmin = (req, res, next) => {
    if (!req.user.isAdmin) {
      return res.status(403).json({
        message: 'Access denied..Your Not Admin',
      });
    }
  
    next();
  };
let admin = false

const isAdmin = (req, res, next) => {
  if (admin) {
    next()
  }
  res.status(401).json({
    error: -1,
    descripcion: `ruta ${req.originalUrl} método ${req.method} no autorizada`
  })
}

module.exports = { isAdmin }

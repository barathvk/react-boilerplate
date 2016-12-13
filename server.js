const express = require('express')
const cors = require('cors')
const compression = require('compression')
const app = express()
const config = require('config')
app.set('view engine', 'pug')
app.use(cors())
app.use(compression())
app.get('/api/config', (req, res) => {
  res.send(config)
})
if (process.env.NODE_ENV !== 'development') {
  app.use(express.static('./build'))
  app.get('*', (req, res) => {
    res.render('index', config)
  })
  app.listen(3000, () => {
    console.log(`Started ${config.title} Server`)
  })
}
else {
  console.log('!! Starting in Development mode !!')
  app.listen(3001, () => {
    console.log(`Started ${config.title} Server`)
  })
}

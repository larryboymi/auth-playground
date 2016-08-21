require('babel-register');

const express = require('express');

const app = express()
app.set('view engine', 'jade')

app.use("/public", express.static('./public'))

app.use("/", (req, res) =>
  res.render('page', {title: 'Auth Playground'})
)

app.listen(process.env.PORT || 3000)

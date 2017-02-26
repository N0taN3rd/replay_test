const express = require('express')
const path = require('path')
const webpack = require('webpack')
const compress = require('compression')
const fs = require('fs-extra')

const app = express()

app.use(express.static(process.cwd()))

app.get('/', (req, res) => {
  res.send(fs.readFileSync('index.html'))
})

const server = app.listen('5555')

process.on('SIGINT', function () {
  server.close();
});

process.on('SIGTERM', function () {
  server.close();
});

'use strict';
const path = require('path')
const express = require('express')
const routes = require('./routes')

const app = express()

const port = process.env.port() || 2021

console.log(port)

app.use(routes)

app.set('views engine', 'hbs')

app.listen('2021', () => console.log('Listening on port 2021'))
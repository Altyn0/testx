import express from 'express' 
import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const server = express()

server.use =(express.json())

server.listen(3000,() => console.log('server is running'))

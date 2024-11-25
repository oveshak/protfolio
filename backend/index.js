import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';
import cors from 'cors';
const port = process.env.port || 5000;
const hostname='http://127.0.0.1:' ;
import dotenv from 'dotenv'
import connectdb from './utils/db.js';


dotenv.config({})

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true
}
app.use(cors(corsOptions));


import userRouter from './router/user.router.js'
import homeRouter from './router/home.router.js'
import aboutRouter from './router/about.router.js'
import skillRouter from './router/skills.route.js'
import protfolioRouter from './router/protfolio.router.js'
import contactRouter from './router/contact.router.js'
import qulificationRouter from './router/qulification.router.js'
app.use('/user', userRouter)
app.use('/home',  homeRouter)
app.use('/about',  aboutRouter)
app.use('/skill', skillRouter)
app.use('/protfolio', protfolioRouter)
app.use('/api', qulificationRouter)
app.use('/contact',contactRouter)

app.listen(port, () => {
    connectdb()
  console.log(`${hostname}${port}`)
})
import express, { Express } from 'express'

import { DataSource } from 'typeorm'
import dotenv from 'dotenv'

import cors from 'cors'
import bodyParser from 'body-parser'
import { Task } from './src/tasks/tasks.entity'
import { taskRouter } from './src/tasks/tasks.router'

const app: Express = express()
dotenv.config()

app.use(bodyParser.json())

app.use(cors())

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
})

const port = process.env.PORT

AppDataSource.initialize()
  .then(() => {
    app.listen(port)
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error(
      'Error during Data Source initialization',
      err,
    )
  })

app.use('/', taskRouter)

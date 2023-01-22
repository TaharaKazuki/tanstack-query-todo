import express, {
  Express,
  Request,
  Response,
} from 'express'
import dotenv from 'dotenv'

import { DataSource } from 'typeorm'

const app: Express = express()
dotenv.config()

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
})

const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Express')
})

AppDataSource.initialize()
  .then(() => {
    app.listen(port)
    console.info('Data Source has been initialized')
  })
  .catch((err) => {
    console.error('Error during Data', err)
  })

app.listen(port)

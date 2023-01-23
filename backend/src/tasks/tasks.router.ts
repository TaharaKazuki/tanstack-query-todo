import { Request, Response, Router } from 'express'

export const taskRouter: Router = Router()

taskRouter.get('/tasks', (req: Request, res: Response) => {
  res.send('Express')
})

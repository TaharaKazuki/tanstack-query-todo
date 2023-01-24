import { Request, Response, Router } from 'express'
import { TasksController } from './tasks.controller'

export const taskRouter: Router = Router()

taskRouter.get('/tasks', (req: Request, res: Response) => {
  const taskController = new TasksController()
  taskController.getAll()
})

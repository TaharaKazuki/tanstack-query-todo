import { AppDataSource } from '../../index'
import { Task } from './tasks.entity'

export class TasksController {
  constructor(
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}

  public async getAll(): Promise<Task[]> {
    let allTasks: Task[]

    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      })
    } catch (errors) {
      console.error(errors)
    }
  }
}

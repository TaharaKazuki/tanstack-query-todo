import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Priority } from '../enums/Priority'
import { Status } from '../enums/Status'

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'text',
  })
  title: string

  @Column({
    type: 'varchar',
  })
  date: string

  @Column({
    type: 'longtext',
  })
  description: string

  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.normal,
  })
  priority: Priority

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.todo,
  })
  status: Status
}

import { Entity, PrimaryGeneratedColumn } from 'typeorm'

import { Priority } from '../enums/Priority'
import { Status } from '../enums/Status'

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string
}

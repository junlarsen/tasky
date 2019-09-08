import { Tasky } from './Tasky'
import { Task } from './Task'

export interface Plugin {
    name: string
    tasks: Array<Task>
    run: (app: Tasky) => boolean
}

import Tasky from './core/Tasky'
import { Plugin } from './core/Plugin'

Tasky.use("custom", {} as Plugin)

export default Tasky
export { Plugin } from './core/Plugin'
export { Command } from './core/Command'
export { task } from './core/Task'

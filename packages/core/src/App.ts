import Tasky from './core/Tasky'
import GitPlugin  from './plugins/Git'

Tasky
    .use("git", GitPlugin)

export default Tasky
export { Plugin } from './core/Plugin'
export { Command } from './core/Command'
export { task } from './core/Task'

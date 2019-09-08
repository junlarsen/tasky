import Tasky from './core/Tasky'
import GitPlugin, { Git } from './plugins/Git'

Tasky
    .use("git", GitPlugin)

export default Tasky

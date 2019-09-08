import Tasky from './core/Tasky'
import GitPlugin  from './plugins/Git'

Tasky
    .use("git", GitPlugin)

export default Tasky

import { Plugin } from '../core/Plugin'
import { Tasky } from '../core/Tasky'
import { task } from '../core/Task'

export class Git implements Plugin {
    public run(plugin: Tasky): boolean {
        return true
    }

    public async pull() {
        await task("git")
            .addArgument("pull")
            .execute()
    }
}

export default new Git()

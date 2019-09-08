import { Plugin, task } from '@tasky/core'

export class Git implements Plugin {
    public async pull() {
        await task("git")
            .addArgument("pull")
            .execute()
    }
}

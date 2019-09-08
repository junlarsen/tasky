import { Plugin, task } from '@tasky/core'

export class GitPlugin implements Plugin {
    public async pull() {
        await task("git")
            .addArgument("pull")
            .execute()
    }
}

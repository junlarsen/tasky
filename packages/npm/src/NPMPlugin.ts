import { Plugin, task } from '@tasky/core'

export interface NPMInstallOptions {
    devDependency?: boolean
    global?: boolean
}

export class NPM implements Plugin {
    public async install(options: NPMInstallOptions = {}, ...packages: Array<string>) {
        const job = task("npm")
            .addArgument("i")

        packages.forEach((it: string) => job.addArgument(it))

        if (options.devDependency) job.addOption('-D')
        if (options.global) job.addOption('-g')

        await job.execute()
    }

    public async runScript(name: string) {
        await task("npm")
            .addArgument("run")
            .addArgument(name)
    }
}

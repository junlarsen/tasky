import { Plugin, TaskyApp, task } from '@tasky/core'

export class NPMPlugin implements Plugin {
    public async install(dev: boolean, ...packages: Array<string>) {
        const t = task("npm")
            .addArgument("install")

        packages.forEach((it: string) => {
            t.addArgument(it)
        })

        if (dev) {
            t.addOption('-D')
        }

        await t.execute()
    }

    public async runScript(name: string) {
        await task("npm")
            .addArgument("run")
            .addArgument(name)
    }
}

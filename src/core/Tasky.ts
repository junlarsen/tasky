import cp from 'child-process-promise'
import { Plugin } from './Plugin';

export class Tasky {

    public constructor(private plugins: Array<Plugin>) {
    }

    public use(plugin: Plugin): Tasky {
        this.plugins.push(plugin)

        return this
    }

    public plugin(name: string): Plugin {
        return this.plugins.filter((p: Plugin) => p.name === name)[0]
    }

    public run(): void {

    }

}

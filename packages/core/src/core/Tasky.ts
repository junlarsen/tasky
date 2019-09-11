import { Plugin } from './Plugin'
import chalk from 'chalk'
import { Git } from '@tasky/git'

interface MapPlugin {
    git: Git
    [key: string]: any
}

export class Task<T> {
    public constructor(public callback: (...args: any) => any, public plugin: Plugin) {}

    public async run() {
        await this.callback(this.plugin as T)
    }
}

export class Tasky {

    /**
     * Name to Plugin map of registered plugins
     */
    private plugins: Map<string, Plugin> = new Map()

    private tasks: Array<Task<any>> = []

    /**
     * Register a plugin
     *
     * @param name
     * @param plugin
     */
    public use(name: string, plugin: Plugin): Tasky {
        this.plugins.set(name, plugin)

        return this
    }

    /**
     * Run a task and get the task in the callback
     *
     * @param name
     * @param callback
     */
    public task<T extends MapPlugin[K], K extends keyof MapPlugin = any>(name: K, callback: (plugin: T) => void): Tasky;
    public task<T extends Plugin>(name: string, callback: (plugin: T) => void): Tasky {
        const plugin = this.plugins.get(name)

        if (plugin === undefined) {
            console.log(chalk.redBright(`Error: Task with name (${name}) has not been defined`))
            return this
        }

        this.tasks.push(new Task<T>(callback, plugin))

        return this
    }

    /**
     * Runs all listed tasks
     */
    public async run() {
        if (this.tasks.length > 0) {
            await this.tasks[0].run()
            this.tasks.shift()

            await this.run()
        }
    }

}

export default new Tasky()

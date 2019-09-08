import { Plugin } from './Plugin'
import chalk from 'chalk'

export class Tasky {

    /**
     * Name to Plugin map of registered plugins
     */
    private plugins: Map<string, Plugin> = new Map()

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
    public task<T extends Plugin>(name: string, callback: (plugin: T) => void): Tasky {
        const plugin = this.plugins.get(name)

        if (plugin === undefined) {
            console.log(chalk.redBright(`Error: Task with name (${name}) has not been defined`))
            return this
        }

        callback(plugin as T)

        return this
    }

}

export default new Tasky()

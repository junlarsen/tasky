import { Plugin } from './Plugin'

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
            throw Error(`Task with name (${name}) has not been defined`)
        }

        callback(plugin as T)

        return this
    }

}

export default new Tasky()

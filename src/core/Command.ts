import { exec } from 'child-process-promise'
import chalk from 'chalk'

export class Command {

    /**
     * List of command line arguments
     */
    private arguments: Array<string> = []

    public constructor(private basename: string) {}

    /**
     * Adds an argument
     *
     * @param arg
     */
    public addArgument(arg: string): Command {
        this.arguments.push(arg)

        return this
    }

    /**
     * Adds an argument, alias for addArgument
     *
     * @param opt
     */
    public addOption(opt: string): Command {
        return this.addArgument(opt)
    }

    /**
     * Executes the built command
     */
    public async execute(maxBuffer: number = 4096 * 4096): Promise<void> {
        const command = `${this.basename} ${this.arguments.join(' ')}`

        const { stderr, stdout } = await exec(command, { maxBuffer })

        if (stderr) {
            console.log(chalk.redBright(stderr))
        }

        console.log(
            chalk.green(`Task \`${command}:\``),
            chalk.white(stdout)
        )
    }

}

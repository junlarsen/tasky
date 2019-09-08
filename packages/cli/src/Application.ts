import chalk from 'chalk'
import fs from 'fs-extra'
import cp from 'child_process'
import tsconfig from '../assets/tsconfig.json'
import npm from '../assets/package.json'

export class Application {

    /**
     * Bootstrap the application with given arguments
     *
     * @param args
     */
    public constructor(private args: Array<string> = []) {
        if (args.length < 3) {
            this.panic("No config file specified.")
        }
    }

    /**
     * Generate the build dir if it does not exist
     */
    public async generateDirectory() {
        const path = `${process.cwd()}/.tasky`

        if (!fs.existsSync(path)) {
            await fs.mkdir(path)
        }
    }

    /**
     * Clone the config file into the build dir
     */
    public async cloneFiles() {
        const path = this.args[2]
        const outdir = `${process.cwd()}/.tasky/`

        if (!fs.existsSync(path)) {
            this.panic(`Specified file (${path}) does not exist.`)
        }

        await fs.copyFile(path, `${outdir}/config.ts`)
        await fs.writeFile(`${outdir}/package.json`, JSON.stringify(npm))
        await fs.writeFile(`${outdir}/tsconfig.json`, JSON.stringify(tsconfig))
    }

    /**
     * Run the commands and pipe to stdout
     */
    public async build() {
        cp.exec('cd ./.tasky && npm install', () => {
            const { stdout, stderr } = cp.spawn('tsc && node ./.tasky/config.js', { shell: true })
            stdout.pipe(process.stdout)
            stderr.pipe(process.stderr)
        })
    }

    /**
     * Terminates the process and writes a message
     *
     * @param message
     * @param code
     */
    private panic(message: string, code: number = 1) {
        console.log(chalk.redBright(`Error: ${message}`))
        process.exit(code)
    }
}

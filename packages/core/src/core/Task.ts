import { Command } from './Command'

/**
 * Shorthand for new Command
 *
 * @param basename
 */
export function task(basename: string): Command {
    return new Command(basename)
}

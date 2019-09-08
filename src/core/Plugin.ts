import { Tasky } from './Tasky'

/**
 * Definition for any Tasky plugin
 */
export interface Plugin {
    run(app: Tasky): boolean
}

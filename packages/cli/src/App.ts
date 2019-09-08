#!/usr/bin/env node

import { Application } from './Application'

async function main() {
    const app = new Application(process.argv)

    await app.generateDirectory()
    await app.cloneFiles()
    await app.build()
}

main()

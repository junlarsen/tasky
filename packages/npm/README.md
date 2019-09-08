# `@tasky/npm`

This is a plugin to interact with NPM using Tasky.

## Usage

```ts
import Tasky from '@tasky/core'
import NPMPlugin, { NPM } from '@tasky/npm'

Tasky.use("npm", NPMPlugin")
Tasky.task<NPM>("npm", (npm) => {
  npm.install('@tasky/cli')
  npm.runScript('build')
})
```

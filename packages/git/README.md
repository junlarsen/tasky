# `@tasky/git`

This is a plugin to interact with Git using Tasky.

## Usage

```ts
import Tasky from '@tasky/core'
import GitPlugin, { Git } from '@tasky/git'

Tasky.use("git", GitPlugin")
Tasky.task<Git>("git", (git) => {
  git.pull()
})
```

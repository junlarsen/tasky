# Tasky

Tasky is an overengineered TypeScript wrapper around your terminal.

## Usage

First of all we need to install the CLI.

```
yarn add global @tasky/cli
# or NPM
npm install -g @tasky/cli
```

To run a task we need to create it. Here's an example showing how to git pull.

```ts
// task.ts
import Tasky from '@tasky/core'
import GitPlugin, { Git } from '@tasky/git'

Tasky.use("git", GitPlugin)
    .task<Git>("git", (git) => {
        git.pull()
    })
```

You can now execute this task via `tasky task.ts`.

## But what if Tasky doesn't have my commands?

You can use the `task` import along with the `"custom"` identifier to execute your own commands.

```ts
import Tasky, { task } from '@tasky/core'

Tasky.task("custom", () => {
    task("npm")
        .addArgument("install")
        .execute()
})
```

## Why not use a shell?

Good question, I didn't quite feel like using bash so I made this.

## Is this a serious project?

Overengineering is no laughing matter.

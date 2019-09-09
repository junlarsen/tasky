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
    .task<Git>("git", async (git) => {
        await git.pull()
    }).run()
```

You can now execute this task via `tasky task.ts`.

## But what if Tasky doesn't have my commands?

You can use the `task` import along with the `"custom"` identifier to execute your own commands.

```ts
import Tasky, { task } from '@tasky/core'

Tasky.task("custom", async () => {
    await task("npm")
        .addArgument("install")
        .execute()
}).run()
```

## What if I want to use my own dependencies?

If you have your own dependencies or require external dependencies inside your config you can create a `tasky.json` file.

This file should be an object with all the dependencies you're going to use. This is an example file which would grab the standard packages.

```json
{
  "@tasky/core": "^1.0.0",
  "@tasky/git": "^1.0.0",
  "@tasky/npm": "^1.0.0"
}
```

Tasky automatically detects this file and will use these dependencies instead of the standard ones.

## Why not use a shell?

Good question, I didn't quite feel like using bash so I made this.

## Is this a serious project?

Overengineering is no laughing matter.

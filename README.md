# Phaser + PhaserEditor2D + Vue + TypeScript Project Template

## Overview

This template integrates Phaser 3, Vue 3, TypeScript, and Phaser Editor 2D v3 for game development. Additionally, it includes setup instructions for Visual Studio Code with Volar for an enhanced development experience and a GitHub Pages deployment workflow for easy hosting.

![Header](static/header.png)

## Recommended IDE Setup

For an optimal development setup, use VSCode with the following extensions:

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

If you find the standalone TypeScript plugin slow, consider enabling the more performant Take Over Mode provided by Volar.

## Type Support for `.vue` Imports in TS

Due to TypeScript limitations with `.vue` imports, use `vue-tsc` for type checking. In VSCode, the TypeScript Vue Plugin (Volar) is essential for TypeScript awareness of `.vue` types.

To enable Volar's Take Over Mode for improved performance:

1. Disable the built-in TypeScript Extension:
   - Run `Extensions: Show Built-in Extensions` from VSCode's command palette.
   - Find `TypeScript and JavaScript Language Features`, right-click, and select `Disable (Workspace)`.
2. Reload VSCode by running `Developer: Reload Window` from the command palette.

## Project Setup

```sh
   pnpm install
```

### Development

```sh
   pnpm dev
```

### Production Build

```sh
   pnpm build
```

### Unit Tests (Vitest)

```sh
   pnpm test:unit
```

### End-to-End Tests (Cypress)

For development:

```sh
   pnpm test:e2e:dev
```

For production (recommended before deployment):

```sh
   pnpm build
   pnpm test:e2e
```

## Linting (ESLint)

```sh
   pnpm lint
```

For detailed Vite configuration, refer to [Vite Configuration Reference](https://vitejs.dev/config/).

## First Steps

Ensure Node.js and npm are installed.

Install dependencies:

```sh
   pnpm install
   pnpm update
```

Run the development server:

```sh
   pnpm start
```

Open the browser at `http://127.0.0.1:8080`.

Make a production build:

```sh
   pnpm build
```

## Hosting on GitHub Pages

1. Create a GitHub repository.
2. In **Settings** > **GitHub Pages**, set **GitHub Actions** in the **Source** parameter.
3. Run the **Build game** workflow in **Actions**.
4. Check the deployed game URL in **Settings** > **GitHub Pages**.
5. Subsequent pushes to `main` branch auto-deploy.

Remove `.github/workflows/main.yml` if not deploying to GitHub Pages.

Watch this [video tutorial](https://www.youtube.com/watch?v=lndU7UAjzgo&t=183s) for more details.

## Running the Editor

- Run locally:

```sh
   pnpm editor
```

- Run in a remote environment (e.g., Gitpod):

```sh
   pnpm editor-remote
```

For more options:

```sh
   pnpm phasereditor2d-launcher -help
```

If globally installed:

```sh
   PhaserEditor2D -project .
```

## Phaser Editor 2D Considerations

### Excluding Files

Use `/skip` to exclude files from the editor project, e.g., `node_modules`.

Learn more about [resource filtering](https://help.phasereditor2d.com/v3/misc/resources-filtering.html).

### Asset Root

Change the asset root by creating an empty `publicroot` file. E.g., `/static/publicroot`.

### Asset Pack Content Hash

Includes content hash for asset pack files. Use `phaser-asset-pack-hashing` for parsing and transforming.

Learn more about [phaser-asset-pack-hashing](https://www.pnpmjs.com/package/phaser-asset-pack-hashing).

### Coding

`/src` contains TypeScript code, including scenes and user components. Visual Studio Code is recommended.

### Scene, User Components, and ScriptNode Configuration

Configured to compile to TypeScript ES modules. Compilers auto-import used classes.

### ScriptNodes

`/src/scripts/script-nodes-basic` has script nodes. Add custom ones to `/src/scripts/script-nodes`.

## About

Created by the Phaser Editor 2D team.

Feel free to adjust and enhance the template for your game development needs!

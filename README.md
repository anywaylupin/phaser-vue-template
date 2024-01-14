# Basic TypeScript project template

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/PhaserEditor2D/starter-template-basic-typescript)

This is a Phaser Editor 2D v3 project template.

## Configuration

* It includes the latest Phaser v3 runtime as a node package.
* It is coded in TypeScript. The `tsc` is included as a node package.
* It includes a VS Code project configuration (`jsconfig.json` file).

## Compiles the source code

This project is based on TypeScript so for getting the game, first, you need to install TypeScript and other dependencies:

```bash
pnpm install
pnpm update
```

Then, for running the game, you need to compile the TypeScript files:

```bash
pnpm build
```

It outputs the JavaScript code into the `game.js` file.

Often, you would like to run the TypeScript compiler in watch mode:

```bash
pnpm start
```

## Run the editor

* If you have NodeJS installed, you can run the editor using the `editor` NPM script, defined in the `package.json` file:

    ```bash
    pnpm install
    pnpm editor
    ```

* If you are in a remote environment (like the Gitpod.io IDE), then run the editor like this:

    ```bash
    pnpm editor-remote
    ```

* If you want to see all the editor options, run:

    ```bash
    npx phasereditor2d-launcher -help
    ```

* If Phaser Editor 2D Core is globally installed, you can run:

    ```bash
    PhaserEditor2D -project .
    ```

## Gitpod

This repository is ready for start coding in Gitpod, a Cloud Development Environment. You only need to [click on this link](https://gitpod.io/#https://github.com/PhaserEditor2D/starter-template-basic-typescript) for starting a new workspace.

This is what Gitpod does:

* Creates a workspace for this project.
* Opens VS Code to edit this repo.
* Installs & updates the dependencies of this repo.
* Runs Phaser Editor 2D Core server in port `1959`.

In the **Ports** panel in VS Code, it shows the links for opening the editor (port `1959`). It gives you the options of copy the URL, open the URL in a preview panel, or open the URL in a new tab.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

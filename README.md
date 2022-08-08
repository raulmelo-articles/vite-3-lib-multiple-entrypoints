# Build a JavaScript library with multiple entry points using Vite 3 (Demo)

> Repository for: https://www.raulmelo.dev/blog/build-javascript-library-with-multiple-entry-points-using-vite-3

To make easier the vizualization of how that would work, I've created this repository that uses pnpm workspaces so I can have the demo app and the lib examples working fine.

## Getting started

To run this app you need:

- [pnpm](https://pnpm.io/)
- Nodejs 16 or higher

## Project structure

- `demo`: In this folder you're going to find a simple vanilla-ts Vite APP that has dependency both packages using different strategies.
- `packages/import-build-example`: This will contain the source code for the "import build from vite" strategy.
- `packages/single-vite-config-example`: This will contain the source code for the using environment variables to determine what to build.

## Running

First, install the dependencies:

```
pnpm install
```

Because both packages has a command `prepare` that execute build, the files that the `demo` app will consume will be ready.

Now, you can run the demo app:

```bash
pnpm -F demo run dev
```

> in pnpm workspaces we have to filter where we want to execute the command

If you open the [`main.ts`](demo/src/main.ts) file from the demo app, you'll the imports from both examples. Also, opening the browser in the port Vite gives to you, you'll be able to find the consoles that they produce.

While using VSCode or an IDE that supports TypeScript intellisense, you should also be able to navigate through both packages types.

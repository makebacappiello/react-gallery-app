# React Gallery App

An image gallery built with React, Vite and React Router. It shows photos from the Pixabay API for three default topics (cats, dogs, computers) and for any word the user searches.

## Setup

1. Run `npm install`.
2. Create a file called `config.js` inside the `src` folder.
3. Put this in it, using your own Pixabay API key:

```js
const apiKey = "YOUR API KEY";
export default apiKey;
```

4. Run `npm run dev` and open the address it prints.

`src/config.js` is listed in `.gitignore`, so your key is never uploaded to GitHub.# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React+Vite Starter

A starter template for [React](https://reactjs.org/) projects.

## Features

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router (v6.10)](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- [PWA](https://vite-pwa-org.netlify.app/)

## Installation

```bash
git clone https://github.com/furkanmavili/react-vite-starter.git
```

or you can use `Use this template` button to create a new repository from this template.

```bash
cd react-vite-starter
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

## Setup

- Replace the icons in public folder with your own icons. <br>
- Change page title and add your own meta tags in `index.html`. <br>
- tailwind.config.js has a some default settings from ([shadcn/ui](https://github.com/shadcn/ui)). If you don't want to use it, you can remove it. <br>

## Detailed Features

### React Router (v6.10)

v6.10 has a lazy loading feature. You can use it like this:

```tsx
<Route path="/a" lazy={() => import("@/pages/home")} />
```

### Prettier

Prettier config has a 2 additional plugin;

1. Import sorter ([@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports))
2. Tailwind class sorter ([prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss))

### PWA ([vite-plugin-pwa](https://vite-pwa-org.netlify.app/))

PWA plugin is configured to work with Vite. You can change the configuration in `vite.config.ts`.
You need to replace the icons in `public` folder with your own icons.

### [ui.shadcn.com ](https://ui.shadcn.com/)

I added the required tailwind config to `tailwind.config.js`. You can copy the components to `ui` folder and use them (You need to install dependencies for ui components).

## Contributing

For any questions, suggestions, or issues, please open an issue or pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)

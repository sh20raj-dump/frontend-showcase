# 🎨 Frontend Showcase

A comprehensive collection of modern UI components, dashboards, and full-stack applications built with cutting-edge technologies. This showcase demonstrates the latest in frontend development with beautiful designs, smooth animations, and responsive layouts.

## 🚀 Live Demo

Visit the live showcase: [http://localhost:3004](http://localhost:3004)

## ✨ Featured Projects

### 🛍️ **E-commerce Clone**
- **Amazon Clone** - Complete e-commerce platform with shopping cart functionality
- **Technologies**: Next.js, React, Context API, CSS Modules
- **Features**: Product catalog, shopping cart, user interface, responsive design
- **Path**: `/clones/amazon`

### 🎨 **UI Design Systems**

#### **Glassmorphism UI Kit**
- Beautiful glass morphism components with interactive demos
- **Technologies**: React, CSS, Backdrop filters
- **Features**: Live code examples, copy-to-clipboard, animated backgrounds
- **Path**: `/ui/glassmorphism`

#### **Neumorphic Login Form**
- Soft UI authentication system with neumorphic design principles
- **Technologies**: React, CSS, Soft shadows
- **Features**: Form validation, social login options, responsive design
- **Path**: `/ui/neumorphic`

#### **Component Library**
- Comprehensive collection of 50+ reusable UI components
- **Technologies**: React, Tailwind CSS, Modern patterns
- **Features**: Live preview, code examples, installation guides
- **Path**: `/ui/component-library`

### 🔧 **Interactive Components**

#### **Dark Mode Toggle**
- Advanced theme switching system with multiple variants
- **Technologies**: React, CSS animations, System preferences
- **Features**: Smooth transitions, multiple toggle styles, accessibility
- **Path**: `/ui/dark-mode`

#### **Shadcn Dashboard**
- Professional dashboard with project analytics and progress tracking
- **Technologies**: Next.js, Shadcn/ui, Charts, Modern design
- **Features**: Project management, analytics, filtering, responsive layout
- **Path**: `/ui/dashboard`

### 🌐 **Business Websites**

#### **Restaurant Website**
- Modern restaurant website with reservations and menu display
- **Technologies**: Next.js, React, Tailwind CSS
- **Features**: Menu display, reservation system, gallery, contact forms
- **Path**: `/restaurant-website`

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 15.3.3
- **UI Library**: React 18
- **Styling**: Tailwind CSS, CSS Modules
- **Components**: Shadcn/ui
- **Icons**: Lucide React
- **Development**: Turbopack, ESLint

## 🎯 Key Features

- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Modern UI/UX** - Latest design trends and principles
- ✅ **Interactive Components** - Smooth animations and transitions
- ✅ **Code Examples** - Copy-paste ready code snippets
- ✅ **Dark/Light Themes** - Complete theme support
- ✅ **Performance Optimized** - Fast loading and smooth interactions
- ✅ **Accessibility** - WCAG compliant components
- ✅ **TypeScript Ready** - Full TypeScript support

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend-sh
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Cloudflare integration

Besides the `dev` script mentioned above `c3` has added a few extra scripts that allow you to integrate the application with the [Cloudflare Pages](https://pages.cloudflare.com/) environment, these are:
  - `pages:build` to build the application for Pages using the [`@cloudflare/next-on-pages`](https://github.com/cloudflare/next-on-pages) CLI
  - `preview` to locally preview your Pages application using the [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI
  - `deploy` to deploy your Pages application using the [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI

> __Note:__ while the `dev` script is optimal for local development you should preview your Pages application as well (periodically or before deployments) in order to make sure that it can properly work in the Pages environment (for more details see the [`@cloudflare/next-on-pages` recommended workflow](https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md#recommended-development-workflow))

### Bindings

Cloudflare [Bindings](https://developers.cloudflare.com/pages/functions/bindings/) are what allows you to interact with resources available in the Cloudflare Platform.

You can use bindings during development, when previewing locally your application and of course in the deployed application:

- To use bindings in dev mode you need to define them in the `next.config.js` file under `setupDevBindings`, this mode uses the `next-dev` `@cloudflare/next-on-pages` submodule. For more details see its [documentation](https://github.com/cloudflare/next-on-pages/blob/05b6256/internal-packages/next-dev/README.md).

- To use bindings in the preview mode you need to add them to the `pages:preview` script accordingly to the `wrangler pages dev` command. For more details see its [documentation](https://developers.cloudflare.com/workers/wrangler/commands/#dev-1) or the [Pages Bindings documentation](https://developers.cloudflare.com/pages/functions/bindings/).

- To use bindings in the deployed application you will need to configure them in the Cloudflare [dashboard](https://dash.cloudflare.com/). For more details see the  [Pages Bindings documentation](https://developers.cloudflare.com/pages/functions/bindings/).

#### KV Example

`c3` has added for you an example showing how you can use a KV binding.

In order to enable the example:
- Search for javascript/typescript lines containing the following comment:
  ```ts
  // KV Example:
  ```
  and uncomment the commented lines below it (also uncomment the relevant imports).
- In the `wrangler.jsonc` file add the following configuration line:
  ```
  "kv_namespaces": [{ "binding": "MY_KV_NAMESPACE", "id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }],
  ```
- If you're using TypeScript run the `cf-typegen` script to update the `env.d.ts` file:
  ```bash
  npm run cf-typegen
  # or
  yarn cf-typegen
  # or
  pnpm cf-typegen
  # or
  bun cf-typegen
  ```

After doing this you can run the `dev` or `preview` script and visit the `/api/hello` route to see the example in action.

Finally, if you also want to see the example work in the deployed application make sure to add a `MY_KV_NAMESPACE` binding to your Pages application in its [dashboard kv bindings settings section](https://dash.cloudflare.com/?to=/:account/pages/view/:pages-project/settings/functions#kv_namespace_bindings_section). After having configured it make sure to re-deploy your application.

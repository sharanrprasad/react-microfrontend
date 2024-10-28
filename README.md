# vite-module-federation
Getting started with micro-frontends and module federation with React and Vite

The idea is that the application is separated into several independently deployable frontend modules.
Each module is maintained by a separate team. The app module is the host module that imports components exposed by the other remote modules.

Overview and relationship of modules:
```
dashboard (host, vite)
├── customers (remote, vite)
├── orders (remote, cra/webpack)
└── products (remote, vite)
```

## Development Setup
In order to test the integration of the different modules, each module needs to be started in preview mode.
In the regular dev mode, the module federation will not be enabled, thus the exposed bundles won't be available.

Install all dependencies
```shell
npm install
```

Build all packages: 
```shell
npm run build
```

### Customers
Run the shopping cart module in preview mode:
```shell
cd packages/user
npm run preview
```
> http://localhost:5001

### Products
Run the products module in preview mode:
```shell
cd packages/products
npm run preview
```
> http://localhost:5002

### Main (Host Application)
Run the host app in preview mode:
```shell
cd packages/main
npm run preview
# Alternatively run in development mode (with hot reload)
# npm run dev
```
> http://localhost:5000

---

Requirements

Main page with a header that shows "complete profile" alert, if profile is not completed. 
Customer info component  in the main page. 
Products info component in the main page.
Full customer page
Full product page. 
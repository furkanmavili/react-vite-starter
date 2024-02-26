import { RouterProvider, createRouter } from "@tanstack/react-router"
import ReactDOM from "react-dom/client"

import { routeTree } from "./routeTree.gen"
import "./index.css"
import { ThemeProvider } from "@/components/theme-provider"

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
})

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById("root")

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

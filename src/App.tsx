import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

import Layout from "@/components/layout"

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" lazy={() => import("@/pages/home")} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={routes} />
}

export default App

import { Link, createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/")({
  component: LayoutAComponent,
})

function LayoutAComponent() {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/layout-b">Layout b</Link>
    </div>
  )
}

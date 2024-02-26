import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_app/")({
  component: LayoutAComponent,
})

function LayoutAComponent() {
  return <div>Home Page</div>
}

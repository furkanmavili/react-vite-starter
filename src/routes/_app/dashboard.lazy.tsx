import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/dashboard")({
  component: Dashboard,
})

function Dashboard() {
  return <div>I'm Dashboard!</div>
}

import { Outlet, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_auth")({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className="p-4">
      <h3>Welcome Auth!</h3>
      <Outlet />
    </div>
  )
}

import { createLazyFileRoute } from "@tanstack/react-router"

import { Button } from "@/components/ui/button"

export const Route = createLazyFileRoute("/_auth/login")({
  component: Login,
})

function Login() {
  return (
    <div>
      <h3>Welcome Login!</h3>
      <Button>Click me</Button>
    </div>
  )
}

import * as React from "react"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/layout-b")({
  component: LayoutBComponent,
})

function LayoutBComponent() {
  return <div>I'm B!</div>
}

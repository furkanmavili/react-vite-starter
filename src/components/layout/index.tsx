import { Link, Outlet } from "react-router-dom"

import { buttonVariants } from "@/components/ui/button"

export default function Layout() {
  return (
    <div className="flex h-full min-h-screen flex-col overflow-hidden bg-background p-10 text-primary">
      <header className="flex items-center justify-between">
        <Link to="/" className="hover:underline">
          React + Vite Starter
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "sm" })}
          to="features"
          role="link"
        >
          Features
        </Link>
      </header>
      <main className="h-0 flex-grow py-10">
        <Outlet />
      </main>
      <footer className="mt-auto">
        <p>Footer</p>
      </footer>
    </div>
  )
}

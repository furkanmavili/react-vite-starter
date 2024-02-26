import { Outlet } from "@tanstack/react-router"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

export default function Layout() {
  return (
    <div className="flex h-full min-h-screen flex-col overflow-hidden bg-background p-10 text-primary">
      <Header />
      <main className="h-0 flex-grow py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

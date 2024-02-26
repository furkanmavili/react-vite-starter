import { Link } from "@tanstack/react-router"

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>React + Vite Starter</div>
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
      <div></div>
    </header>
  )
}

import { render, screen } from "@/lib/test-utils"

import { Component as Home } from "./"

describe("home page", () => {
  it("the title is visible", () => {
    render(<Home />)
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument()
  })
})

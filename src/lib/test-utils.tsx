import { render } from "@testing-library/react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    ...options,
  })
}

export * from "@testing-library/react"
export { default as userEvent } from "@testing-library/user-event"
// override render export
export { customRender as render }

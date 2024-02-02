import { screen, waitFor } from "@testing-library/react"
import App from "./App"
import { renderWithProviders } from "./utils/test-utils"

test("App renders correctly with initial state", () => {
  renderWithProviders(<App />)

  // Verify initial render state
  expect(screen.getByText(/learn/i)).toBeInTheDocument()
  expect(screen.getByLabelText("Count")).toHaveTextContent("0")
  expect(screen.getByLabelText("Set increment amount")).toHaveValue(2)
})

test("Increment and Decrement buttons work correctly", async () => {
  const { user } = renderWithProviders(<App />)

  // Increment count
  await user.click(screen.getByLabelText("Increment value"))
  expect(screen.getByLabelText("Count")).toHaveTextContent("1")

  // Decrement count
  await user.click(screen.getByLabelText("Decrement value"))
  expect(screen.getByLabelText("Count")).toHaveTextContent("0")
})

test("Add Amount functionality works correctly", async () => {
  const { user } = renderWithProviders(<App />)

  // Add Amount button increases count to 2
  await user.click(screen.getByText("Add Amount"))
  expect(screen.getByLabelText("Count")).toHaveTextContent("2")

  // Custom increment value of 2 doubles the count to 4
  const incrementValueInput = screen.getByLabelText("Set increment amount")
  await user.clear(incrementValueInput)
  await user.type(incrementValueInput, "2")
  await user.click(screen.getByText("Add Amount"))
  expect(screen.getByLabelText("Count")).toHaveTextContent("4")

  // Negative increment value of -1 increases count to 3
  await user.clear(incrementValueInput)
  await user.type(incrementValueInput, "-1")
  await user.click(screen.getByText("Add Amount"))
  expect(screen.getByLabelText("Count")).toHaveTextContent("3")
})

test("Add Async functionality works correctly", async () => {
  const { user } = renderWithProviders(<App />)

  // Add Async button increases count to 2
  await user.click(screen.getByText("Add Async"))

  // Wait for count to update
  await waitFor(() =>
    expect(screen.getByLabelText("Count")).toHaveTextContent("2"),
  )

  // Custom increment value of 2 doubles the count to 4
  const incrementValueInput = screen.getByLabelText("Set increment amount")
  await user.clear(incrementValueInput)
  await user.type(incrementValueInput, "2")
  await user.click(screen.getByText("Add Async"))
  await waitFor(() =>
    expect(screen.getByLabelText("Count")).toHaveTextContent("4"),
  )

  // Negative increment value of -1 increases count to 3
  await user.clear(incrementValueInput)
  await user.type(incrementValueInput, "-1")
  await user.click(screen.getByText("Add Async"))
  await waitFor(() =>
    expect(screen.getByLabelText("Count")).toHaveTextContent("3"),
  )
})

test("Add If Odd functionality works correctly", async () => {
  const { user } = renderWithProviders(<App />)

  // Add If Odd button does not change count when count is even
  await user.click(screen.getByText("Add If Odd"))
  expect(screen.getByLabelText("Count")).toHaveTextContent("0")

  // Increment count to 1
  await user.click(screen.getByLabelText("Increment value"))
  expect(screen.getByLabelText("Count")).toHaveTextContent("1")

  // Add If Odd button increases count to 3
  await user.click(screen.getByText("Add If Odd"))
  expect(screen.getByLabelText("Count")).toHaveTextContent("3")

  // Custom increment value of 1 increases count to 4
  const incrementValueInput = screen.getByLabelText("Set increment amount")
  await user.clear(incrementValueInput)
  await user.type(incrementValueInput, "1")
  await user.click(screen.getByText("Add If Odd"))
  expect(screen.getByLabelText("Count")).toHaveTextContent("4")

  // Custom increment value of -1 does not change count when count is even
  await user.clear(incrementValueInput)
  await user.type(incrementValueInput, "-1")
  await user.click(screen.getByText("Add If Odd"))
  expect(screen.getByLabelText("Count")).toHaveTextContent("4")
})

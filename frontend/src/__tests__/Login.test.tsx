
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { test, expect } from "vitest";
import { TextEncoder, TextDecoder } from 'node:util';
import Login from "../pages/Login";


globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = (TextDecoder as any);

test("Login form renders correctly and accepts inputs", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  // Check if email and password fields exist
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const loginButton = screen.getByRole("button", { name: /login/i });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();

  // Simulate inputs
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });

  // Check if useState stores the values
  expect(emailInput).toHaveValue("test@example.com");
  expect(passwordInput).toHaveValue("password123");
});
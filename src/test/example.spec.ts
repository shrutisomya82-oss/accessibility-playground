import { test, expect } from "@playwright/test";

test("primary accessibility playground flow works", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173");

  // Check page heading
  await expect(
    page.getByText("Accessibility Playground")
  ).toBeVisible();

  // Open the modal
  await page.getByText("Open Modal").click();

  // Check modal content
  await expect(
    page.getByText("This is an accessible modal dialog.")
  ).toBeVisible();

  // Close the modal
  await page.getByText("Close").click();

  // Check tabs work
  await page.getByRole("tab", { name: "Projects" }).click();

  await expect(
    page.getByText("These are my projects.")
  ).toBeVisible();
});
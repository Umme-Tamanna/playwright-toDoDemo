import { test, expect } from '@playwright/test';

test('TodoMVC full functionality', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const todoInput = page.locator('.new-todo');

  // --- Add todos ---
  const todos = ['Learn Playwright', 'Write Tests', 'Apply for Internship'];
  for (const item of todos) {
    await todoInput.fill(item);
    await todoInput.press('Enter');
  }

  // Verify all added
  await expect(page.locator('.todo-list li')).toHaveCount(todos.length);

  // Verify counter matches
  await expect(page.locator('.todo-count')).toHaveText(`${todos.length} items left`);

  // --- Mark first todo as completed ---
  await page.locator('.todo-list li').nth(0).locator('.toggle').check();
  await expect(page.locator('.todo-list li').nth(0)).toHaveClass(/completed/);

  // Verify counter decreased
  await expect(page.locator('.todo-count')).toHaveText(`${todos.length - 1} items left`);

  // --- Filter Active ---
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(todos.length - 1);

  // --- Filter Completed ---
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(1);

  // --- Back to All ---
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(todos.length);

  // --- Clear completed ---
  await page.getByRole('button', { name: 'Clear completed' }).click();

  // Verify only active remain
  await expect(page.locator('.todo-list li')).toHaveCount(todos.length - 1);
});

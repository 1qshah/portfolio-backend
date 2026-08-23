import { test, expect } from '@playwright/test';


test.describe('Home page works', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('Default page loads', async ({ page }) => {

    await expect(page).toHaveTitle(/Portfolio/);
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByRole('heading', { name: /Sfi Codes/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Projects/ })).toBeVisible();
  });
});

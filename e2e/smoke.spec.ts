import { test, expect } from '@playwright/test';
import { PortfolioHomepage } from './pages/index.page'


test.describe('Home page works', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new PortfolioHomepage(page)
    homePage.goto()
  });

  test('Default page loads', async ({ page }) => {

    await expect(page).toHaveTitle(/Portfolio/);
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByRole('heading', { name: /Sfi Codes/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Projects/ })).toBeVisible();
  });
});

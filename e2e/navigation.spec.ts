import { test, expect } from '@playwright/test';


test.describe('Conditional rendering works', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/');
    });

    test('Clicking a project changes the rendered state', async ({ page }) => {
        const ProjectList = ['Secure Chat'];

        for (const project in ProjectList) {
            await page.getByRole('button', { name: project }).click();
            await expect(page.getByRole('heading', { name: project })).toBeVisible();

        }
    });
});


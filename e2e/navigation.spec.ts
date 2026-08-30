import { test, expect } from '@playwright/test'
import { PortfolioHomepage } from './pages/index.page'

test.describe('Conditional rendering works', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new PortfolioHomepage(page)
        homePage.goto()
    });

    test('Clicking a project changes the rendered state', async ({ page }) => {
        type projectList = Array<string>
        const projList: projectList = ['Java Secure Chat', 'Android App'];

        const homePage = new PortfolioHomepage(page)
        for (const project of projList) {
            await homePage.selectProject(project)
            await expect(page.getByRole('heading', { name: project })).toBeVisible();
            await homePage.clickHomeButton()
        }
    });
});


import { test, expect } from '@playwright/test'
import {PortfolioHomepage} from './pages/index.page'

test.describe('Conditional rendering works', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new PortfolioHomepage(page)
homePage.goto
    });

    test.fixme('Clicking a project changes the rendered state', async ({ page }) => {
        const ProjectList = ['Secure Chat'];

        const homePage = new PortfolioHomepage(page)
        for (const project in ProjectList) {
            await homePage.selectProject(project)
            await expect(page.getByRole('heading', { name: project })).toBeVisible();

        }
    });
});


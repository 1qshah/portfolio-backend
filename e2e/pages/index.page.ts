import { expect, Locator, Page } from '@playwright/test';
export class PortfolioHomepage {
    readonly url = 'http://localhost:3000/'
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.url)
    }

    async selectProject(projectName: string) {
        await this.page.getByRole('button', { name: projectName }).click();
    }
}
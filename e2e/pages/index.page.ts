import { expect, Locator, Page } from '@playwright/test';
export class PortfolioHomepage {
    readonly url = 'https://portfolio-backend-sooty-sigma.vercel.app/'
    readonly page: Page
    readonly homeButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.homeButton = this.page.getByRole('button', { name: 'Home' })
    }

    async goto() {
        await this.page.goto(this.url)
    }

    async selectProject(projectName: string) {
        await this.page.getByRole('button', { name: projectName }).click();
    }

    async clickHomeButton() {
        await this.homeButton.click();

    }
}
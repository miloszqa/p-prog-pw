import { expect, Locator, Page } from "@playwright/test"

export class ConfirmationPage {
    readonly page: Page
    readonly container: Locator
    readonly header: Locator
    readonly paragraph: Locator

    constructor(page: Page) {
        this.page = page
        this.container = page.locator('.container')
        this.header = this.container.getByRole('heading', {level: 1})
        this.paragraph = this.container.getByRole('paragraph')
    }

}
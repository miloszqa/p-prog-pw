import { Locator, Page } from "@playwright/test"

export class LandingPage {
    readonly page: Page
    readonly pageContainer: Locator
    readonly formContainer: Locator

    constructor(page: Page) {
        this.page = page
        this.pageContainer = page.locator('.container')
        this.formContainer = page.locator('.form');
    }

    /**
     * 
     * @param placeHolder this takes argument of description in placeholder input fields
     */
    async validateMandatoryFields(placeHolder: string) {
        await this.formContainer.getByPlaceholder(placeHolder, { exact: true }).click()
        await this.pageContainer.click();
    }
}
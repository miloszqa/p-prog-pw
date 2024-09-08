import { Locator, Page } from "@playwright/test"

export class LandingPage {
    readonly page: Page
    readonly pageContainer: Locator
    readonly formContainer: Locator
    readonly checkbox: Locator
    readonly submitButton: Locator

    constructor(page: Page) {
        this.page = page
        this.pageContainer = page.locator('.container')
        this.formContainer = page.locator('.form');
        this.checkbox = page.locator('form div').filter({ hasText: 'Akceptuję regulamin oraz politykę prywatności' }).locator('div')
        this.submitButton = this.formContainer.getByRole('button')
    }

    /**
     * 
     * @param placeHolder this takes argument of description in placeholder input fields
     */
    async validateMandatoryFields(placeHolder: string) {
        await this.formContainer.getByPlaceholder(placeHolder, { exact: true }).click()
        await this.pageContainer.getByText('Załóż konto').click({ position: {x: 1, y: 1}})
    }

    /**
     * 
     * @param placeHolder this takes argument of description in placeholder input fields
     * @param fieldsValue this is the value passed into input fields - string
     */
    async fillUserFormDataMandatory(placeHolder: string, fieldsValue: string) {
        await this.formContainer.getByPlaceholder(placeHolder, { exact: true }).fill(fieldsValue)
    }

    /**
     * 
     * @param inputDate this value is set to be string format YYYY-MM-DD auto generated from a function
     */
    async setDateForCalendar(inputDate: string) {
        await this.formContainer.getByPlaceholder('Data urodzenia').click()
        this.formContainer.getByPlaceholder('Data urodzenia').fill(inputDate)
        await this.pageContainer.getByText('Załóż konto').click({ position: {x: 1, y: 1}})
    }
    /**
    * 
    * @param mandatoryCheckbox - boolean value true/false on marking checkbox
    */
    async mandatoryCheckboxCheck(mandatoryCheckbox: boolean) {
        if(mandatoryCheckbox) {
            await this.checkbox.uncheck()
            await this.checkbox.check()
        } else {
            await this.checkbox.uncheck()
        }
        
        // const allCheckboxes = this.checkbox

        // console.log(allCheckboxes)
        // for(const box of await allCheckboxes.all()) {
        //     await box.uncheck( {force: true} )
        //     await box.check( {force: true })
        // }
    }

    async clickOnSubmitButton() {
        await this.submitButton.click()
    }
}
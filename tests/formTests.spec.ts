import { expect, test } from "@playwright/test"
import { LandingPage } from "../page-object-model/landingPage"
import { getDateMinusFourYears } from "../utils/getDateMinusFourYears"

test.beforeEach(async({ page }) => {
    await page.goto('/')
})

test('verify mandatory fields', async({ page} ) => {
    const landingPage = new LandingPage(page)

    const placeHolderValues = ['Imię', 'Nazwisko', 'Twój adres e-mail', 'Hasło','Powtórz hasło', 'Data urodzenia']
    const errorMessages = ['Pole Imię jest wymagane', 'Pole Nazwisko jest wymagane', 'Pole E-mail jest wymagane', 'Pole password jest wymagane', 'Pole Powtórz hasło jest wymagane', 'Pole Data urodzenia jest wymagane']

    for(let placeholder of placeHolderValues) {
        await landingPage.validateMandatoryFields(placeholder)
    }

    for(let error of errorMessages) {
        await expect(landingPage.formContainer.getByText(error)).toBeVisible()
    }

})

test('create user with valid form data', async( {page} ) => {
    const landingPage = new LandingPage(page)
    const placeHolderValues: string[] = ['Imię', 'Nazwisko', 'Twój adres e-mail', 'Hasło','Powtórz hasło']
    const data: string[] = ['Testname', 'Testsurname', 'valid@email.com', 'ValidPassword1234!', 'ValidPassword1234!']

    for (let i = 0; i < placeHolderValues.length && i < data.length; i++) {
        const placeholder = placeHolderValues[i].toString()
        const value = data[i].toString()
        await landingPage.fillUserFormDataMandatory(placeholder, value)
    }

    const birthDate = getDateMinusFourYears(); // I am not sure about TS convention here. Should it be const birthDate: string = await... ?
    
    await landingPage.setDateForCalendar(birthDate)

    const dateVerificator = await landingPage.formContainer.getByPlaceholder('Data urodzenia').inputValue()
    expect(dateVerificator).toEqual(birthDate)

    await landingPage.mandatoryCheckboxCheck(true)
    expect(await landingPage.checkbox.isChecked()).toBeTruthy()

    await expect(landingPage.submitButton).toHaveText('Zarejestruj')
    await landingPage.clickOnSubmitButton()


    // I tried to make a loop to navigate across all checkboxes (2) and check them but it is flaky
    // const allCheckboxes = landingPage.checkbox
    //     //console.log(allCheckboxes)
    //     for(const box of await allCheckboxes.all()) {
    //         console.log(box)
    //         await box.check( {force: true} )
    //     }
})
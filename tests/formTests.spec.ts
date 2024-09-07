import { expect, test, Browser } from "@playwright/test"
import { LandingPage } from "../page-object-model/landingPage"

test.beforeEach(async({ page }) => {
    await page.goto('/')
})

test('verify mandatory fields', async({ page} ) => {
    const landingPage = new LandingPage(page)

    const placeHolderValues = ['Imię', 'Nazwisko', 'Twój adres e-mail', 'Hasło','Powtórz hasło', 'Data urodzenia']
    const errorMessages = ['Pole Imię jest wymagane', 'Pole Nazwisko jest wymagane', 'Pole E-mail jest wymagane', 'Pole password jest wymagane', 'Pole Powtórz hasło jest wymagane', 'Pole Data urodzenia jest wymagane']

    for(let placeholder of placeHolderValues) {
        await landingPage.validateMandatoryFields(placeholder);
        for(let error of errorMessages) {
            expect(landingPage.formContainer.getByText(error))
        }
    }
    }
)

test.only('create user with valid form data', async( {page} ) => {
    const landingPage = new LandingPage(page)

    const placeHolderValues: string[] = ['Imię', 'Nazwisko', 'Twój adres e-mail', 'Hasło','Powtórz hasło']
    let data: string[] = ['Testname', 'Testsurname', 'valid@email.com', 'ValidPassword1234!', 'ValidPassword1234!']

    for (let i = 0; i < placeHolderValues.length && i < data.length; i++) {
        const placeholder = placeHolderValues[i].toString();
        const value = data[i].toString();

        await landingPage.fillUserFormDataMandatory(placeholder, value)
    }
})
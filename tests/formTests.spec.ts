import { expect, test, Browser } from "@playwright/test"
import { LandingPage } from "../page-object-model/landingPage"

test.beforeEach(async({ page }) => {
    await page.goto('/')
})

test('verify mandatory fields', async({ page} ) => {
    const landingPage = new LandingPage(page)

    const placeHolderValues = ['Imię', 'Nazwisko', 'Twój adres e-mail', 'Hasło'] //, 'Powtórz hasło', 'Data urodzenia']
    const errorMessages = ['Pole Imię jest wymagane', 'Pole Nazwisko jest wymagane', 'Pole E-mail jest wymagane', 'Pole password jest wymagane']

    for(let placeholder of placeHolderValues) {
        await landingPage.validateMandatoryFields(placeholder);
    }
    for(let error of errorMessages) {
        expect(landingPage.formContainer.getByText(error)).toHaveText(error)
        }
    }
)
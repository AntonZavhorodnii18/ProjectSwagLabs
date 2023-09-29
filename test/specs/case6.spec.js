const LoginPage = require ('../pageobjects/login.page')
const FiltersPage = require ('../pageobjects/filters.page')

describe('Sorting', function(){

    before(async () => {
        await browser.maximizeWindow();
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.ClickLoginButton()
    })

    it('Products', async () => {

        FiltersPage.clickSelectButton()

        // Display all filters in console
        const selectElement = await $('select.product_sort_container')
        const options = await selectElement.$$('option')

        const optionTexts = await Promise.all(options.map(async (option) => {
            return await option.getText()
        }))

        console.log('Available sorting:\n' + optionTexts.join('\n'))
        
        // Click filters 
        await FiltersPage.clickSortingLowToHigh()
        await FiltersPage.logSelectedFilter()
        browser.saveScreenshot('./screen/case6.filter(L-H).png')

        await FiltersPage.clickSortingHighToLow()
        await FiltersPage.logSelectedFilter()
        browser.saveScreenshot('./screen/case6.filter(H-L).png')
    
        await FiltersPage.clickSortingA_Z()
        await FiltersPage.logSelectedFilter()
        browser.saveScreenshot('./screen/case6.filter(A-Z).png')

        await FiltersPage.clickSortingZ_A()
        await FiltersPage.logSelectedFilter()
        browser.saveScreenshot('./screen/case6.filter(Z-A).png')
    })
})
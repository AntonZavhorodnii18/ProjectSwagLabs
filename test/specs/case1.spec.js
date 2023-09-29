const LoginPage = require ('../pageobjects/login.page')
const MainPage = require('../pageobjects/main.page')
describe('Valid Login', function(){

     before(async () => {
        await browser.maximizeWindow()
        await browser.url('https://www.saucedemo.com/')
    })

    it('Login', async () => {
        // Login and check type field 
        await LoginPage.login('standard_user', 'secret_sauce')

        const usernameFieldType = await LoginPage.UserName.getAttribute('type')
        const passwordFieldType = await LoginPage.Password.getAttribute('type')

        if (usernameFieldType === 'password') {
            console.log('Username field is hidden with asterisks.')
        } else {
            console.log('Username field is not hidden with asterisks.')
        }

        if (passwordFieldType === 'password') {
            console.log('Password field is hidden with asterisks.')
        } else {
            console.log('Password field is not hidden with asterisks.')
        }

        console.log(`Entered in the login field: ${await LoginPage.UserName.getValue()}`)
        console.log(`Entered in the password field: ${await LoginPage.Password.getValue()}`)

        browser.saveScreenshot('./screen/case1.login_page.png')

        await LoginPage.ClickLoginButton()
        
        // Visible shoping cart and products
        await MainPage.isShoppingCartButtonVisible()
        
        const isTextFound = (await $('.title').getText()).includes('Product')

        if (isTextFound) {
            console.log('The text “Product” was found on the page.')
        } else {
            console.log('The "Product" text was not found on the page.')
        }
    })
})
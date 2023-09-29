const LoginPage = require ('../pageobjects/login.page')
const UserNameGenerator = require('../pageobjects/usernamegenerator')
describe('Login with invalid login', function(){

    before(async () => {
        await browser.maximizeWindow()
        await browser.url('https://www.saucedemo.com/')
    });
    it('Login', async () => {
        // RandomUserName
        const RandomUserName = UserNameGenerator.generateRandomUserName()

        await LoginPage.login(RandomUserName, 'secret_sauce')

        // chek type field
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

        await LoginPage.ClickLoginButton()

        // check Erroe element
        const usernameError = await LoginPage.UserName.getAttribute('class')
        if (usernameError.includes('error')) {
            console.log('Error found in UserName element.')
        } else {
            console.log('No error found in UserName element.')
        }

        const passwordError = await LoginPage.Password.getAttribute('class')
        if (passwordError.includes('error')) {
            console.log('Error found in Password element.')
        } else {
            console.log('No error found in Password element.')
        }

        await LoginPage.isErrorMessageVisible()
        browser.saveScreenshot('./screen/case3.login_page_error.png')
    }) 
})

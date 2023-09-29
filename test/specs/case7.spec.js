const LoginPage = require ('../pageobjects/login.page')
const MainPage = require('../pageobjects/main.page')

describe('Footer Links', function(){

    before(async () => {
        await browser.maximizeWindow();
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.ClickLoginButton()
    })

    
    it('Footer', async () => {
        // Main tabsSave
        const mainTab = await browser.getWindowHandle()
        // Click adn cosole log Url for buttons (Twiter, Facebook and Linkedin)
        await MainPage.clickTwiterButton()
        await MainPage.switchToNewTab(mainTab)
        const twitterUrl = await browser.getUrl()
        console.log('Twitter URL:', twitterUrl)
        await browser.closeWindow()

        await MainPage.switchToMainTab(mainTab)

        await MainPage.clickFacebookButton()
        await MainPage.switchToNewTab(mainTab)
        const facebookUrl = await browser.getUrl()
        console.log('Facebook URL:', facebookUrl)
        await browser.closeWindow()

        await MainPage.switchToMainTab(mainTab)

        await MainPage.clickLinkedinButton()
        await MainPage.switchToNewTab(mainTab)
        const linkedinUrl = await browser.getUrl()
        console.log('LinkedIn URL:', linkedinUrl)
        await browser.closeWindow()
    })
})

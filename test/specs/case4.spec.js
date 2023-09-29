const LoginPage = require ('../pageobjects/login.page')
const MainPage = require('../pageobjects/main.page')
const BurgerMenu = require('../pageobjects/burger.page')

describe('Logout', function(){

    before(async () => {
        await browser.maximizeWindow();
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.ClickLoginButton()
    });

    it('Login', async () => {
        
        await MainPage.clickBurgerMenuButton()
        await BurgerMenu.isLogoutButtonVisible()

        const sidebarLinks = await $$('.bm-item.menu-item');
        const linkTexts = [];

        for (const link of sidebarLinks) {
            const linkText = await link.getText();
            linkTexts.push(linkText);
        }

        console.log(`Menu Items:\n${linkTexts.join('\n')}`);

        await BurgerMenu.clickLogoutButton()
        
        if (await LoginPage.UserName.getValue()) {
            await LoginPage.UserName.clearValue();
            console.log(`Cleared username field. Previous value: ${await LoginPage.UserName.getValue()}`);
        } else {
            console.log('Username field is empty.');
        }
    
        if (await LoginPage.Password.getValue()) {
            await LoginPage.Password.clearValue();
            console.log(`Cleared password field. Previous value: ${await LoginPage.Password.getValue()}`);
        } else {
            console.log('Password field is empty.');
        }



    })

})
const LoginPage = require ('../pageobjects/login.page')
const MainPage = require('../pageobjects/main.page')
const BurgerMenu = require('../pageobjects/burger.page')
const ProductPage = require('../pageobjects/product.page')

describe('Saving the card after logout ', function(){

    before(async () => {
        await browser.maximizeWindow();
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.ClickLoginButton()
    })

    // Variant 2 - Random item for class Buttons
    it('CartVariant2', async () => {
    
        // clickableButtonsItem
        const buttonItemsNamesRandom = [
            'Backpack',
            'Bike Light',
            'Bolt T-Shirt',
            'Fleece Jacket',
            'Sauce Labs Onesie',
            'Red T-Shirt',
        ];
          
        const clickableResults = []
          
        for (const name of buttonItemsNamesRandom) {
            const buttonSelectorForClicable = `#item_${buttonItemsNamesRandom.indexOf(name)}_title_link > div`
            const buttonClicable = $(buttonSelectorForClicable)
            const isClickable = await buttonClicable.isClickable()
            clickableResults.push(`${name}: ${buttonSelectorForClicable}: ${isClickable ? 'Clickable' : 'Not Clickable'}`)
        }
          
        console.log(clickableResults.join('\n'))
    
        // Random Item for button
        const buttonNamesForClick = [
            'Backpack',
            'Bike Light',
            'Bolt T-Shirt',
            'Fleece Jacket',
            'Sauce Labs Onesie',
            'Red T-Shirt',
        ]
      
        // random product add to shopping cart
        const randomIndex = Math.floor(Math.random() * buttonNamesForClick.length)
        const selectedButtonName = buttonNamesForClick[randomIndex]
        const buttonSelectorForClick = `#item_${randomIndex}_title_link > div`
      
        const buttonForClick = $(buttonSelectorForClick)
        await buttonForClick.click()
      
        console.log(`Clicked on "${selectedButtonName}" for purchase.`)

        await ProductPage.clickBuyAfterViewing()

        browser.saveScreenshot('./screen/case5.ShoppingItemPageAdd_Variant2.png')

        //Logout
        await MainPage.clickBurgerMenuButton()
        await BurgerMenu.isLogoutButtonVisible()
        await BurgerMenu.clickLogoutButton()
        //login and check shopping cart
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.ClickLoginButton()
        await MainPage.clickShoppingCartButton()

        browser.saveScreenshot('./screen/case5.ShoppingCart_Variant2.png')    
    }) 
})
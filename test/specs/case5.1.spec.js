const LoginPage = require ('../pageobjects/login.page')
const MainPage = require('../pageobjects/main.page')
const BurgerMenu = require('../pageobjects/burger.page')

describe('Saving the card after logout ', function(){

    before(async () => {
        await browser.maximizeWindow();
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.ClickLoginButton()
    })

    // Variant 1 - Random Items for class
    it('CartVariant1', async () => {
        // Check Product items and his price
        const inventoryItems = await $$('.inventory_item')
    
        const itemDetails = await Promise.all(inventoryItems.map(async (item) => {
            const nameText = await item.$('.inventory_item_name').getText()
            const priceText = await item.$('.inventory_item_price').getText()
            return `${nameText} - ${priceText}`
        }))

        const allItemsAndPrices = itemDetails.join('\n')
        console.log(`All products and their prices:\n${allItemsAndPrices}`)

        // random items add to shopping cart
        const randomIndex = Math.floor(Math.random() * inventoryItems.length)
        const randomItem = inventoryItems[randomIndex]

        const addToCartButton = await randomItem.$('button[data-test^="add-to-cart"]')
        await addToCartButton.click()
        browser.saveScreenshot('./screen/case5.ShoppingCartAdd_Variant1.png')

        const selectedName = await randomItem.$('.inventory_item_name').getText()
        const selectedPrice = await randomItem.$('.inventory_item_price').getText()
        console.log(`Selected Item: ${selectedName} - ${selectedPrice}`)

        // Logout
        await MainPage.clickBurgerMenuButton()
        await BurgerMenu.isLogoutButtonVisible()
        await BurgerMenu.clickLogoutButton()

        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.ClickLoginButton()
        await MainPage.clickShoppingCartButton()

        browser.saveScreenshot('./screen/case5.ShoppingCart_Variant1.png')
    
        // Checking items in the cart
        const cartItem = await $('.cart_item')

        const isNotEmptyCart = !(await cartItem.getAttribute('class')).includes('removed_cart_item')

        if (isNotEmptyCart) {
            const itemName = await cartItem.$('.inventory_item_name').getText()
            console.log(`Item in the cart: ${itemName}`)
        } else {
            console.log('The cart is empty.')
        }
    })
})
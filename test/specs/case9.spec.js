const LoginPage = require ('../pageobjects/login.page')
const MainPage = require('../pageobjects/main.page')
const BasketPage = require('../pageobjects/basket.page')

describe('Checkout without products', function(){

    before(async () => {
        await browser.maximizeWindow()
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.ClickLoginButton()
    })

    
    it('Checkout', async () => {
        // Go to Shoping Cart
        await MainPage.clickShoppingCartButton()
        // Сhecking cart
        const cartList = await $('.cart_list')
        const isCartListEmpty = await cartList.$('.cart_item').isExisting()
    
        if (isCartListEmpty) {
            console.error('Error: There should be no items in the cart.')
        } else {
            console.log('Cart is empty')
        }

        // Сhecking cart Checkout
        await BasketPage.clickCheckoutButton()
        const checkoutTitle = await $('.title')
        const checkoutTitleText = await checkoutTitle.getText()

        if (checkoutTitleText.includes('Checkout: Your Information')) {
            console.error('Error: Found the text “Checkout: Your information”')
        } else {
            console.log('The text “Checkout: Your information” was not found')
        }

        // trying to place an order
        await BasketPage.login('Igor', 'Sebruk', '04665')
        await BasketPage.clickContinueButton()
        await BasketPage.clickFinishButtonButton()
        
        // Checking the purchase and displaying the product
        const completeHeader = await $('h2.complete-header')
        const isCompleteHeaderExisting = await completeHeader.isExisting()
        
        if (isCompleteHeaderExisting) {
            console.error('Error: managed to place an empty order.')
        }
    })
})

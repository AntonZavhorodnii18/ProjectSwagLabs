const LoginPage = require ('../pageobjects/login.page')
const MainPage = require('../pageobjects/main.page')
const BasketPage = require('../pageobjects/basket.page')

describe('Valid Checkout', function(){

    before(async () => {
        await browser.maximizeWindow();
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.ClickLoginButton()
    })

    
    it('Checkout', async () => {
        // choice of three products
        const inventoryItems = await $$('.inventory_item')
        const selectedItems = []
    
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * inventoryItems.length)
            const randomItem = inventoryItems[randomIndex]
    
            const addToCartButton = await randomItem.$('button[data-test^="add-to-cart"]')
            await addToCartButton.click()
            selectedItems.push(randomItem)
    
            inventoryItems.splice(randomIndex, 1)
        }
    
        // Purchase
        await MainPage.clickShoppingCartButton()
        await BasketPage.clickCheckoutButton()
        await BasketPage.login('Igor', 'Sebruk', '04665')
        await BasketPage.clickContinueButton()

        // Compare products and check final price
        const cartItems = await $$('.cart_item')
        const itemList = []

        for (const cartItem of cartItems) {
            const itemName = await cartItem.$('.inventory_item_name')
            const itemPrice = await cartItem.$('.inventory_item_price')

            const itemNameText = await itemName.getText()
            const itemPriceText = await itemPrice.getText()

            itemList.push(`Items in cart: ${itemNameText}, Price: ${itemPriceText}`)
        }

        console.log(itemList.join('\n'))

        const totalTextElement = await $('.summary_total_label')
        const totalText = await totalTextElement.getText()
        
        console.log(totalText)

        await BasketPage.clickFinishButtonButton()

        // Checking the purchase and displaying the product
        const completeHeader = await $('h2.complete-header')
        const isCompleteHeaderExisting = await completeHeader.isExisting()
        
        if (isCompleteHeaderExisting) {
            const BackHomeButton = await $('#back-to-products')
            await BackHomeButton.click()
        } else {
            console.error('Error: Complete header not found.')
        }

        const inventoryItem = await $$('.inventory_item')
        const itemDetails = await Promise.all(inventoryItem.map(async (items) => {
            const nameText = await items.$('.inventory_item_name').getText()
            const priceText = await items.$('.inventory_item_price').getText()
            return `${nameText} - ${priceText}`
        }))

        const allItemsAndPrices = itemDetails.join('\n')
        console.log(`All products and their prices:\n${allItemsAndPrices}`)

        // Сhecking cart
        await MainPage.clickShoppingCartButton()

        const cartList = await $('.cart_list');
        const isCartListEmpty = await cartList.$('.cart_item').isExisting()
    
        if (isCartListEmpty) {
            console.error('Error: There should be no items in the cart.')
        } else {
            console.log('Cart is empty')
        }
    })
})

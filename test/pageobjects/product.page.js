class ProductPage { // Product buttons and Add to Cart 
    
    // Backpack
    get BackpackItem() {
        return $('#item_4_title_link > div')
    }

    async clickBackpackItem() {
        await this.BackpackItem.click()
    }


    get AddToBackpackItem() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    async clickAddToBackpackItem() {
        await this.AddToBackpackItem.click()
    }
    
    // BikeLight
    get BikeLightItem() {
        return $('#item_0_title_link > div')
    }

    async clickBikeLightItem() {
        await this.BikeLightItem.click()
    }

    get AddToBikeLightItem() {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    async clickAddToBikeLightItem() {
        await this.AddToBikeLightItem.click()
    }

    
    
    // Bolt TShirt
    get BoltTShirtItem() {
        return $('#item_1_title_link > div')
    }

    async clickBoltTShirtItem() {
        await this.BoltTShirtItem.click()
    }

    get AddBoltTShirtItem() {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }

    async clickAddBoltTShirtItem() {
        await this.AddBoltTShirtItem.click()
    }

    // Fleece Jacket
    get FleeceJacketItem() {
        return $('#item_5_title_link > div')
    }

    async clickFleeceJacketItem() {
        await this.FleeceJacketItem.click()
    }

    get AddToCartFleeceJacket() {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }

    async clickAddFleeceJacketItem() {
        await this.AddToCartFleeceJacket.click()
    }

    // SauceLabsOnesie
    get OnesieItem() {
        return $('#item_2_title_link > div')
    }

    async clickOnesieItem() {
        await this.OnesieItem.click()
    }

    get AddOnesieItem() {
        return $('#add-to-cart-sauce-labs-onesie')
    }

    async clickAddOnesieItem() {
        await this.AddOnesieItem.click()
    }

    // Test.allTheThings() T-Shirt (Red)
    get RedTShirtItem() {
        return $('#item_3_title_link > div')
    }

    async clickRedTShirtItem() {
        await this.RedTShirtItem.click()
    }

    get AddRedTShirtItem() {
        return $('#add-to-cart-test.allthethings()-t-shirt-(red)')
    }

    async clickAddRedTShirtItem() {
        await this.AddRedTShirtItem.click()
    }

    // Buy after viewing
    get BuyAfterViewingButton() {
        return $('button.btn.btn_primary.btn_small.btn_inventory')
    }

    async clickBuyAfterViewing() {
        await this.BuyAfterViewingButton.click()
    }
}

module.exports = new ProductPage()

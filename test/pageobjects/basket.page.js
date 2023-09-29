class BasketPage {

    // Checkout
    get checkoutButton() {
        return $('#checkout')
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click()
    }
    // FirstName
    get firstnameButton() {
        return $('#first-name')
    }

    async clickFirstNameButton() {
        await this.firstnameButton.click()
    }
    // LastName
    get lastnameButton() {
        return $('#last-name')
    }

    async clickLastNameButton() {
        await this.lastnameButton.click()
    }
    // PostalCode
    get postalcodeButton() {
        return $('#postal-code')
    }

    async clickPostalCodeButton() {
        await this.postalcodeButton.click()
    }
    // Continue
    get continueButton() {
        return $('#continue')
    }

    async clickContinueButton() {
        await this.continueButton.click()
    }
    // Finish
    get finishButton() {
        return $('#finish')
    }

    async clickFinishButtonButton() {
        await this.finishButton.click()
    }
   
    // LOGIN for basket
    async login(FirstName, LastName, PostalCode){
        await this.firstnameButton.setValue(FirstName)
        await this.lastnameButton.setValue(LastName)
        await this.postalcodeButton.setValue(PostalCode)
    }
  
}


module.exports = new BasketPage();

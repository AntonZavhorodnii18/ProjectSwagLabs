class MainPage {
    // Shop
    get ShoppingCartButton() {
        return $('#shopping_cart_container > a')
    }

    async clickShoppingCartButton() {
        await this.ShoppingCartButton.click()
    }
    async isShoppingCartButtonVisible() {
        const isVisibleShop = await this.ShoppingCartButton.isDisplayed()
            if (isVisibleShop) {
                console.log('Shopping cart button is visible.')
            } else {
                console.log('Shopping cart button is not visible.')
            }
        return isVisibleShop;
    }
    // Menu
    get BurgerMenuButton() {
        return $(`#react-burger-menu-btn`)
    }

    async clickBurgerMenuButton() {
        await this.BurgerMenuButton.click()
    }
    // Logout
    get LogoutButton() {
        return $('#logout_sidebar_link');
    }

    async isLogoutButtonVisible() {
        const isDisplayedLogout = await this.LogoutButton.isDisplayed();
        if (isDisplayedLogout) {
            console.log('Logout button is visible.');
        } else {
            console.log('Logout button is not visible.');
        }
        return isDisplayedLogout;
    }

    async clickLogoutButton() {
        await this.LogoutButton.click()
    }

    // TwiterButton
    get TwiterButton() {
        return $('#page_wrapper > footer > ul > li.social_twitter > a')
    }
    
    async clickTwiterButton() {
        await this.TwiterButton.click()
    }
    
    // FacebookButton
    get FacebookButton() {
        return $('#page_wrapper > footer > ul > li.social_facebook > a')
    }
    
    async clickFacebookButton() {
        await this.FacebookButton.click()
    }
    
    // LinkedinButton
    get LinkedinButton() {
        return $('#page_wrapper > footer > ul > li.social_linkedin > a')
    }
    
    async clickLinkedinButton() {
        await this.LinkedinButton.click()
    }
    
    // tabs
    async switchToNewTab(mainTab) {
        const allTabs = await browser.getWindowHandles();
        const newTab = allTabs.find(tab => tab !== mainTab)
        if (newTab) {
            await browser.switchToWindow(newTab)
        }
    }

    async switchToMainTab(mainTab) {
        await browser.switchToWindow(mainTab)
    }
}

module.exports = new MainPage();

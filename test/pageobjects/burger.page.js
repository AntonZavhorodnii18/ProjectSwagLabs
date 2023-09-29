class BurgerMenuPage {
    // Logout
    get LogoutButton() {
        return $('#logout_sidebar_link')
    }
    async isLogoutButtonVisible() {
        const isDisplayedLogout = await this.LogoutButton.isDisplayed()
        if (isDisplayedLogout) {
            console.log('Logout button is visible.')
        } else {
            console.log('Logout button is not visible.')
        }
        return isDisplayedLogout
    }

    async clickLogoutButton() {
        await this.LogoutButton.click()
    }
    // SidebarMenu
    get SidebarMenuLinks() {
        return $$('.bm-item.menu-item')
    }

    async printSidebarMenuLinksText() {
        const linksItem = await $$('.bm-item.menu-item')
        const linkTexts = []

        for (const link of linksItem) {
            const linkTextMenu = await link.getText()
            linkTexts.push(linkTextMenu)
        }

        console.log(`Display Item: "${linkTexts.join('", "')}"`)
    }

}

module.exports = new BurgerMenuPage()
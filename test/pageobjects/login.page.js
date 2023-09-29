class LoginPage {
    
    get UserName() {
        return $('#user-name')
    }
   
    get Password(){
        return $('#password')
    }

    get LoginButton(){
        return  $('#login-button')

    }

    async ClickLoginButton () {
        await this.LoginButton.click()
    }
    
    async login(UserName, Password){
        await this.UserName.setValue(UserName)
        await this.Password.setValue(Password)
    }
    // Error
    get ErrorMessage() {
        return $('#login_button_container > div > form > div.error-message-container.error')
    }
    async isErrorMessageVisible() {
        const isVisibleError = await this.ErrorMessage.isDisplayed()
            if (isVisibleError) {
                console.log('Error message is visible.')
            } else {
                console.log('Error message is not visible.')
            }
        return isVisibleError
    }

}

module.exports = new LoginPage()

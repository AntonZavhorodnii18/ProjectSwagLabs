class UserNameGenerator {
  
  // Random UserName for 15 elements
  generateRandomUserName() {
    const allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let username = ''
    const usernameLength = 15

    for (let i = 0; i < usernameLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length)
      username += allowedCharacters.charAt(randomIndex)
    }

    return username
  }


}

module.exports = new UserNameGenerator()
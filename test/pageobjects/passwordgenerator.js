class PasswordGenerator {
  
  // Generate Random Password for 18 elemenst 
  static generateRandomPassword() {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
      
    const randomUppercase = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
      
    const remainingLength = 18
    const randomPart = Array.from({ length: remainingLength }, () => {
    const allChars = `${uppercaseLetters}${lowercaseLetters}${numbers}`
    return allChars[Math.floor(Math.random() * allChars.length)]
    }).join('')
        
    const randomDigit = numbers[Math.floor(Math.random() * numbers.length)]

    const password = `${randomUppercase}${randomPart}${randomDigit}`
      
    return password
  }
}
  
module.exports = PasswordGenerator
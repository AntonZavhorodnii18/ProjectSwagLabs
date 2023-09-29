class FiltersPage {

    // sorting
    get selectButton() {
        return $('select.product_sort_container')
    }

    async clickSelectButton() {
        await this.selectButton.click()
    }

    async logSelectedFilter() {
        const selectElement = await this.selectButton;
        const selectedOption = await selectElement.$('option:checked')
        const selectedOptionText = await selectedOption.getText()
        console.log(`Selected filter: ${selectedOptionText}`)
    }

  // sorting A-Z
    get sortingA_Z() { 
        return $('option[value="az"]') 
    }

    async clickSortingA_Z() {
        await this.clickSelectButton()
        await this.sortingA_Z.click()
    }

    // sorting Z-A
    get sortingZ_A() { 
        return $('option[value="za"]') 
    }

    async clickSortingZ_A() {
        await this.clickSelectButton()
        await this.sortingZ_A.click()
    }
   
    
    // sorting low to high
    get sortingLowToHigh() { 
        return $('option[value="lohi"]') 
    }

    async clickSortingLowToHigh() {
        await this.clickSelectButton()
        await this.sortingLowToHigh.click()
    }

    // sorting high to low 
    get sortingHighToLow () { 
        return $('option[value="hilo"]') 
    }

    async clickSortingHighToLow() {
        await this.clickSelectButton()
        await this.sortingHighToLow.click()
    }
}

module.exports = new FiltersPage()

import * as sauceDemoSelectors from "../fixtures/sauceDemoSelectors.json"

class PageObjects {
    navigateToSauceDemo() {
        cy.visit("")
    }

    getUsernameInput() {
        return cy.get(sauceDemoSelectors.username)
    }

    getPasswordInput() {
        return cy.get(sauceDemoSelectors.password)
    }

    getLoginBtn() {
        return cy.get(sauceDemoSelectors.loginBtn)
    }

    getShopingCartBtn() {
        return cy.get(sauceDemoSelectors.shopingCartBtn)
    }

    getShopingItemsList() {
        return cy.get(sauceDemoSelectors.shopingItemsList)
    }

    getItemNamesList() {
        return cy.get(sauceDemoSelectors.itemNamesList)
    }

    getErrorIconsList() {
        return cy.get(sauceDemoSelectors.errorIconsList)
    }

    getIncorectNotification() {
        return cy.get(sauceDemoSelectors.incorectCredentialsNotification)
    }

    getItemsPriceList() {
        return cy.get(sauceDemoSelectors.shopItemsPriceList)
    }

    getSortingSelect() {
        return cy.get(sauceDemoSelectors.sortingSelect)
    }

    getAddToCartBtnList() {
        return cy.get(sauceDemoSelectors.addToCartBtnList)
    }

    getShopingCartBadge() {
        return cy.get(sauceDemoSelectors.shopingCartBadge)
    }

    getItemInCartName() {
        return cy.get(sauceDemoSelectors.itemInCartName)
    }

    getBurgerMenu() {
        return cy.get(sauceDemoSelectors.burgerMenu)
    }

    getAboutInMenu() {
        return cy.get(sauceDemoSelectors.aboutInMenu)
    }

    getLogoutInMenuBtn() {
        return cy.get(sauceDemoSelectors.logoutInMenu)
    }

    getCheckoutBtn() {
        return cy.get(sauceDemoSelectors.checkoutBtn)
    }

    getFirstNameInput() {
        return cy.get(sauceDemoSelectors.firstName)
    }

    getLastNameInput() {
        return cy.get(sauceDemoSelectors.lastName)
    }

    getPostalCodeInput() {
        return cy.get(sauceDemoSelectors.postalCode)
    }

    getContinue() {
        return cy.get(sauceDemoSelectors.continue)
    }
    
    getFinish() {
        return cy.get(sauceDemoSelectors.finish)
    }

    getCompleteOrderText() {
        return cy.get(sauceDemoSelectors.completeOrderText)
    }

    getOrderDispathedText() {
        return cy.get(sauceDemoSelectors.orderDispathedText)
    }

    getPonyExpressImage() {
        return cy.get(sauceDemoSelectors.ponyExpressImage)
    }
    
    getBackHomeBtn() {
        return cy.get(sauceDemoSelectors.backHomeBtn)
    }

    getPriceOnProductPage() {
        return cy.get(sauceDemoSelectors.priceOnProductPage)
    }
}
export default PageObjects
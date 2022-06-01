/// <reference types="cypress" />

import PageObjects from "../../PageObject/pageObjects"
import * as sauceDemoData from "../../fixtures/sauceDemoData.json"
import * as sauceDemoSelectors from "../../fixtures/sauceDemoSelectors.json"

const pageObjects = new PageObjects()

describe('Login tests', () => {
    beforeEach(function () {
        pageObjects.navigateToSauceDemo()
    })

    it('Check loging in with standard user', () => {
        cy.login(sauceDemoData.username, sauceDemoData.password)
        cy.url().should('include', sauceDemoData.signedInHomeURL)
        pageObjects.getShopingCartBtn().should('be.visible')
    })

    it('Check loging in with incorect password', () => {
        cy.login(sauceDemoData.username, sauceDemoData.wrongPassword)
        pageObjects.getErrorIconsList().should('have.length', '2')
        pageObjects.getErrorIconsList().should('be.visible')
        pageObjects.getIncorectNotification().should('be.visible')
        pageObjects.getIncorectNotification().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
})

describe('Logged in tests', () => {
    beforeEach(function () {
        pageObjects.navigateToSauceDemo()
        cy.login(sauceDemoData.username, sauceDemoData.password)
    })

    it('Check the number of items in shop', () => {
        pageObjects.getShopingItemsList().should('have.length', '6')
    })

    it('Check names of all the items', () => {
        pageObjects.getItemNamesList().each((item, index) => {
            cy
                .wrap(item)
                .should('contain.text', sauceDemoData.itemsNamesList[index])
        })
    })

    it('Check A to Z sorting', () => {
        pageObjects.getItemNamesList()
            .then(items => {
                const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get();
                const sortedItems = unsortedItems.slice().sort();
                expect(unsortedItems).to.deep.equal(sortedItems);
            });
    })

    it('Check Add to cart button', () => {
        pageObjects.getAddToCartBtnList().eq(1).click();
        pageObjects.getShopingCartBadge().should('be.visible')
        pageObjects.getShopingCartBtn().click()
        cy.url().should('include', sauceDemoData.shopingCartURL)
        pageObjects.getItemInCartName().should('be.visible')
        pageObjects.getItemInCartName().should('have.text', sauceDemoData.itemsNamesList[1])
    })

    it('Check About button in burger menu', () => {
        pageObjects.getBurgerMenu().click()
        pageObjects.getAboutInMenu().click()
        cy.url().should('deep.equal', sauceDemoData.aboutURL)
    })

    it('Check logout', () => {
        pageObjects.getBurgerMenu().click()
        pageObjects.getLogoutInMenuBtn().click()
        cy.url().should('deep.equal', sauceDemoData.loginURL)
    })

    it('Ordering item from shop', () => {
        pageObjects.getAddToCartBtnList().eq(3).click();
        pageObjects.getShopingCartBadge().should('be.visible')
        pageObjects.getShopingCartBtn().click()
        cy.url().should('include', sauceDemoData.shopingCartURL)
        pageObjects.getItemInCartName().should('be.visible')
        pageObjects.getItemInCartName().should('have.text', sauceDemoData.itemsNamesList[3])
        pageObjects.getCheckoutBtn().click()
        pageObjects.getFirstNameInput().type(sauceDemoData.firstName)
        pageObjects.getLastNameInput().type(sauceDemoData.lastName)
        pageObjects.getPostalCodeInput().type(sauceDemoData.postalCode)
        pageObjects.getContinue().click()
        pageObjects.getItemInCartName().should('have.text', sauceDemoData.itemsNamesList[3])
        pageObjects.getFinish().click()
        pageObjects.getCompleteOrderText().should('have.text', sauceDemoData.completeOrderText)
        pageObjects.getOrderDispathedText().should('have.text', sauceDemoData.orderDispathedText)
        pageObjects.getPonyExpressImage().should('be.visible')
        pageObjects.getBackHomeBtn().should('be.visible')
        pageObjects.getBackHomeBtn().should('have.text', sauceDemoData.backHomeBtnText)
        cy.url().should('include', sauceDemoData.checkoutCompleteURL)
        pageObjects.getBackHomeBtn().click()
        cy.url().should('include', sauceDemoData.signedInHomeURL)
        pageObjects.getShopingCartBadge().should('not.exist')
    })
})
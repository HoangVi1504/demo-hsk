/// <reference types="cypress-xpath" />
import LoginPageUi from "../pageUi/loginPageUi"
import HeaderPageUi from "../pageUi/headerPageUi"

var account = require('../data/account.json')
const loginPage = new LoginPageUi()
const headerPage = new HeaderPageUi()

describe('Demo HSK', () => {
    context('Login', () => {
        beforeEach(() => {
            cy.viewport(1280, 850)
            cy.visit('https://staging.hasaki.vn/')
        })

        it('Open web and login', () => {
            //cy.get('.item_login').trigger('mouseover')
            cy.get(loginPage.hsk_button_login_selector).click({ force: true })
            cy.get(loginPage.user_name_login_selector).type(account.userName).should('have.value', account.userName)
            cy.get(loginPage.password_login_selector).type(account.password).should('have.value', account.userName)
            cy.xpath(loginPage.login_butotn_xpath).click()
            cy.xpath(headerPage.icon_cart_xpath).click()

        })
    })
})
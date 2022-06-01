Cypress.Commands.add('login', (username, password) => {
    cy.get("input[placeholder='Username']").type(username)
    cy.get("input[placeholder='Password']").type(password)
    cy.get("input[value='Login']").click()
})
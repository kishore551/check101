
// describe('Sauce Demo Page', () => {
//     it('Positive Login test', () => {
//         cy.visit('https://www.saucedemo.com/v1/index.html')
//         cy.get('input#user-name').type('standard_user')
//         cy.get('[id="password"]').type('secret_sauce');
//         cy.get('[id="login-button"]').click();
//         cy.url().should('include', 'https://www.saucedemo.com/inventory.html');
//     })

//     it('Negative username test', () => {
//         cy.visit('https://www.saucedemo.com/')
//         cy.get('input#user-name').type('standard_user')
//         cy.get('[id="password"]').type('secret_sau');
//         cy.get('[id="login-button"]').click();
//         cy.get('[data-test="error"]').should('be.visible')
//         cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
//     })
// })
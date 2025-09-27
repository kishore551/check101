// describe('Login Test', () => {
//   it('Validate login', () => {
//     cy.visit('https://practicetestautomation.com/practice-test-login/')
//     cy.get('input#username').type('student')
//     cy.get('[id="password"]').type('Password123');
//     cy.get('[id="submit"]').click()
//   })
// })

//install cypress practice
//find mobile in amazon and print screen

// describe('Amazon Test', () => {
//   it('Validate login', () => {
//     cy.visit('https://www.amazon.in/Samsung-Galaxy-Smartphone-Titanium-Storage/dp/B0CS5XW6TN/ref=pd_ci_mcx_mh_mcx_views_0_image?pd_rd_w=UnZL4&content-id=amzn1.sym.04d3fdac-1b15-414f-91d2-0c9aaaf137d6%3Aamzn1.symc.30e3dbb4-8dd8-4bad-b7a1-a45bcdbc49b8&pf_rd_p=04d3fdac-1b15-414f-91d2-0c9aaaf137d6&pf_rd_r=VAY3886GPS5JSDQ3V4W9&pd_rd_wg=sxakF&pd_rd_r=9f82a7b0-7ca4-4c0e-be7b-8e1cdce43bb8&pd_rd_i=B0CS5XW6TN&th=1')
//     // cy.get('input#username').type('student')
//     // cy.get('[id="password"]').type('Password123');
//     // cy.get('[id="sumbit"]').click()
//     cy.screenshot();
//   })
// })

describe('Amazon Test', () => {
   it('Validate login', () => {
      cy.visit('https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26useRedirectOnSuccess%3D1%26signIn%3D1%26action%3Dsign-out%26ref_%3Dnav_AccountFlyout_signout&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')
      cy.get('input#ap_email').type('ASDASD');
      cy.get('#continue > span > input').click();
      cy.get("div[id='invalid-email-alert'] div[class='a-alert-content']").should('have.text','Invalid email address')
      
      //cy.screenshot();
  })
})

// describe('Login Test', () => {
//   it('Positive LogIn test', () => {
//     cy.visit('https://practicetestautomation.com/practice-test-login/')
//     cy.get('input#username').type('student')
//     cy.get('[id="password"]').type('Password123');
//     cy.get('[id="submit"]').click();
//     cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/');
//     cy.get('p strong').should('have.text', 'Congratulations student. You successfully logged in!');
//     cy.get('a.wp-block-button__link').should('be.visible')
//   })
//   it('Negative username test', () => {
//     cy.visit('https://practicetestautomation.com/practice-test-login/')
//     cy.get('input#username').type('incorrectUser')
//     cy.get('[id="password"]').type('Password123');
//     cy.get('[id="submit"]').click();
//     cy.get('[id="error"]').should('be.visible')
//     cy.get('[id="error"]').should('have.text','Your username is invalid!')
//   })
//   it('Negative password test', () => {
//     cy.visit('https://practicetestautomation.com/practice-test-login/')
//     cy.get('input#username').type('student')
//     cy.get('[id="password"]').type('incorrectPassword');
//     cy.get('[id="submit"]').click();
//     cy.get('[id="error"]').should('be.visible')
//     cy.get('[id="error"]').should('have.text','Your password is invalid!')
//   })
// })

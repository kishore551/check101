/*login in https://www.saucedemo.com/
html there or Not
drop down price low to high
any cart
clint cart 
confirm cart url 
click check out
take price and check 
finish button visibilty
thank you for visiting*/

describe('Sauce Demo Page', () => {

    beforeEach(() => {
    // Load fixture data before each test
    cy.visit('https://www.saucedemo.com/')
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });

    it('Positive Login test',  { tags: ['@smoke', '@critical'] }, () => {
        
        cy.get('input#user-name').type(this.data.username)
        cy.get('[id="password"]').type(this.data.password);
        cy.get('[id="login-button"]').click();
        cy.url().should('include', 'https://www.saucedemo.com/inventory.html');
    })

    it('Negative username test',  { tags: ['@smoke'] }, () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input#user-name').type('standard_user')
        cy.get('[id="password"]').type('secret_sau');
        cy.get('[id="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
    })

    it('Dropdown check', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input#user-name').type('standard_user')
        cy.get('[id="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click();
        cy.get('[class="product_sort_container"]').select('Price (high to low)');
    })

    it('Adds three products to the cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

        cy.get('.shopping_cart_badge').should('have.text', '3');

        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should('have.length', 3);
  });

  it('Adds three products and checks total price', () => {
        // Visit site
        cy.visit('https://www.saucedemo.com/');

        // Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // Add 3 products
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

        // Go to cart
        cy.get('.shopping_cart_link').click();

        // Collect product prices
        let total = 0;
        cy.get('.inventory_item_price').each(($el) => {
        const priceText = $el.text().replace('$', '');
        total += parseFloat(priceText);
        }).then(() => {
        // Checkout
        cy.get('[data-test="checkout"]').click();

        // Enter user info
        cy.get('[data-test="firstName"]').type('kishore');
        cy.get('[data-test="lastName"]').type('kishore');
        cy.get('[data-test="postalCode"]').type('600041');
        cy.get('[data-test="continue"]').click();

        // Get displayed total
        cy.get('.summary_subtotal_label').invoke('text').then((text) => {
            const displayedTotal = parseFloat(text.replace('Item total: $', ''));

            // Assert sum matches displayed total
            expect(displayedTotal).to.equal(total);
        });

        // Finish checkout
        cy.get('[data-test="finish"]').click();

        // Verify Thank You message
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');

        });
    });

})

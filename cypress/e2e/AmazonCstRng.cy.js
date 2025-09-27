// opens Amazon India home,

// searches “mobile”,

// finds all results priced ₹10,000–₹15,000 and logs name + price,

// opens the first match, adds to cart, and

// takes a screenshot.


// cypress/e2e/amazon_mobile_10k_15k.cy.js
// describe('Amazon IN | Mobiles between ₹10k–₹15k', () => {
//   const MIN = 10000;
//   const MAX = 15000;

//   it('logs all mobiles in range, adds one to cart, and screenshots', () => {
//     cy.viewport(1366, 768);

//     // 1) Go to Amazon India home
//     cy.visit('https://www.amazon.in/ref=nav_logo', { failOnStatusCode: false });

//     // Dismiss possible location/cookie popups if they appear (best-effort)
//     cy.get('body').then($body => {
//       if ($body.find('#GLUXClose').length) cy.get('#GLUXClose').click({ force: true });
//       if ($body.find('#sp-cc-accept').length) cy.get('#sp-cc-accept').click({ force: true }); // cookies
//     });

//     // 2) Search for mobile
//     cy.get('input#twotabsearchtextbox', { timeout: 15000 }).type('mobile{enter}');

//     // Wait a bit for results to render
//     cy.get('div.s-main-slot', { timeout: 20000 }).should('be.visible');

//     const matches = [];

//     // 3) Iterate cards, collect mobiles priced in range and log them
//     cy.get('div.s-main-slot div.s-card-container').each(($card) => {
//       // grab price (whole + fractional)
//       const priceWhole = $card.find('span.a-price-whole').first().text().replace(/[^\d]/g, '');
//       const priceFrac  = $card.find('span.a-price-fraction').first().text().replace(/[^\d]/g, '');
//       const priceText = priceWhole ? `${priceWhole}.${priceFrac || '00'}` : '';
//       const price = priceText ? Math.round(parseFloat(priceText)) : NaN;

//       const title = $card.find('h2 a span').first().text().trim();

//       if (title && Number.isFinite(price) && price >= MIN && price <= MAX) {
//         matches.push({ title, price, cardEl: $card });
//       }
//     }).then(() => {
//       // Log all matches
//       if (matches.length === 0) {
//         cy.log('No mobiles found in the ₹10k–₹15k range on this page.');
//         // You can assert here if you want to fail the test when none found:
//         // expect(matches, 'mobiles in price range').to.have.length.greaterThan(0)
//         return;
//       }

//       matches.forEach(m => cy.log(`✅ ${m.title} — ₹${m.price.toLocaleString('en-IN')}`));

//       // 4) Open the first match product detail page
//       const first = matches[0];

//       // Use the link inside the original card for better reliability
//       cy.wrap(first.cardEl)
//         .find('h2 a')
//         .first()
//         .invoke('removeAttr', 'target') // make sure it opens in same tab
//         .click({ force: true });

//       // On PDP: sometimes price/options load later
//       cy.get('body', { timeout: 20000 }).should('be.visible');

//       // Close protection/warranty popups if they show up later
//       const closeProtectionModals = () => {
//         cy.get('body').then($body => {
//           // "No thanks" on warranty modal (selector varies, try a few)
//           if ($body.find('#attachSiNoCoverage').length) {
//             cy.get('#attachSiNoCoverage').click({ force: true });
//           } else if ($body.find('[data-action="a-popover-close"]').length) {
//             cy.get('[data-action="a-popover-close"]').click({ force: true });
//           }
//         });
//       };

//       // 5) Add to cart
//       cy.get('input#add-to-cart-button', { timeout: 20000 })
//         .should('be.visible')
//         .click({ force: true });

//       // Try closing any popups that might appear
//       closeProtectionModals();

//       // Wait for added-to-cart confirmation area (best-effort; varies by ASIN)
//       cy.get('body', { timeout: 20000 }).then(($body) => {
//         if ($body.find('#attachDisplayAddBaseAlert, #NATC_SMART_WAGON_CONF_MSG_SUCCESS').length) {
//           cy.log('Added to cart confirmation visible');
//         } else {
//           cy.log('Add-to-cart confirmation not clearly visible; proceeding to screenshot.');
//         }
//       });

//       // Take screenshot of the state after attempting to add to cart
//       cy.screenshot('amazon-mobile-added-to-cart');
//     });
//   });
// });

// cypress/e2e/amazon_search_mobile.cy.js
describe('Amazon IN | Search for Mobile', () => {
  it('should search for mobile on Amazon India', () => {
    // Go to Amazon India home
    cy.visit('https://www.amazon.in/ref=nav_logo', { failOnStatusCode: false })

    // If cookie/location popups appear, close them (optional)
    cy.get('body').then($body => {
      if ($body.find('#sp-cc-accept').length) {
        cy.get('#sp-cc-accept').click({ force: true }) // accept cookies
      }
      if ($body.find('#GLUXClose').length) {
        cy.get('#GLUXClose').click({ force: true }) // close location modal
      }
    })

    // Type "mobile" in the search box and press Enter
    cy.get('input#twotabsearchtextbox', { timeout: 15000 })
      .type('mobile{enter}')

    // Wait for results section to appear
    cy.get('div.s-main-slot', { timeout: 20000 })
      .should('be.visible')

    // Log the first few product titles (optional)
    // cy.get('div.s-main-slot h2 a span')
    //   .each(($el, index) => {
    //     if (index < 5) cy.log(`Result ${index + 1}: ${$el.text()}`)
    //   })

    cy.get('#s-all-filters-announce').click({ force: true })

// lower bound slider
cy.get('#p_36\\/range-slider_slider-item_lower-bound-slider').then($el => {
  //$el[0].ariavaluetext = "₹10,000";
  $el[0].value = 66; // whatever slider index ≈ ₹10k
  $el[0].dispatchEvent(new Event('input', { bubbles: true }));
  $el[0].dispatchEvent(new Event('change', { bubbles: true }));
});

// upper bound slider
cy.get('#p_36\\/range-slider_slider-item_upper-bound-slider').then($el => {
  //$el[0].ariavaluetext = "₹15,000";
  $el[0].value = 79; // index ≈ ₹15k
  $el[0].dispatchEvent(new Event('input', { bubbles: true }));
  $el[0].dispatchEvent(new Event('change', { bubbles: true }));
});

// click the Apply/Submit button if needed
cy.get('.sf-submit-range-button input[type="submit"]').click({ force: true })

cy.get('button[name="submit.addToCart"]')
  .eq(0)                            // index 0 (the first button)
  .scrollIntoView()                 // make sure it’s in view
  .click({ force: true })   

  // Click the Cart icon at the top right
cy.get('#nav-cart').click({ force: true })
    cy.screenshot('amazon-cart-page')


// // after interacting with slider:
// cy.get('body').click(0, 0, { force: true })   // top-left corner of the page
// // or click overlay:
// cy.get('.a-popover-backdrop').click({ force: true })

  })
})


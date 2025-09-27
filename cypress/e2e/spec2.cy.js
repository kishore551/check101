// describe('Amazon Test', () => {
//    it('Validate login', () => {
//      cy.visit('https://www.amazon.in/')
//      cy.screenshot();
//    })
//  })

//window open
describe('Amazon Test', () => {
//    it('Validate login', () => {
//      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//      cy.window().then((win)=>{
//         cy.stub(win,'open').callsFake((url)=> {
//             win.location.href = url
//         })   
//      })
//      cy.get('[id="openwindow"]').click()
//    })
   it('Validate login', () => {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('[id=')
    //  cy.window().then((win)=>{
    //     cy.stub(win,'open').callsFake((url)=> {
    //         win.location.href = url
    //     })   
    //  })
    //  cy.get('[id="openwindow"]').click()
   })

 })

// new tab 





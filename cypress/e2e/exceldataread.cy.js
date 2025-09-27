describe('Read Excel Data', () => {
  it('should read data from Excel', () => {
    cy.task('readExcel', {
      filePath: 'cypress/fixtures/TestData.xlsx',
      sheetName: 'Sheet1'
    }).then((data) => {
      cy.log(JSON.stringify(data))  // just to see in Cypress runner
      expect(data[0].Name).to.equal('kishore') // sample assertion
    })
  })
})

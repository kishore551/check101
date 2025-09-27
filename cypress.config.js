const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout:50000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)
      return config
    },
  },
})

const XLSX = require('xlsx')
const fs = require('fs')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readExcel({ filePath, sheetName }) {
          const fileBuffer = fs.readFileSync(filePath)
          const workbook = XLSX.read(fileBuffer, { type: 'buffer' })
          const worksheet = workbook.Sheets[sheetName]
          const jsonData = XLSX.utils.sheet_to_json(worksheet)
          return jsonData // returns array of objects
        },
      })
    },
  },
})


const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    reportFilename: "index.html", // Nome do arquivo de saída
    html: true, // Gera o relatório em HTML
    json: false, // Não gera o arquivo JSON
  },
  e2e: {
    // Configurações de plugins (se necessário)
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000/', // URL base para os testes
  },
})


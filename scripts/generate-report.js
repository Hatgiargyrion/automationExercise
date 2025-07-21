const marge = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');

async function generate() {
  const jsonReport = await marge.merge({
    files: ['./cypress/reports/*.json']  // caminho dos JSONs gerados
  });

  await generator.create(jsonReport, {
    reportDir: './cypress/reports',
    reportFilename: 'mochawesome'   // nome do arquivo HTML consolidado
  });
}

generate();
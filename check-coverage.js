const { readFileSync } = require('fs');
const { join } = require('path');

const coverageThreshold = 70; // Defina o percentual mínimo de cobertura desejada

const coverageSummaryPath = join(__dirname, 'coverage', 'coverage-final.json');
const coverageSummary = JSON.parse(readFileSync(coverageSummaryPath, 'utf8'));

let totalLines = 0;
let coveredLines = 0;

// Função para agregar cobertura a partir dos dados fornecidos
const calculateCoverage = (coverageData) => {
  Object.values(coverageData).forEach(fileCoverage => {
    const { s } = fileCoverage;
    totalLines += Object.keys(s).length;
    coveredLines += Object.values(s).reduce((acc, val) => acc + (val > 0 ? 1 : 0), 0);
  });
};

calculateCoverage(coverageSummary);

const coveragePercentage = (coveredLines / totalLines) * 100;
const isCoverageSufficient = coveragePercentage >= coverageThreshold;

if (!isCoverageSufficient) {
  console.error(`Coverage is below ${coverageThreshold}%! Commit aborted.`);
  process.exit(1);
} else {
  console.log(`Coverage is sufficient: ${coveragePercentage.toFixed(2)}%`);
}

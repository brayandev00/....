const fs = require('fs');
const path = require('path');

function replaceFileContents(filePath, replacements) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [key, value] of Object.entries(replacements)) {
      content = content.replace(new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value);
    }
    fs.writeFileSync(filePath, content);
    console.log(`Translated ${filePath}`);
}

const allScansPath = path.join(__dirname, 'frontend/src/pages/AllScans.tsx');
replaceFileContents(allScansPath, {
    '"Scan History"': '"Historial de Escaneos"',
    '"Scan history and reports"': '"Historial de escaneos y reportes"',
    '>Scans<': '>Escaneos<',
    '"No scans found"': '"No se encontraron escaneos"',
    '"When you run a vulnerability scan, it will appear here."': '"Cuando ejecutes un escaneo de vulnerabilidades, aparecerá aquí."',
    '"Run Your First Scan"': '"Ejecutar tu primer escaneo"',
    '>Target<': '>Objetivo<',
    '>Date<': '>Fecha<',
    '>Status<': '>Estado<',
    '>Issues Found<': '>Problemas Encontrados<',
    '>Actions<': '>Acciones<',
    '"View Results"': '"Ver Resultados"',
    '"All Systems Operational"': '"Todos los Sistemas Operativos"',
    '"Security Report"': '"Reporte de Seguridad"',
});

const reportsPath = path.join(__dirname, 'frontend/src/pages/ReportsPage.tsx');
replaceFileContents(reportsPath, {
  '"Security Reports"': '"Reportes de Seguridad"',
  '"View and export detailed security assessments"': '"Ve y exporta evaluaciones de seguridad detalladas"',
  '"Reports"': '"Reportes"',
  '"No reports available"': '"No hay reportes disponibles"',
  '"Run a scan to generate your first security report."': '"Ejecuta un escaneo para generar tu primer reporte de seguridad."',
  '"Go to Dashboard"': '"Ir al Panel"',
  '"Run a Scan"': '"Ejecutar un Escaneo"',
  '>Export<': '>Exportar<',
  '>Print<': '>Imprimir<',
  '>Date<': '>Fecha<',
  '>Target<': '>Objetivo<',
  '>Score<': '>Puntuación<',
  '>Grade<': '>Grado<',
  '>Vulnerabilities<': '>Vulnerabilidades<'
});

const scanResultsPath = path.join(__dirname, 'frontend/src/pages/ScanResults.tsx');
replaceFileContents(scanResultsPath, {
    '"Scan Results"': '"Resultados del Escaneo"',
    '"Detailed findings for"': '"Hallazgos detallados para"',
    '"Summary"': '"Resumen"',
    '"Details"': '"Detalles"',
    '"Recommendations"': '"Recomendaciones"',
    '"Vulnerability Details"': '"Detalles de Vulnerabilidad"',
    '"Security Grade"': '"Grado de Seguridad"',
    '"Score: "': '"Puntuación: "',
});

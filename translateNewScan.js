const fs = require('fs');
const path = require('path');

const newScanPath = path.join(__dirname, 'frontend/src/pages/NewScan.tsx');
let content = fs.readFileSync(newScanPath, 'utf8');

const replacements = {
  // Zod Validations
  '"Target URL or IP address is required."': '"La URL objetivo o dirección IP es obligatoria."',
  '"Invalid URL or IP address format."': '"Formato de URL o dirección IP inválido."',
  '"Scheduled scan requires a name."': '"El escaneo programado requiere un nombre."',
  '"Frequency is required for scheduled scans."': '"La frecuencia es obligatoria para los escaneos programados."',
  '"Start date is required for scheduled scans."': '"La fecha de inicio es obligatoria para escaneos programados."',
  '"Start time is required for scheduled scans."': '"La hora de inicio es obligatoria para escaneos programados."',
  
  // Smart Scan feedback
  '"Smart Scan Failed"': '"Fallo en el Escaneo Inteligente"',
  '"Target is unreachable or blocking requests."': '"El objetivo es inalcanzable o bloquea solicitudes."',
  '"Smart Scan Analysis"': '"Análisis del Escaneo Inteligente"',
  '"Smart Scan Error"': '"Error de Escaneo Inteligente"',
  '"Failed to analyze target for smart scanning."': '"No se pudo analizar el objetivo para el escaneo inteligente."',
  
  // OnSubmit Feedback
  '"Scan Scheduled"': '"Escaneo Programado"',
  '"Scan Started"': '"Escaneo Iniciado"',
  '"Failed to Process Scan"': '"Error al Procesar Escaneo"',
  '"An unexpected error occurred."': '"Ha ocurrido un error inesperado."',
  
  // Form Labels
  '"Target Configuration"': '"Configuración del Objetivo"',
  '"Enter the URL or IP address to scan"': '"Ingresa la URL o dirección IP a escanear"',
  '"Target URL or IP Address"': '"URL Objetivo o Dirección IP"',
  '"example.com or 192.168.1.1"': '"ejemplo.com o 192.168.1.1"',
  '"WARNING: Internal Target Detected"': '"ADVERTENCIA: Objetivo Interno Detectado"',
  '"You are attempting to scan an internal IP address or localhost."': '"Estás intentando escanear una dirección IP interna o localhost."',
  '"Ensure you have explicit authorization before scanning internal networks."': '"Asegúrate de tener autorización explícita antes de escanear redes internas."',
  '"Unauthorized scanning may be illegal."': '"El escaneo no autorizado podría ser ilegal."',
  
  '"Schedule Scan"': '"Programar Escaneo"',
  '"Enable Scheduling"': '"Habilitar Programación"',
  '"Client-Side Scheduling"': '"Programación del Lado del Cliente"',
  '"Scheduled scans will only run when this application is open in your browser."': '"Los escaneos programados solo se ejecutarán cuando esta aplicación esté abierta en su navegador."',
  '"Ensure the tab remains active for scans to execute as planned."': '"Asegúrese de que la pestaña permanezca activa para que los escaneos se ejecuten según lo planeado."',
  
  '>Scheduled Scan Name<': '>Nombre del Escaneo Programado<',
  '"My Daily Website Check"': '"Revisión Diaria de Mi Sitio Web"',
  '>Frequency<': '>Frecuencia<',
  '"Select frequency"': '"Seleccionar frecuencia"',
  '>Once<': '>Una vez<',
  '>Daily<': '>Diariamente<',
  '>Weekly<': '>Semanalmente<',
  '>Monthly<': '>Mensualmente<',
  '>Start Date<': '>Fecha de Inicio<',
  '>Start Time<': '>Hora de Inicio<',
  
  // Modules configuration
  '"Basic Reconnaissance"': '"Reconocimiento Básico"',
  '> Deselect All<': '> Deseleccionar Todo<',
  '> Select All<': '> Seleccionar Todo<',
  '>Site Information<': '>Información del Sitio<',
  '- Basic website details': '- Detalles básicos del sitio',
  '>HTTP Headers<': '>Cabeceras HTTP<',
  '- Server response headers': '- Cabeceras de respuesta del servidor',
  '>Tech Stack Fingerprinting<': '>Análisis de Tecnologías (Tech Stack)<',
  '- Identify web technologies': '- Identificar tecnologías web',
  
  '"Network & Domain Intelligence"': '"Inteligencia de Red y Dominio"',
  '>WHOIS Lookup<': '>Búsqueda WHOIS<',
  '- Domain registration info': '- Información de registro del dominio',
  '>GeoIP Location<': '>Ubicación GeoIP<',
  '- Server physical location': '- Ubicación física del servidor',
  '>DNS Records<': '>Registros DNS<',
  '- A, AAAA, CNAME, TXT records': '- Registros A, AAAA, CNAME, TXT',
  '>MX Records<': '>Registros MX<',
  '- Mail server configuration': '- Configuración del servidor de correo',
  '>Subnet Scan<': '>Escaneo de Subred<',
  '- Network range analysis': '- Análisis del rango de la red',
  '>Port Scanning<': '>Escaneo de Puertos<',
  '- Open ports detection': '- Detección de puertos abiertos',
  '>Subdomain Enumeration<': '>Enumeración de Subdominios<',
  '- Find subdomains': '- Buscar subdominios',
  '>Reverse IP Lookup<': '>Búsqueda Inversa de IP<',
  '- Sites on same server': '- Sitios en el mismo servidor',
  
  '"Vulnerability Assessment"': '"Evaluación de Vulnerabilidades"',
  '>SQL Injection Test<': '>Prueba de Inyección SQL<',
  '- Database vulnerability': '- Vulnerabilidad en la base de datos',
  '>XSS Detection<': '>Detección de XSS<',
  '- Cross-site scripting test': '- Prueba de cross-site scripting',
  '>LFI Scanner<': '>Escáner de LFI<',
  '- Local File Inclusion': '- Inclusión de Archivos Locales (LFI)',
  '>VirusTotal Analysis<': '>Análisis con VirusTotal<',
  '- Malware and domain reputation': '- Reputación del dominio y malware',
  '>CORS Misconfiguration<': '>Mala Configuración de CORS<',
  '- Cross-Origin Resource Sharing flaws': '- Fallos en el intercambio de recursos de distintos orígenes',
  
  '"CMS Detection"': '"Detección de CMS"',
  '>WordPress Scan<': '>Escaneo de WordPress<',
  '- Version, themes, and plugins': '- Versión, temas y complementos',
  
  '"SEO Analytics"': '"Analítica SEO"',
  '>SEO Analysis<': '>Análisis SEO<',
  '- Search engine optimization score': '- Puntuación de optimización para motores de búsqueda',
  '>Broken Link Check<': '>Chequeo de Enlaces Rotos<',
  '- Detect dead links on the page': '- Detectar enlaces caídos en la página',
  
  '"Security Testing"': '"Pruebas de Seguridad"',
  '>DDoS/Firewall Test<': '>Prueba de DDoS/Cortafuegos<',
  '- Measure rate limiting limits': '- Medir límites de rate limiting',
  '>SSL/TLS Analysis<': '>Análisis de SSL/TLS<',
  '- Certificate details and vulnerabilities': '- Detalles del certificado y vulnerabilidades'
};

for (const [key, value] of Object.entries(replacements)) {
  // Use a global replace for all instances in the file
  content = content.replace(new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value);
}

fs.writeFileSync(newScanPath, content);
console.log('Translations applied!');

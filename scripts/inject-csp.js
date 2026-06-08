/*
 * Injecte une Content-Security-Policy dans build/index.html APRÈS le build.
 * On ne la met pas dans public/index.html car elle casserait le serveur de
 * développement (npm start utilise eval/inline pour le rechargement à chaud).
 * Lancé automatiquement par le script "build" de package.json.
 */
const fs = require('fs');
const path = require('path');

const CSP = [
  "default-src 'self'",
  "img-src 'self' data:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://api.emailjs.com",
  "script-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'self'",
].join('; ');

const metaTag = `<meta http-equiv="Content-Security-Policy" content="${CSP}" />`;
const indexPath = path.join(__dirname, '..', 'build', 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('inject-csp: build/index.html introuvable.');
  process.exit(1);
}

let html = fs.readFileSync(indexPath, 'utf8');

if (html.includes('Content-Security-Policy')) {
  console.log('inject-csp: CSP déjà présente, rien à faire.');
} else {
  html = html.replace('<head>', `<head>${metaTag}`);
  fs.writeFileSync(indexPath, html);
  console.log('inject-csp: CSP injectée dans build/index.html ✔');
}

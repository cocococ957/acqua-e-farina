// server.js
// Server Node.js (Express) per il sito Acqua & Farina.
// Serve i file statici dalla cartella /public (index.html, menu.html, ecc.)

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const PUBLIC_DIR = path.join(__dirname, 'public');

// Serve tutti i file statici (css, immagini future, ecc.) dalla cartella public
app.use(express.static(PUBLIC_DIR));

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

// Pagina menù — accessibile sia come /menu.html (link già presenti nell'HTML)
// sia come /menu (url più pulito)
app.get('/menu', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'menu.html'));
});

// 404 semplice per tutto il resto
app.use((req, res) => {
  res.status(404).send('Pagina non trovata. <a href="/">Torna alla home</a>.');
});

app.listen(PORT, () => {
  console.log(`🍕 Acqua & Farina in ascolto su http://localhost:${PORT}`);
});

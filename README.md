# Acqua & Farina — Sito Web

Sito statico (home + pagina menù) servito con Node.js / Express.

## Struttura

```
acqua-e-farina/
├── server.js          ← server Express
├── package.json
└── public/
    ├── index.html      ← home page (con sezione "Menù" che rimanda a menu.html)
    └── menu.html        ← pagina menù completa (98 voci, 6 categorie)
```

## Avvio in locale

1. Installa le dipendenze (richiede Node.js 18+):

   ```bash
   npm install
   ```

2. Avvia il server:

   ```bash
   npm start
   ```

3. Apri il browser su:

   ```
   http://localhost:3000
   ```

   Il menù completo è su `http://localhost:3000/menu` (oppure `/menu.html`).

## Modificare i contenuti

- Per cambiare testi, prezzi o piatti: modifica direttamente `public/index.html` o `public/menu.html` (sono pagine HTML statiche, nessuna build necessaria).
- Per cambiare la porta: imposta la variabile d'ambiente `PORT` prima di avviare, es. `PORT=8080 npm start`.

## Deploy

Funziona su qualsiasi hosting che supporti Node.js (Render, Railway, Heroku, un VPS, ecc.). Basta caricare la cartella, eseguire `npm install` e poi `npm start` (o configurare il comando di start sulla piattaforma).

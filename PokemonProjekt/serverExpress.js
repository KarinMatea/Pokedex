var express = require('express');
const app = express();

const path = require('path');

// Middleware-Funktion für das Protokollieren der Anfragen
app.use((req, res, next) => {
    const now = new Date().toISOString();
    console.log(`[${now}] ${req.method} ${req.url}`);
    next();
  });


//Index.html wird als Startseite genutzt
app.use(express.static("public"));

// Erstelle Routen für Pokemon 1 bis 30
for (let i = 1; i <= 30; i++) {
  const routePath = `/pokemon${i}`;
  const filePath = path.join(__dirname, 'public/html', `pokemon${i}.html`);

  app.get(routePath, (req, res) => {
    res.sendFile(filePath);
});
}
  
//Auf welchen Port der Server läuft
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

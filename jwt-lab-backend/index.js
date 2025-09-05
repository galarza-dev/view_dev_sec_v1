// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta POST para recibir datos del frontend
app.post('/capture', (req, res) => {
  console.log('📥 Datos recibidos del navegador:');
  console.log(req.body);

  res.status(200).json({ message: 'Datos recibidos correctamente' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${port}`);
});

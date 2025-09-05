// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.post('/capture', (req, res) => {
  console.log('✅ Datos recibidos del frontend:');
  console.log(req.body);
  res.status(200).json({ message: 'Datos recibidos exitosamente ✅' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`);
});

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Cloud Run requiere escuchar en process.env.PORT, por defecto 8080
const PORT = process.env.PORT || 8080;

// Health check en la ruta raíz '/'
// Como ingeniera senior, implemento una validación para no romper el frontend:
// Si la petición viene del Health Check de Google (GoogleHC) o no acepta HTML,
// respondemos 'OK'. Si es un navegador normal, pasamos al siguiente middleware
// para servir la aplicación React (index.html).
app.get('/', (req, res, next) => {
  const userAgent = req.headers['user-agent'] || '';
  if (userAgent.includes('GoogleHC') || !req.accepts('html')) {
    return res.status(200).send('OK');
  }
  next();
});

// Endpoint explícito de health check por si acaso
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Servir los archivos estáticos del frontend (React)
app.use(express.static(__dirname));

// SPA Fallback: redirigir cualquier otra ruta al index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});

import express from "express";
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const app = express();

// Para que pueda renderizar las vistas necesitamos pasarle la ruta absoluta
// Pero para que funcione siempre aunque cambiemos la la carpeta de lugar tenemos que
// hacer la ruta dinamica con un dir name
// en __dirname tenemos la ruta de forma dinamica
const __dirname = dirname(fileURLToPath(import.meta.url));
// con la funcion join lo que hacemos es concatenarle a la ruta la carpeta en donde estan los views
app.use('views', join(__dirname, views));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3050);
console.log('Servidor a su servicio en el puerto', 3050);
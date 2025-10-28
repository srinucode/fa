import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';
import contactRoute from './route/contactRoute.js';
import enrollRoute from './route/enrollRoute.js';
import { fileURLToPath } from 'url';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(import.meta.url);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', contactRoute);
app.use('/', enrollRoute);

if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  // Catch-all handler to serve index.html for all other routes
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
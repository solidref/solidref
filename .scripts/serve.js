import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the 'dist' directory
app.use(serveStatic(path.join(__dirname, '..', 'dist'), {index: ['index.html', 'index.htm']}));

// Catch-all route to direct all other requests to your static files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});

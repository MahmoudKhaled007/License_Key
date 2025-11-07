// Use "type": "module" in package.json to use ES module imports
import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  // for example: GET /is-alive
  if (req.method === 'GET' && req.url === '/is-alive') {
    
    // Read the value from Vercel's Environment Variables.
    // process.env variables are always strings, so we compare to the string "true".
    // Default to `true` if the variable isn't set.
    const isOk = process.env.API_STATUS_OK ? (process.env.API_STATUS_OK === 'true') : true;

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify({ ok: isOk }));
  } else {
    // any other route
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: false }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

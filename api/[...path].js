const BACKEND = 'https://skillaupza.free.nf';

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  const path = Array.isArray(req.query.path) ? req.query.path.join('/') : req.query.path || '';
  const url = `${BACKEND}/${path}`;

  try {
    const headers = {};
    for (const [key, value] of Object.entries(req.headers)) {
      if (value && !['host', 'origin', 'referer', 'content-length'].includes(key.toLowerCase())) {
        headers[key] = value;
      }
    }
    headers['host'] = 'skillaupza.free.nf';

    const opts = {
      method: req.method,
      headers,
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      opts.body = await getRawBody(req);
    }

    const response = await fetch(url, opts);
    const data = await response.text();

    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'transfer-encoding') {
        res.setHeader(key, value);
      }
    });
    res.status(response.status).send(data);
  } catch (err) {
    res.status(502).json({ success: false, message: err.message });
  }
}

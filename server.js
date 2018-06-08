import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import path from 'path';

import Smasqt from './src/Smasqt'

const app = express();
const PORT = process.env.PORT || 3000;

const env = process.env.NODE_ENV

const renderPage = (title, app) => `
  <!DOCTYPE html>
    <html lang="en">
      <style>html, body, #app { height: 100%; margin: 0; }</style> 
      <link href="/static/styles.css" rel="stylesheet" type="text/css   ">
      <link href="https://fonts.googleapis.com/css?family=Rammetto+One|Lato" rel="stylesheet">
      <!-- testing monos -->
      <!--<link href="https://fonts.googleapis.com/css?family=Fira+Mono|Source+Code+Pro|Nova+Mono|Overpass+Mono|Rammetto+One|Roboto+Mono|Space+Mono" rel="stylesheet">-->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${renderToString(app)}</div>
      </body>
      <script src="${ (env === 'dev' ? '/static/client.js' : '/static/client.min.js' )}"></script>
    </html>
  </html>
`

app.use("/static/client.js", express.static(path.join(process.cwd(), "dist/client.js")));
app.use("/static/client.min.js", express.static(path.join(process.cwd(), "dist/client.min.js")));

app.get('/*', (req, res) => {
  let pageTitle = 'smasq̓t';

  res.status(200).send(renderPage(pageTitle, (
    <StaticRouter context={{}} location={req.url}>
      <Smasqt />
    </StaticRouter>
  )));
});

app.listen(PORT, () => {
  console.log("Server listening on", PORT);
});
const http = require("http");
const url = require("url");
const api = require("./api");

const PORT = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
  const params = url.parse(req.url, true).query;
  if (!params.org) {
    return res.end("Plz specify a GitHub org.");
  }
  res.setHeader("Content-Type", "application/json");
  api(params.org, json => res.end(JSON.stringify(json)));
});

app.listen(PORT, () =>
  console.log(
    `Listening on ${PORT}. Visit http://localhost:${PORT}?org=cfpb`
  )
);
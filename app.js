const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, resp) => {
  resp.sendFile(path.join(__dirname, "public/index.html"));
});

const port = process.env.PORT || 8081;

const server = http.createServer(app);
server.listen(port, () => console.log(`server listing at port ${port}`));

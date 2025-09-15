const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) =>
  res.json({ app: "ue-docker", status: "ok", time: new Date().toISOString() })
);
app.get("/health", (req, res) => res.status(200).send("ok"));
app.listen(PORT, () => process.stdout.write(`listening ${PORT}\n`));

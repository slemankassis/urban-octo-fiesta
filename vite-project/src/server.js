import express from "express";
import ViteExpress from "vite-express";

const app = express();

const transactions = [];

app.get("/transaction", (_, res) => res.send(transactions));
app.post("/transaction", (req, res) => {
  console.log("🚀 ~ req:", req);

  res.send(transactions.push(req.body.transactions));
});

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));

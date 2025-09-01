import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";

const app = express();
const allowedOrigin = process.env.CLIENT_URL || "http://localhost:3000";

app.use(cors({ origin: allowedOrigin, credentials: true }));

const transactions = [];

app.get("/transactions", (_, res) => res.send(transactions));
app.post("/transaction", (req, res) => {
  console.log("🚀 ~ req:", req);

  res.send(transactions.push(req.body.transactions));
});

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));

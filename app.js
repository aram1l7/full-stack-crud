const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const app = express();
const accounts = require("./routes/accounts");
const PORT = process.env.PORT || 4000;
config();
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.APP_HOSTNAME,
  })
);

app.use("/api/accounts", accounts);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

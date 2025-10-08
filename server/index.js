const express = require("express");
const app = express();

app.use(express.static("public")); // serve your front-end if you want to include it later

app.get("/", (req, res) => {
  res.send("Backend is live!");
});

// Simple IP logger (for personal testing only)
app.get("/log", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;
  console.log(`Visitor IP: ${ip}`);
  res.send("Logged!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

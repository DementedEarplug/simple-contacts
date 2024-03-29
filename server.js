const connectDB = require("./config/db");
const express = require("express");

const app = express();

// Connect to the database
connectDB();

// Init midleware
//  Allow to receive request body data, this substitues body-parser
app.use(express.json({extended: false}))

// This future proofs you use 5000 for dev and env prot for deployment.
const PORT = process.env.PORT || 5000;

// Routes
app.get("/hola", (req, res) => {
  res.json({ msg: "Hello bugarooo" });
});

//Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Server init
app.listen(PORT, '0.0.0.0', () => console.log(`App running on port ${PORT}`));

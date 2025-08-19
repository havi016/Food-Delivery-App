const express = require('express');
const router = require('./routes/user-routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", router);

// global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
});

module.exports = app;
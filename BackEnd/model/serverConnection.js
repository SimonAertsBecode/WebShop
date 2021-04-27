const express = require("express");
const app = express();
const PORT = 5500;

app.listen(PORT, "127.0.0.1", (err) => {
    if (err) throw err;
    console.log(`Listening on port: ${PORT}`);
});

module.exports = app;

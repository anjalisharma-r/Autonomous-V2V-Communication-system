const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Autonomous Vehhicle-to-to Vehicle Communication"));
app.listen(3000, () => console.log("Server running on port 3000"));

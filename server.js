const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());


// Hardcoded lead numbers for testing (you can replace with database values)
// const leads = ["9876543210", "9998887776", "8765432109"];

// API route to return a random lead number
app.get("/get-lead-number", (req, res) => {
    const leadNumber = "8401481083";
    res.setHeader("Content-Type", "text/plain");
    res.send(leadNumber);
});

// Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});  

const express = require("express");
const app = express();

const total = (precio, cant, desc) =>
    precio * cant * (1 - desc);

app.get("/total", (req, res) => {
    const { p, c } = req.query;
    res.json({ total: total(p, c, 0) });
});

// Reto 3: Iniciar el servidor para ZAP DAST
app.listen(3000, () => {
    console.log("App iniciada en el puerto 3000");
});

module.exports = { app, total };

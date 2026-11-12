const express = require("express");
const app = express();

const total = (precio, cant, desc) =>
    precio * cant * (1 - desc);

app.get("/total", (req, res) => {
    const { p, c } = req.query;
    res.json({ total: total(p, c, 0) });
});

// EL AJUSTE PARA EL RETO 3: Solo levanta el servidor si se ejecuta directamente,
// evitando que el test (npm test) se quede colgado eternamente.
if (require.main === module) {
    app.listen(3000, () => {
        console.log("App iniciada en el puerto 3000");
    });
}

module.exports = { app, total };

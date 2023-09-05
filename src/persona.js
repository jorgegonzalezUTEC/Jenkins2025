const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.json({
        nombre: "Jorge",
        apellido: "Gonzalez",
        edad: 39
    });
})

module.exports = router;
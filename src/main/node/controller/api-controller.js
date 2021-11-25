var express = require('express');
var router = express.Router();
const keycloak = require('../config/keycloak-config.js').getKeycloak();

/**
 * @swagger
 * /api/example:
 *   get:
 *     description: Returns a custom metric
 *     responses:
 *       200:
 *         description: the metric
 */
router.get('/example', keycloak.protect('et-first-role'), function(req, res){
    res.json({payload:"test Data"});
});

module.exports = router;

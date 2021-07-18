const { Router } = require("express");
const toodoController = require('./controllers/ToodoController')

const routes = Router();

routes
.get('/list-toodo',toodoController.index)
.post('/add-toodo', toodoController.create)
.put('/update-toodo/:id', toodoController.update)
.delete('/delete/:id', toodoController.delete);

module.exports = routes;

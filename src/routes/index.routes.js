const { Router } = require('express');
const router = Router();
const { renderAbout, renderIndex } = require('../controller/index.controller')

router.get('/', renderIndex)

router.get('/about', renderAbout)


module.exports = router;
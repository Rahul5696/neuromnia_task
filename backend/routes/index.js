const express = require('express');
const { getDomainsAndLevel, chatbot } = require('../controller');
const { validateMessage } = require('../utils');
const router = express.Router();


router.get('/domainsAndLevels',getDomainsAndLevel);
router.post('/chatbot',validateMessage, chatbot);

module.exports = router;
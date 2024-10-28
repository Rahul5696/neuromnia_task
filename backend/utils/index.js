const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const global = require('./globalVariable');

// Load CSV into memory
const loadMilestones = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '../vb_mapp_milestones.csv'))
      .pipe(csv())
      .on('data', (data) => global.setMileMileStones(data))
      .on('end', () => {
        console.log('CSV file loaded:', global.getMileStones().length, 'milestones');
        resolve();
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

// Fetch unique domains from the loaded milestones
const getUniqueDomains = () => {
  const domains = new Set(global.getMileStones().map(m => m.Domain).filter(Boolean));
  return Array.from(domains);
};

// Fetch milestones based on domain and level
const getMilestonesByDomainAndLevel = (domain, level) => {
  return global.getMileStones().filter(m => m.Domain === domain && m.Level === level);
};

// Fetch unique levels from the loaded milestones
const getUniqueLevels = () => {
  const levels = new Set(global.getMileStones().map(m => m.Level).filter(Boolean));
  return Array.from(levels);

};

// Validate message middleware
const validateMessage = (req, res, next) => {
    const { message } = req.body;
    console.log({ message })
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    if (typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message must be a non-empty string' });
    }
    next();
  };

module.exports = { loadMilestones, getMilestonesByDomainAndLevel, getUniqueDomains, getUniqueLevels, validateMessage }
const { getUniqueDomains, getUniqueLevels, getMilestonesByDomainAndLevel } = require("../utils");
const global = require('../utils/globalVariable');

const getDomainsAndLevel = (req, res) => {
  try {
    const domains = getUniqueDomains();
    const levels = getUniqueLevels();
    res.status(200).json({ domains, levels });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load domains and levels' });
  }
}

const chatbot = (req, res) => {
  const { message, code, domain, level } = req.body;

  if (message === 'Lookup Milestone') {
    const milestone = global.getMileStones().filter(m => m.Skill_Code.toLowerCase() === code.toLowerCase());
    if (milestone) {
      return res.json(milestone);
    } else {
      return res.status(404).json({ error: 'Milestone not found' });
    }
  }

  if (message === 'List Domain') {
    const filteredMilestones = getMilestonesByDomainAndLevel(domain, level);
    if (filteredMilestones.length > 0) {
      return res.json(filteredMilestones);
    } else {
      return res.status(404).json({ error: 'No milestones found for this domain and level' });
    }
  }

  return res.status(400).json({ error: 'Invalid request' });
};

module.exports = { getDomainsAndLevel, chatbot }
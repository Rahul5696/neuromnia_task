const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const apiRoutes = require('./routes');
const { loadMilestones } = require('./utils');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 40, // limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests, please try again later.' }
});


app.use(limiter);

// let milestones = [];

// // Load CSV into memory
// const loadMilestones = () => {
//   return new Promise((resolve, reject) => {
//     fs.createReadStream(path.join(__dirname, 'vb_mapp_milestones.csv'))
//       .pipe(csv())
//       .on('data', (data) => milestones.push(data))
//       .on('end', () => {
//         console.log('CSV file loaded:', milestones.length, 'milestones');
//         resolve();
//       })
//       .on('error', (err) => {
//         reject(err);
//       });
//   });
// };

// // Fetch unique domains from the loaded milestones
// const getUniqueDomains = () => {
//   const domains = new Set(milestones.map(m => m.Domain).filter(Boolean));
//   return Array.from(domains);
// };

// // Fetch milestones based on domain and level
// const getMilestonesByDomainAndLevel = (domain, level) => {
//   return milestones.filter(m => m.Domain === domain && m.Level === level);
// };

// // Fetch unique levels from the loaded milestones
// const getUniqueLevels = () => {
//   const levels = new Set(milestones.map(m => m.Level).filter(Boolean));
//   return Array.from(levels);
// };



// API Endpoint to get unique domains and levels
app.use('/api', apiRoutes);

// Start the server
const startServer = async () => {
  try {
    await loadMilestones();
    // console.log({first : global.getMileStones()})
    app.listen(PORT, () => {
      console.log(`Backend is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to load milestones:', error);
  }
};

startServer();

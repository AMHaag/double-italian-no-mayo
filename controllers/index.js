const router = require('express').Router();

const apiRoutes = require('./api/');
const homePageRoutes = require('./homepage-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);
router.use('/', homePageRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
  res.status(404);
});

module.exports = router;

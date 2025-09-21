const express = require('express');
const router = express.Router();
const travelPlaces = [
    { name: 'Banff', country: 'Canada', isPopular: true },
    { name: 'Agra', country: 'India', isPopular: true },
    { name: 'Luang Prabang', country: 'Laos', isPopular: false }
];
router.get('/', function(req, res) {
  const welcomeMessage = "Explore Unique Places Around the World!";
  res.render('index', { travel_places: travelPlaces, msg: welcomeMessage });
});
module.exports = router;



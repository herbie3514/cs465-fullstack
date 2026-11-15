const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel list view */
const travelList = (req, res) => {
    res.render('travel', {
        title: 'Travlr Getaways',
        trips: trips
    });
};

module.exports = {
    travelList
};



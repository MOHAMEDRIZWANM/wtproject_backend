const mongoose = require('mongoose');

module.exports.connectdb = () => {
    return mongoose.connect('mongodb+srv://RIZWAN:RIZWAN@laptop.dkvflwd.mongodb.net/laptopservice');
};

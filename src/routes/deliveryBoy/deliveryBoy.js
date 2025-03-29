const express = require('express');
const { riderDetails, rideDetails } = require('../../controller/deliveryBoyController/deliverBoyController');
const deliveryBoy = express.Router();


deliveryBoy.get('/profileDetails',riderDetails)


deliveryBoy.get('/rideDetails',rideDetails)

module.exports = deliveryBoy
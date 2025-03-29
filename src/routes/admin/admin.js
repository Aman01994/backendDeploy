const express  = require('express');
const { adminController, adminResturantDetails, adminOrder_details } = require('../../controller/admin/admin');
const admin = express.Router();



admin.get('/customer_details',adminController)



admin.get('/resturant_details',adminResturantDetails)


admin.get('/order_details',adminOrder_details)


module.exports = {admin};
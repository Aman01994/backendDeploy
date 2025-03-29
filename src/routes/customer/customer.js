const express = require('express');
const { restrauntListController, historyOrder, orderDetails, custProfile } = require('../../controller/customerController.js/customerController');
const customer = express.Router();


customer.get('/restraunt_list',restrauntListController)

customer.get('/historyOrder',historyOrder)

customer.get('/orderDetails',orderDetails)

customer.get('/custProfile',custProfile)

module.exports = {customer}
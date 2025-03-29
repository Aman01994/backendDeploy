const express = require('express');
const { admin } = require('./routes/admin/admin');
const { customer } = require('./routes/customer/customer');
const deliveryBoy = require('./routes/deliveryBoy/deliveryBoy');
const app = express();
app.use(express.json());
require('dotenv').config();

Port = process.env.PORT 

app.use('/admin',admin)
app.use('/customer',customer)
app.use('/deliveryBoy',deliveryBoy)

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})
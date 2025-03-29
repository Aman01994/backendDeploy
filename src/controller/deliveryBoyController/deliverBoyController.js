
const riderDetails =  (req,res)=>{
    const profile = [{
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890'
    }]
    res.status(200).json({
        message : profile
    })
}

const  rideDetails = (req,res)=>{
    const rides = [{
        customer_name: 'Lema toe',
        resturant_name: 'The Pizzeria',
        order_time: '12:00 PM',
        distance: 5.0,
        estimated_time: '15 minutes'
    },{
        customer_name: 'John Doe',
        resturant_name: 'The Burger King',
        order_time: '1:00 PM',
        distance: 3.5,
        estimated_time: '10 minutes'
    },{
        customer_name: 'Paul Doe',
        resturant_name: 'The Taco Bell',
        order_time: '2:30 PM',
        distance: 4.0,
        estimated_time: '12 minutes'
    },{
        customer_name: 'Jane Doe',
        resturant_name: 'The Mexican Restaurant',
        order_time: '3:45 PM',
        distance: 2.5,
        estimated_time: '8 minutes'
    }]
    res.status(200).json({
        message : rides
    })
}

exports.riderDetails = riderDetails
exports.rideDetails  = rideDetails
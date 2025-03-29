const restrauntListController = (req,res)=>{
    const restraunt_list = [{
        name: "Burger King",
        place : "Rajouri Garden",
        rating : "4.5"
    },
    {
        name: "Burger King",
        place : "Rajouri Garden",
        rating : "4.5"
    },
    {
        name: "Burger King",
        place : "Rajouri Garden",
        rating : "4.5"
    },
    {
        name: "Burger King",
        place : "Rajouri Garden",
        rating : "4.5"
    }]
    res.status(200).json({
        message : restraunt_list
    })
}

let historyOrder = (req,res)=>{
    let historyOrder = [{
        restraunt_name: "Burger King",
        order_date: "2022-06-15",
        total_amount: "150"
    },{
        restraunt_name: "McDonald's",
        order_date: "2022-06-14",
        total_amount: "100"
    },{
        restraunt_name: "Dunkin Donuts",
        order_date: "2022-06-13",
        total_amount: "80"
    },{
        restraunt_name: "The Pizzeria",
        order_date: "2022-06-12",
        total_amount: "150"
    },{
        restraunt_name: "The Burger King",
        order_date: "2022-06-11",
        total_amount: "120"
    },{
        restraunt_name: "The Dunkin Donuts",
        order_date: "2022-06-10",
        total_amount: "80"
    }]
    res.status(200).json({
        message : historyOrder
    })
}


let orderDetails = (req,res)=>{
    const orderDetails = {
        order_id: "123456",
        restraunt_name: "Burger King",
        items: [
            {
                item_name: "Burger",
                quantity: 2,
                price: 50
            },
            {
                item_name: "Fries",
                quantity: 1,
                price: 30
            }
        ],
        total_amount: 120
    }
    res.status(200).json({
        message : orderDetails
    })
}


const custProfile = (req,res)=>{
    const custProfile = [{
        name: 'Lema',
        email: 'lemandoe@example.com',
        phone: '123-456-7890'
    }]
    res.status(200).json({
        message : custProfile
    })
}

exports.restrauntListController = restrauntListController;
exports.historyOrder = historyOrder;
exports.orderDetails = orderDetails;
exports.custProfile = custProfile;
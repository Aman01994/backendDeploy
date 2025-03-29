const express = require('express');

const adminController = (req,res)=>{
            const customer_details = [
                {
                    name: 'Lema toe',
                    email: 'lemandoe@example.com',
                    phone: '123-456-7890'
                },
                {
                    name: 'Jim toe',
                    email: 'jimdoe@example.com',
                    phone: '123-456-7890'
                },
                {
                    name: 'Paul Doe',
                    email: 'pauldoe@example.com',
                    phone: '123-456-7890'
                },
                {
                    name: 'Kate Doe',
                    email: 'katedoe@example.com',
                    phone: '123-456-7890'
                },
                {
                    name: 'Alice Doe',
                    email: 'alicedoe@example.com',
                    phone: '123-456-7890'
                }
            ]

            res.status(200).json(customer_details);
}

const adminResturantDetails =(req,res)=>{
            const resturant_details = [{
                name: 'The Pizzeria',
                address: '123 Main St',
                phone: '123-456-7890'
            },{
                name: 'The Burger King',
                address: '456 Elm St',
                phone: '123-456-7890'
            },{
                name: 'The Taco Bell',
                address: '789 Oak St',
                phone: '123-456-7890'
            },{
                name: 'The Dunkin Donuts',
                address: '101 Maple St',
                phone: '123-456-7890'
            },{
                name: 'The McDonald\'s',
                address: '202 Broadway St',
                phone: '123-456-7890'
            }]

            res.status(200).json(resturant_details);
}

const adminOrder_details = (req,res)=>{
    const order_Details = [{
        customer_name: 'Lema toe',
        resturant_name: 'The Pizzeria',
        order_items: ['Pepperoni Pizza', 'Margherita Pizza', 'Hawaiian Pizza'],
        order_time: '12:00 PM',
        total_price: 150.00
    },{
        customer_name: 'Jim Doe',
        resturant_name: 'The Burger King',
        order_items: ['Chicken Burger', 'French Fries', 'Coke'],
        order_time: '12:30 PM',
        total_price: 100.00
    },{
        customer_name: 'Paul Doe',
        resturant_name: 'The Taco Bell',
        order_items: ['Taco Salad', 'Taco Chips', 'Lettuce'],
        order_time: '1:00 PM',
        total_price: 120.00
    },{
        customer_name: 'Lema toe',
        resturant_name: 'The Dunkin Donuts',
        order_items: ['Hot Dog', 'Chips', 'Diet Coke'],
        order_time: '1:30 PM',
        total_price: 80.00
    },{
        customer_name: 'Jim Doe',
        resturant_name: 'The McDonald\'s',
        order_items: ['Burger', 'Fries', 'Soda'],
        order_time: '2:00 PM',
        total_price: 100.00
    },{
        customer_name: 'Paul Doe',
        resturant_name: 'The Pizzeria',
        order_items: ['Pepperoni Pizza', 'Margherita Pizza', 'Hawaiian Pizza'],
        order_time: '2:30 PM',
        total_price: 150.00
    }]

    res.status(200).json(order_Details);
}

exports.adminController = adminController ;
exports.adminResturantDetails = adminResturantDetails ;
exports.adminOrder_details = adminOrder_details;
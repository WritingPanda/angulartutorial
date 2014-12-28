var express = require('express');
var app = express();

// Express 4.x
var router = express.Router();

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

app.get('/customers', function(req, res) {
    res.json(customers);
    res.send("hello");
});

app.listen(8080);

console.log('Express listening on port 8080');

// No DB. Customer data is here.
var customers = [
    {
        id: 1,
        joined: '2000-12-02',
        name:'Omar',
        city: 'San Antonio',
        orderTotal: 9.9956,
        orders: [
            {
                id: 1,
                product: 'Smoothie',
                total: 9.9956
            }
        ]
    },
    {
        id: 2,
        joined: '2013-01-09',
        name:'Becky',
        city: 'Changsha',
        orderTotal: 11.0242,
        orders: [
            {
                id: 2,
                product: 'Lotion',
                total: 11.0242
            }
        ]
    },
    {
        id: 3,
        joined: '1943-06-22',
        name:'Mateo',
        city: 'Boston',
        orderTotal: 5.6424,
        orders: [
            {
                id: 3,
                product: 'Dog treat',
                total: 5.6424
            }
        ]
    },
    {
        id: 4,
        joined: '1985-03-18',
        name:'Josef',
        city: 'Vladivostok',
        orderTotal: 110.9961,
        orders: [
            {
                id: 4,
                product: 'Monitor',
                total: 110.9961
            }
        ]
    },
    {
        id: 5,
        joined: '2002-07-24',
        name:'Diego',
        city: 'San Diego',
        orderTotal: 1251.7330,
        orders: [
            {
                id: 5,
                product: 'Dog house',
                total: 300.3131
            },
            {
                id: 6,
                product: 'Gold dog bowl',
                total: 650.5247
            },
            {
                id: 7,
                product: 'Silver leash',
                total: 300.8952
            }
        ]
    }
];
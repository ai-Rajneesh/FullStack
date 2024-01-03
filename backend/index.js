import express from 'express'
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/products', (req, res) => {
    const products = [{
            name: 'Macbook Pro',
            price: 200000,
            quantity: 1,

        },
        {
            name: 'Asus',
            price: 60000,
            quantity: 1,

        },
        {
            name: 'Lenovo',
            price: 100000,
            quantity: 1,
        },
        {
            name: 'HP',
            price: 100000,
            quantity: 1,
        },
        {
            name: 'Dell XPS 13',
            price: 150000,
            quantity: 1,

        },
    ];
    res.send(products);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
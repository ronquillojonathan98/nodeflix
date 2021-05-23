const express = require('express')
const router = express.Router();

router.get('', (req, res) => 
{
    res.render('index.hbs', 
    {
        title: 'Nodeflix',
        query: req.query.query,
    })
})

router.get('/about', (req, res) => 
{
    res.render('about.hbs',
    {
        title: 'About'
    })
})

router.get('/about/help', (req, res) => 
{
    res.send('About Help')
})

router.get('/about/*', (req ,res) => 
{
    res.send('Error About Page Not Found.')
})

router.get('/nodeflix', (req, res) => 
{
    res.send({
        movies: [
            {
                name: 'Chocolate Factory',
                type: 'child moie'
            },
            {
                name: 'Transporter',
                type: 'adult movie'
            }
        ]
    })
})

router.get('*', (req, res) => 
{
    res.send('404 Page Not Found.')
})

module.exports = router;
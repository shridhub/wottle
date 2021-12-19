const express = require('express')
const app = express()
const path = require('path')

viewsPath = path.join(__dirname, 'pages/views')
partPaths = path.join(__dirname, '/pages/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(path.join(__dirname, 'css')))

img = path.join(__dirname, '/images/')

arr = [
    {brand:'Bisleri', size: '500ml', photo: 'https://5.imimg.com/data5/NJ/BN/QU/ANDROID-39606195/product-jpeg-500x500.jpeg',cost: '10'},
    {brand:'Aquafina', size: '500ml', photo: 'https://5.imimg.com/data5/QQ/YK/TM/SELLER-98558878/aquafina-bottle-500-ml-500x500.jpg',cost: '10'},
    {brand: 'Kinley', size: '500ml', photo: 'https://5.imimg.com/data5/QL/CF/HP/SELLER-7474209/500-ml-500x500.png',cost: '10'}
]

app.get('/', (req, res) => {
    res.render('index', { data: arr})
})

app.listen('8080',() => {
    console.log('All going well')
})
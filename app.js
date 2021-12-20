const express = require('express')
const app = express()
const path = require('path')

viewsPath = path.join(__dirname, 'pages/views')
partPaths = path.join(__dirname, '/pages/partials')

const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(path.join(__dirname, 'css')))

img = path.join(__dirname, '/images/')

arr = [
    {brand:'Bisleri', size: '500ml', photo: 'https://5.imimg.com/data5/NJ/BN/QU/ANDROID-39606195/product-jpeg-500x500.jpeg',cost: '10'},
    {brand:'Aquafina', size: '500ml', photo: 'https://5.imimg.com/data5/QQ/YK/TM/SELLER-98558878/aquafina-bottle-500-ml-500x500.jpg',cost: '10'},
    {brand: 'Kinley', size: '500ml', photo: 'https://5.imimg.com/data5/QL/CF/HP/SELLER-7474209/500-ml-500x500.png',cost: '10'},
    {brand: 'Kinley' ,size: '1L',cost: '20', photo: 'https://5.imimg.com/data5/AQ/RO/MY-12951225/1-litre-mineral-water-500x500.jpg',},
    {brand: 'Kinley' ,size: '1L, Pack of 12',cost: '210', photo: 'https://xottle.in/wp-content/uploads/2021/04/Kinley-1L-.jpg',},
    {brand: 'Nestle PureLife' ,size: '500ml',cost: '40', photo: 'https://store2door.net/uploads/media/2021/npl500_ml.jpg',},
    {brand: '' ,size: '',cost: '', photo: '',},
    {brand: '' ,size: '',cost: '', photo: '',},
    {brand: '' ,size: '',cost: '', photo: '',},
]

app.get('/', (req, res) => {
    res.render('index', { data: arr})
})

app.listen(port,() => {
    console.log('All going well')
})
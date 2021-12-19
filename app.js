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
    {brand:'Bisleri', size: '500ml', photo: '',cost: '10'},
    {brand:'Aquafina', size: '500ml', photo: '',cost: '10'},
    {brand: 'Kinley', size: '500ml', photo: '',cost: '10'}
]

app.get('/', (req, res) => {
    res.render('index', { data: arr})
})

app.listen(port,() => {
    console.log('All going well')
})
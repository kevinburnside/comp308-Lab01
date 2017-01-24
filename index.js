//index
let express = require('express')
let app = express()

app.get('/hi', function(req, res){
    res.send('Test')
})

app.listen(3000, function(){
    console.log('Example app')
})
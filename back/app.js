const express = require('express')

const app = express()

app.get('/', function (req, res, next) {
    res.status(200).json({
        data: 'hey',
    })
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`server started on port 8080`)
})

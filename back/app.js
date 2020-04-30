const express = require('express')

const app = express()

app.listen(process.env.SERVER_PORT | 4000, () => {
    console.log(`server started on port ${process.env.SERVER_PORT}`)
})

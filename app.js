const express = require('express')
const app = express()

app.get('/', (req, res) => res.status(200).json({ msg: 'Hello World!' }))

app.listen(3300, () => console.log('Example app listening on port 3300!'))
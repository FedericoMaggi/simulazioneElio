const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
 
function string_square(s){
    if (typeof(s)==String){
        res = length(s)*length(s);
    } else {
        res = -1;
    }
    return res;
}

app.get('/square', (req, res) => {
    const s = req.query.string
    res = string_square(s);
    res.status(200).json({
        result: 
    })
})

app.listen(PORT, () => console.log('Example app listening on port'+ PORT))

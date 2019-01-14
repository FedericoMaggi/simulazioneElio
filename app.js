/*const express = require('express')
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
        result: res
    })
})

app.listen(PORT, () => console.log('Example app listening on port'+ PORT))*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000

function string_square(s) {
    if (typeof s === 'string'){
        var res = (s.length)*(s.length);
    } else {
        var res = -1;
    }
    return res;
}

app.get('/', (req,res) => {
    res.json({
        message: 'tua madre'
    });
});

app.get('/square', (req, res) => {
    res.status(200).json({
        result: string_square(req.query.string)       
    });
});

app.listen(port);

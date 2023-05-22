const express = require('express')
const app = express()
const axios = require("axios");
const path = require("path")
const port = 3000

app.get('/', (req, res) => {
    console.log(path.join(__dirname, 'public'))
    return res.sendFile('public/index.html', {root : __dirname});
})

app.get('/searchword', (req, res) => {
    //res.send('Hello World!')
    console.log(req.query)

    var options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: {entry: req.query.entry},
        headers: {
          'X-RapidAPI-Key': '130f017ba4mshce752d0bf5635b6p1cb568jsn90cbbf20f820',
          'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
      console.error(error);
    });


  

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000`)
})
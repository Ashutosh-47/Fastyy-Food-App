
global.foodData = require('./db')(function call(err, data, CatData) {
  
    if(err) console.log(err);
    global.foodData = data;
    global.foodCategory = CatData;
  })
  
  const express = require('express')
  const app = express()
  const port = 5000


  app.use ( ( req , res , next ) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
  })

  app.use(express.json())
  
  app.get('/', (req, res) => {    res.send('Hello World!') } )
  
  app.use('/api/auth', require('./Routes/Auth'))
  
  app.listen(port, () => {  console.log(`Example app listening on http://localhost:${port}` ) } )
  
  
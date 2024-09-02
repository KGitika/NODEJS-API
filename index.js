// Middleware runs shared code that runs before every endpoint callback.
const express = require('express');    
//(app represent the actual api we are building) in value we add express which act as a function
const app = express();
const PORT = 8080;   

app.use( express.json() )     // in this case we are appling express.json middleware.

//listten on a specific port
app.listen(  
    PORT,
    () => console.log(`it's alive on  http://localhost:${PORT}`)
)  

// Add an endpoint to the API
app.get('/tshirt', (req, res) => {       // Run this function when the root is requested. function itself provide access to two diff. obj(req,res)
    res.status(200).send({
        tshirt: '||',
        size: 'large'
    })
});

//Add an 2nd endpoint
app.post('/tshirt/:id', (req, res) => {
      // express does not parse json in the body by defalut, we need to setup middleware 
      //that tells express, parse json before the actual data hits the function that we are using here to handle the request
      
    const {id} = req.params;
    const {logo} = req.body;

    if (!logo){
      res.status(418).send({ message: 'We need a logo!' })
    }

    res.send ({
        tshirt: `|| with your ${logo} and ID of ${id}`,
    });
});
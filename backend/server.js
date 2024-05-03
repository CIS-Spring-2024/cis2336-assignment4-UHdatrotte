// Create directory in terminal ( cd cis2336-assignment4-UHdatrotte )
// Create directory in terminal ( cd backend )
// run server ( node server )

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Static files from public directory
app.use(express.static(path.join(__dirname,'public')));

// server order page
app.get('/',(req, res)=> {
    res.sendFile(path.join(__dirname,'public','order.html'));
});

// post request
app.post('/submit', (req, res) => {

    res.sendFile(path.join(__dirname,'public','order_con.html'))

})

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});
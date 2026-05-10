const express = require('express');

const app = express();

app.use(express.urlencoded());

// Login Page
app.get('/', function(req,res){

    res.send(`
    
    <form method="POST" action="/login">

        <input type="text" name="user" placeholder="Username">

        <br><br>

        <input type="password" name="pass" placeholder="Password">

        <br><br>

        <button>Login</button>

    </form>

    `);

});

// Login Check
app.post('/login', function(req,res){

    if(req.body.user=="admin" &&
       req.body.pass=="1234"){

        res.send("Login Successful");
    }
    else{

        res.send("Invalid Login");
    }

});

app.listen(4000);

console.log("Server Running");
console.log("http://localhost:4000");
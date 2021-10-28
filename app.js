const express = require('express')
const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 5000
const app = express()
const path = require('path')
const mongoose = require("mongoose")
var cors = require('cors')

mongoose.connect("mongodb+srv://admin:admin@cluster0.x26vs.mongodb.net/dev", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    created_on: { type: Date, default: Date.now },
});

app.use(cors(["localhost:5000", "localhost:3000",]))
app.use(express.json())

app.use('/', express.static(path.join(__dirname, '/web/build')))


app.post('/api/v1/registration', (req, res) => {

    console.log(req.body)

    

    User.findOne({ email: req.body.email }, (err, user) => {

        if (err) {
            res.status(500).send("error in getting database")
        } else {
            if (user) {

                if (user.email === req.body.email) {
                    res.send(  "Email Already authorized");
                    

                } else {
                    let newUser = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password
                    })
                    newUser.save(() => {
                        console.log("data saved")
                        res.send('profile created')
                    })
                }

            } else {
                res.send("user not found");
            }
        }

    })
})


app.post('/api/v1/login', (req, res) => {

    if (!req.body.email ||
        !req.body.password
    ) {
        console.log("required field missing");
        res.status(403).send("required field missing");
        return;
    }

    console.log("req.body: ", req.body);


    User.findOne({ email: req.body.email }, (err, user) => {

        if (err) {
            res.status(500).send("error in getting database")
        } else {
            if (user) {

                if (user.password === req.body.password) {
                    res.send("user is found");
                    

                } else {
                    res.send("Authentication fail");
                }

            } else {
                res.send("user not found");
            }
        }

    })
})


app.put('/api/v1/profile', (req, res) => {
    res.send('profile updated')
})
app.delete('/api/v1/profile', (req, res) => {
    res.send('profile deleted')
})



mongoose.connection.on("connected", () => console.log("Database Connected..."))
mongoose.connection.on("error", (error) => console.log(`Error${error.message}`))

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
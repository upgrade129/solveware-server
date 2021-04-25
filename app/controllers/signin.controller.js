const User = require('../models/userModel');

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    res.send(req.body)
    if(!req.body) {
        return res.status(400).send({
            message: "user content can not be empty"
        });
    }

    // Create a user
    const user = new User({
        username: req.body.username || "Untitled user", 
        email: req.body.email,
        password: req.body.password
    });

    // Save user in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the user."
        });
    });
};

exports.findUser = (req, res) => {
    var email = req.body.username;
    var password = req.body.password;
    console.log("cred",email,password);
    User.find()
    .then(users => {
        users.map((user)=>{
            console.log(user.email);
            if(user.email == email){
                if(user.password == password){
                    res.send(user)
                }
            }

        })
        res.send(false);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};


exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};


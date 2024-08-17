const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/jwellery').then(() => {
    console.log("Connection successful");
    app.listen(4000, () => {
        console.log("App is listening on port 4000");
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
 
// Schema for users of app
const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        
    },
    lastname: {
        type: String,
        
    },
    telnum: {
        type: Number,
        
    },
    email: {
        type: String,
        
        unique: true,
    },
    message: {
        type: String,
        
        unique: true,
    },
    date: {
        type: Date, 
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);
User.createCollection();










app.post('/register', (req, res) => {
    try {
        const user = new User({ firstname: 'small' });
        user.save();
        res.send("Something Went Good");
 
    } catch (e) {
        res.send("Something Went Wrong");
    }
});
app.listen(8000);
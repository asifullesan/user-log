const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose =  require('mongoose');




// routs
const userRoutes = require('./routes/user');



// flipcart-e-commerce
// fiEex5usxhWExJ9a

// environment variable
env.config();


// mongodb connection
// mongodb+srv://<username>:<password>@cluster0.mfooq.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONDO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.mfooq.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    ).then(() => {
        console.log('database connected')
    });


app.use(bodyParser());
app.use('/api', userRoutes);





app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})
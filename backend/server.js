const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require("./config/database")

// config 
dotenv.config({path:"config/config.env"});

// connecting to database
connectDataBase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})
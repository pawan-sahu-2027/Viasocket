import express from 'express';
import dotenv from 'dotenv'; 
import mongoose, { connect } from 'mongoose'; 
import cors from 'cors';     
import userRoute from './routes/user.route.js';      
dotenv.config();
const app = express()
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
app.use(cors());
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// DB connection would be here
try{
  mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
  console.log("DB connected successfully");
}
catch(err){
  console.log("DB connection error", err);
}

app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

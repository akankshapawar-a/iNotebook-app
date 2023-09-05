const mongoose=require('mongoose');

const mongoURI="mongodb://127.0.0.1:27017/"

const connectToMongo=async()=>{
    try{
       await mongoose.connect(mongoURI,{

       useNewUrlParser: true,
      useUnifiedTopology: true,
  

    });
    console.log("Connection Successfully");

}
catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
module.exports=connectToMongo;
import mongoose from "mongoose";

mongoose
  .connect( "mongodb+srv://francisgonzales:P5jWovXvF9qPaC8b@deliveryapp.p7zut4u.mongodb.net/?retryWrites=true&w=majority&appName=DeliveryApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDb Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

 


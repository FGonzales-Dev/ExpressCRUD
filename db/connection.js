import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://francisgonzales:9Wk2zxPX61y4cILd@socialapp.jwtle.mongodb.net/?retryWrites=true&w=majority&appName=SocialApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDb Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

 


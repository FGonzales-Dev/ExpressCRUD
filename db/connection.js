import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://francisgonzales:48DE73GMnWeMkXJ3@socialapp.jwtle.mongodb.net/?retryWrites=true&w=majority&appName=SocialApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDb Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

 


const mongoose = require("mongoose");


mongoose
  .connect(
    "mongodb+srv://"+ process.env.DB_USER_PASS +"@cluster0.uoqhzdt.mongodb.net/test",

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: false,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

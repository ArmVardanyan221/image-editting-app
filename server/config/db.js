import mongoose from "mongoose"
import "dotenv/config"

const dbConnect = async () => {
  mongoose.connect(process.env.DB_URL)
    .then((result) => {
      console.log("DB Connected");  
    })
    .catch((err) => console.log(err));
};

dbConnect() 

export default mongoose;

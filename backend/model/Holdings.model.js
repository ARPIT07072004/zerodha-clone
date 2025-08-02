import { Schema } from "mongoose";
import { model} from "mongoose";

const holdingsSchema = new Schema({
    name: String,
    price: Number,
  
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
  });
  
  export default model("holdings", holdingsSchema);
  
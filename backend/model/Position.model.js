import { Schema ,model} from "mongoose";

const positionSchema = new Schema({
        name: String,
        price: Number,
        qty: Number,
        product: String,
        day: String,
        avg: Number,
        net: String,
        isLoss: Boolean, //loss
    });
    
    export default model("position", positionSchema);
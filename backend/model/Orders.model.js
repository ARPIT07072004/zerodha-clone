import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  mode: {
    type: String,
    required: true,
    enum: ["Buy", "Sell"], // Optional: restrict values
  },
});

export default mongoose.model("orders", ordersSchema);

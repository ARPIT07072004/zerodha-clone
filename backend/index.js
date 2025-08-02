import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./connectDb.js";
import HoldingsModel from "./model/Holdings.model.js";
import PosMod from "./model/Position.model.js";
import OrderModel from "./model/Orders.model.js";
import authRoute from "./routes/AuthRoute.js";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/",authRoute);
// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/addPositions", async(req, res) => {
  const temp= [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
];
   await PosMod.insertMany(temp);
  res.status(200).json({ success: true, message: "Positions added" });
})
app.get("/allHoldings", async(req, res) => {
  
  const holdings = await HoldingsModel.find();
  res.send(holdings);
});
app.get("/allPositions", async(req, res) => {
  
  const positions = await PosMod.find();
  res.status(200).json({ success: true, positions ,message: "Positions displayed " });
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    
    // Basic validation (optional)
    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const newOrder = new OrderModel({ name, qty, price, mode });
    await newOrder.save();
    
    res.status(200).json({ success: true, message: "Order placed" });
  } catch (err) {
    console.error("❌ Error placing order:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
app.get("/getOrders", async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.status(200).json({ success: true, orders });
  } catch (err) {
    console.error("❌ Error fetching orders:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Start server after DB connection
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  try {
    await connectDb();
    console.log(`✅ Server running on http://localhost:${PORT}`);
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1); // Exit the app if DB fails
  }

});

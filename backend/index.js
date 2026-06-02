require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {HoldingsModel} = require('./model/HoldingsModel.js');
const {PositionsModels} = require("./model/PositionsModels.js") 
const {OrdersModel} = require("./model/OrdersModel.js");
const app = express();
app.use(express.json());
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log("🚀 Server ready");
});
// DB FIRST, then server
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ Atlas Connected!");
    
    // Create model AFTER connection
    const PositionsModel = mongoose.model("Positions", new mongoose.Schema({
      product: String, name: String, qty: Number, avg: Number, 
      price: Number, net: String, day: String, isLoss: Boolean
    }));

    app.get("/allHoldings",async(req,res)=>{
      let allHoldings = await HoldingsModel.find({});
      res.json(allHoldings);
    });
    app.get("/allPositions",async(req,res)=>{
      let allPositions = await PositionsModel.find({});
      res.json(allPositions);
    });

    app.post("/newOrder", async(req,res) => {
      let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
      });
      newOrder.save();

      res.send("Order saved!");
    });
    
    
    //Add positions route
    // app.get("/addPositions", async (req, res) => {
    //   await PositionsModel.create([
    //     {product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true},
    //     {product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true}
    //   ]);
    //   res.json({message: "✅ SAVED TO ATLAS!"});
    // });
    
  })
  .catch(err => console.log("❌ Error:", err));
// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   tls: true,
//   tlsAllowInvalidCertificates: true,
//   family: 4
// })
// .then(() => {
//   console.log("✅ Atlas Connected!");
  
//   const PositionsModel = mongoose.model("Positions", new mongoose.Schema({
//     product: String, name: String, qty: Number, avg: Number, 
//     price: Number, net: String, day: String, isLoss: Boolean
//   }));

//   // ✅ FIXED: Comment out HoldingsModel (doesn't exist yet)
//   // app.get("/allHoldings", async (req, res) => {
//   //   let allHoldings = await HoldingsModel.find({});
//   //   res.json(allHoldings);
//   // });

//   // ✅ WORKING: Positions endpoint (your data exists here)
//   app.get("/allPositions", async (req, res) => {
//     let allPositions = await PositionsModel.find({});
//     res.json(allPositions);
//   });
  
//   app.listen(3002, () => console.log("🚀 Server ready"));
// })
// .catch(err => console.log("❌ Error:", err.message));

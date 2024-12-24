import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
// deployment
import path from "path";

dotenv.config();
const app = express();
const __dirname = path.resolve();
app.use(express.json()); //allows us to accept json data in req.body
app.use("/api/products", productRoutes);

// app.get("/", (req, res) => {
//   res.send("server is ready ");
// });
// app.post("/api/products", async (req, res) => {
//   const product = req.body; //user body sending
//   if (!product.name || !product.price || !product.image) {
//     return res
//       .status(400)
//       .json({ success: false, message: "please provide all fields" });
//   } else {
//     const newProduct = new Product(product);
//     try {
//       await newProduct.save();
//       res.status(201).json({ success: true, data: newProduct });
//     } catch (error) {
//       console.error("error in create producte :", error.message);
//       res.status(500).json({ success: false, message: "server Error" });
//     }
//   }
// });

// delete end point
// app.delete("/api/products/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     await Product.findByIdAndDelete(id);
//     res.status(200).json({ success: true, message: "product delete" });
//   } catch (error) {
//     res.status(404).json({ success: false, message: "product not found" });
//   }
// });

// get endpoint
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json({ success: true, date: products });
//   } catch (error) {
//     console.log("error in fetching products:", error.message);
//     res.status(500).json({ success: false, message: "server eroor" });
//   }
// });
// put endpoinyt
// app.put("/api/products/:id", async (req, res) => {
//   const { id } = req.params;
//   const product = req.body;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res
//       .status(404)
//       .json({ success: false, message: "invalid product ID" });
//   }
//   try {
//     const updtaeProduct = await Product.findByIdAndUpdate(id, product, {
//       new: true,
//     });
//     res.status(200).json({ success: true, data: updtaeProduct });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "server faild " });
//   }
// });
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  connectDB();
  console.log("server started at http://localhost:" + PORT);
});

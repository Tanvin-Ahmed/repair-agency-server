const express = require("express");
const cors = require("cors");
require("dotenv").config();
const Mongodb = require("mongodb");
const fileUpload = require("express-fileupload");
const paymentRoutes = require("./src/routes/paymentRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const serviceRoutes = require("./src/routes/serviceRoutes");
const reviewRoutes = require("./src/routes/reviewRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("doctors"));
app.use(fileUpload());

// conncet mongodb
require("./src/db/db")();

app.use("/payment", paymentRoutes);
app.use("/admin", adminRoutes);
app.use("/category", categoryRoutes);
app.use("/order", orderRoutes);
app.use("/service", serviceRoutes);
app.use("/review", reviewRoutes);

const MongoClient = Mongodb.MongoClient;
const ObjectID = Mongodb.ObjectID;

app.get("/", (req, res) => {
  res.send(`<h1>Node Js</h1>`);
});

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zhub4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect((err) => {
//   console.log(err);
//   const adminCollection = client
//     .db(`${process.env.DB_NAME}`)
//     .collection(`${process.env.DB_ADMIN_COLLECTION}`);
//   const serviceCollection = client
//     .db(`${process.env.DB_NAME}`)
//     .collection(`${process.env.DB_SERVICE_COLLECTION}`);
//   const orderCollection = client
//     .db(`${process.env.DB_NAME}`)
//     .collection(`${process.env.DB_ORDER_COLLECTION}`);
//   const reviewCollection = client
//     .db(`${process.env.DB_NAME}`)
//     .collection(`${process.env.DB_REVIEW_COLLECTION}`);
//   const categoryCollection = client
//     .db(`${process.env.DB_NAME}`)
//     .collection(`${process.env.DB_CATEGORY_COLLECTION}`);

//   //////////////Post////////////

//   // admin
//   app.post("/setAdmin", (req, res) => {
//     const adminEmail = req.body.newAdmin;
//     adminCollection
//       .insertOne({ adminEmail })
//       .then((result) => {
//         res.status(201).send(result.insertedCount > 0);
//       })
//       .catch((err) => {
//         res.status(500).send(err);
//       });
//   });

//   // add category and service
//   app.post("/addService", (req, res) => {
//     const file = req.files.file;
//     const category = req.body.category;
//     const newCategory = req.body.newCategory;
//     const serviceName = req.body.serviceName;
//     const description = req.body.description;
//     const fee = req.body.fee;

//     const newImg = file.data;
//     const encImg = newImg.toString("base64");
//     const image = {
//       contentType: file.mimetype,
//       size: file.size,
//       img: Buffer.from(encImg, "base64"),
//     };

//     if (newCategory) {
//       categoryCollection
//         .insertOne({ category: newCategory, image })
//         .then((result) => {
//           res.status(201).send(result.insertedCount > 0);
//         })
//         .catch((err) => {
//           res.status(500).send(err);
//         });
//     }

//     serviceCollection
//       .insertOne({
//         category: category || newCategory,
//         serviceName,
//         description,
//         fee,
//         image,
//       })
//       .then((result) => {
//         res.status(201).send(result.insertedCount > 0);
//       })
//       .catch((err) => {
//         res.status(500).send(err);
//       });
//   });

//   app.post("/placeOrder", (req, res) => {
//     const newOrder = req.body;
//     orderCollection
//       .insertOne(newOrder)
//       .then((result) => res.status(201).send(result.insertedCount > 0))
//       .catch((err) => res.status(500).send(err));
//   });

//   app.post("/addReview", (req, res) => {
//     const review = req.body.newReview;
//     reviewCollection
//       .insertOne(review)
//       .then((result) => {
//         res.status(201).send(result.insertedCount > 0);
//       })
//       .catch((err) => res.status(500).send(err));
//   });

//   //////////////////////get////////////////////////////////

//   // getAllCategory
//   app.get("/getAllCategory", (req, res) => {
//     categoryCollection.find({}).toArray((err, category) => {
//       if (err) {
//         res.status(404).send(err);
//       } else {
//         res.status(200).send(category);
//       }
//     });
//   });
//   // get category wise service item
//   app.get("/serviceItem/:category", (req, res) => {
//     const category = req.params.category;
//     serviceCollection.find({ category }).toArray((err, items) => {
//       if (err) {
//         res.status(404).send(err);
//       } else {
//         res.status(200).send(items);
//       }
//     });
//   });

//   app.get("/getAllReview", (req, res) => {
//     reviewCollection.find({}).toArray((err, reviews) => {
//       if (err) {
//         res.status(404).send(err);
//       } else {
//         res.status(200).send(reviews);
//       }
//     });
//   });

//   app.get("/isAdmin/:email", (req, res) => {
//     const email = req.params.email;
//     adminCollection.find({ adminEmail: email }).toArray((err, results) => {
//       if (err) {
//         res.status(404).send(err);
//       } else {
//         res.status(200).send(results.length > 0);
//       }
//     });
//   });

//   app.get("/userOrderList/:email", (req, res) => {
//     const email = req.params.email;
//     if (email) {
//       orderCollection.find({ email }).toArray((err, orders) => {
//         if (err) {
//           res.status(404).send(err);
//         } else {
//           res.status(200).send(orders);
//         }
//       });
//     }
//   });

//   app.get("/getFullOrderList", (req, res) => {
//     orderCollection.find({}).toArray((err, orders) => {
//       if (err) {
//         res.status(404).send(err);
//       } else {
//         res.status(200).send(orders);
//       }
//     });
//   });

//   app.get("/service/:id", (req, res) => {
//     serviceCollection
//       .find({ _id: ObjectID(req.params.id) })
//       .toArray((err, service) => {
//         if (err) {
//           res.status(404).send(err);
//         } else {
//           res.status(200).send(service[0]);
//         }
//       });
//   });

//   ///////////////// delete /////////////

//   app.delete("/deleteServiceItem/:id", (req, res) => {
//     const id = req.params.id;
//     serviceCollection
//       .deleteOne({ _id: ObjectID(id) })
//       .then((result) => {
//         res.status(200).send(result.deletedCount > 0);
//       })
//       .catch((err) => {
//         res.status(404).send(err);
//       });
//   });

//   //  delete full category
//   app.delete("/deleteCategory", (req, res) => {
//     const category = req.body.category;

//     serviceCollection
//       .deleteMany({ category })
//       .then((result) => {
//         categoryCollection
//           .deleteOne({ category })
//           .then((result) => {
//             res.status(200).send(result);
//           })
//           .catch((err) => {
//             res.status(404).send(err);
//           });
//       })
//       .catch((err) => {
//         res.status(404).send(err);
//       });
//   });

//   /////////////// update /////////////////////////
//   app.patch("/updateService/:id", (req, res) => {
//     serviceCollection
//       .updateOne(
//         { _id: ObjectID(req.params.id) },
//         {
//           $set: {
//             serviceName: req.body.serviceName,
//             description: req.body.description,
//             fee: req.body.fee,
//           },
//         }
//       )
//       .then((result) => {
//         res.status(200).send(result.modifiedCount > 0);
//       })
//       .catch((err) => {
//         res.status(404).send(err);
//       });
//   });

//   app.patch("/updateStatus/:id", (req, res) => {
//     orderCollection
//       .updateOne(
//         { _id: ObjectID(req.params.id) },
//         {
//           $set: { status: req.body.value },
//         }
//       )
//       .then((result) => {
//         res.status(200).send(result.modifiedCount > 0);
//       })
//       .catch((err) => res.status(404).send(err));
//   });
// });

app.listen(process.env.PORT || 5000, () => {
  console.log("server running");
});

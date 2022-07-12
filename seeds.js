
const mongoose = require("mongoose");

const Product = require('./modals/products');

mongoose.connect("mongodb://localhost:27017/farmStand", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log("Mongo connections good");
})
.catch(err => {
    console.log("Mongo Error");
    console.log(err);
})

const p = new Product({
    name: 'cheese',
    price: 3.99,
    category: 'dairy'
})
p.save()
.then(p => {
    console.log(p);
})
.catch(e => {
    console.log(e);
})
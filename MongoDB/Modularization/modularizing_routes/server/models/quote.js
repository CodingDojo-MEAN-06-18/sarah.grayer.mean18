const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
    date:{type: Date, default: Date.now}
  },
  quote: {
    type: String,
    required: true
  }
},
{timestamps: true});

mongoose.model("Quote", quoteSchema);
const Quote = mongoose.model('quotes', quoteSchema);//set up model, set quoteSchema in models as 'quotes'

module.exports = mongoose.model("Quote");

import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a book title"],
  },

  author: {
    type: String,
    required: [true, "Please add an author name"],
  },

  price: {
    type: Number,
    required: [true, "Please add a valid price"],
  },

  description: {
    type: String,
    require:[true, "please add a description"]
  },
  coverImage:{
    type: String,
    required: false
  },
  downloadLink:{
    type: String,
    required: false
  },
},{
    timestamps:true
});

const Book = mongoose.model("Book", bookSchema)

export default Book
import Book from "../modules/book.module.js"
 
export const getBook =  async(req, res) =>{
  try {
    const books = await Book.find().sort({createdAt:-1})
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
} 

export const getBookById = async(req, res) => {
    try {
    const book = await Book.findById(req.params.id)

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        })
    }

    res.status(200).json(book)

} catch (error) {
    res.status(500).json({
        message: error.message
    })
}
}

export const createBook = async(req, res) => {
    try {
       // Get book data from the request
const { title, author, price, description, coverImage, downloadLink } = req.body;

// Check if all fields are filled
if (!title || !author || !price || !description) {
    return res.status(400).json({
        message: "All fields are required"
    });
}
// create a book
const book = await Book.create({
    title,
    author,
    price,
    description,
    coverImage,
    downloadLink
});

res.status(201).json(book);
    } catch (error) {
        res.status(500).json({
        message: error.message
    });
    }
}

export const updateBook = (req, res) => {
    res.send("update  Book")
}

export const deleteBook = (req, res) => {
    res.send("delete  Book by id")
}
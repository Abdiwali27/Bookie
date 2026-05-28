export const getBook = (req, res) =>{
    res.send("All Books")
} 

export const getBookById = (req, res) => {
    res.send("Get single book")
}

export const createBook = (req, res) => {
    res.send("Create New Book")
}

export const updateBook = (req, res) => {
    res.send("update  Book")
}

export const deleteBook = (req, res) => {
    res.send("delete  Book by id")
}
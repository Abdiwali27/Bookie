import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, deleteBook } from "../redux/API/bookSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import Modal from "../components/Modal";
import toast from "react-hot-toast";
 

const Home = () => {
  const dispatch = useDispatch();

  const { books, isLoading, isError, message } = useSelector((state) => state.books);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

  const openDeleteModal=(book)=>{
    setBookToDelete(book);
    setDeleteModalOpen(true)
  }

  useEffect(() => {
     if(isError){
      console.log(message)
     }
     dispatch(fetchBooks())
  }, [dispatch, isError, message]);

  const confirmDelete = async () => {
  if (bookToDelete) {
    const resultAction = await dispatch(deleteBook(bookToDelete._id));

    if (deleteBook.fulfilled.match(resultAction)) {
      toast.success("Book deleted successfully");
    } else {
      toast.error("Failed to delete book");
    }

    setDeleteModalOpen(false);
    setBookToDelete(null);
  }
};

  return (
   <div className="">
  {books.length === 0 ? (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center ">
      <div className="bg-gray-50 p-4 rounded-full mb-4">
      </div>

      <h3 className="text-3xl font-bold text-gray-900 mb-2">
        No Books Found
      </h3>

      <p className="text-gray-500 max-w-md mb-6">
        We couldn't find any books, the books library is currently empty
      </p>

      <Link to="/add-book" className="btn btn-primary">
        Add Your First Book
      </Link>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {books.map((book) => (
    <div key={book._id}>
      <BookCard onDeleteClick={openDeleteModal} book={book} />
    </div>
  ))}
</div>
  )}

  <Modal 
  isOpen={deleteModalOpen}
  onClose={()=>setDeleteModalOpen(false)}
  title="Confirm Delete"
  >
   <div>
  <p>
  Are you sure you want to delete{" "}
  <span>{bookToDelete?.title}</span>?
  This action cannot be undone.
</p>

  <div className="flex justify-end gap-3">
    <button onClick={()=>setDeleteModalOpen(false)} className="btn btn-secondary">
      Cancel
    </button>

    <button onClick={confirmDelete} className="btn btn-danger">
      Delete Book
    </button>
  </div>
</div>
  </Modal>
</div>
  );
};

export default Home;
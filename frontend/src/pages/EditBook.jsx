 import { Link, useParams, useNavigate } from "react-router-dom"
  import BookFrom from "../components/BookFrom"
 import { ArrowLeft } from "lucide-react"
 import { useSelector, useDispatch } from "react-redux"
 import { fetchBook, clearCurrentBook, updateBook } from "../Redux/API/bookSlice"
 import { useEffect } from "react"
 import {toast} from 'react-hot-toast'

const editBook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {id} = useParams()
  const {isLoading, currentBook, isError, message} = useSelector((state)=>state.books)

  useEffect(() => {
  if (id) {
    dispatch(fetchBook(id));
  }

  return () => {
    dispatch(clearCurrentBook());
  };
}, [id, dispatch]);
useEffect(() => {
  if (isError && !currentBook) {
    toast(message || "Failed to load a book");
    navigate("/");
  }
}, [isError, currentBook, message, navigate]);
console.log(currentBook)

  const handleSubmit = async (bookData) => {
  const resultAction = await dispatch(updateBook({ id, bookData }));

  if (updateBook.fulfilled.match(resultAction)) {
    toast.success("Book updated successfully");
    navigate("/");
  } else {
    toast.error(resultAction.payload || "Failed to update book");
  }
  };
  // console.log(currentBook)
  return (
    <div className="max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
  <div className="mb-6">
    <Link
      className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors"
      to="/"
    >
      <ArrowLeft size={16} className="mr-1" />
      Back to List
    </Link>
  </div>

  <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
  <h1 className="text-2xl font-bold text-gray-900 mb-6">
    EditN Book
  </h1>
   <BookFrom initialData={currentBook} onSubmit={handleSubmit} isLoading={isLoading}/>
</div>
</div>
  )
}

export default editBook

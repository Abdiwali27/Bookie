import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/API/bookSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
 

const Home = () => {
  const dispatch = useDispatch();

  const { books, isLoading, isError, message } = useSelector((state) => state.books);

  useEffect(() => {
     if(isError){
      console.log(message)
     }
     dispatch(fetchBooks())
  }, [dispatch, isError, message]);

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
    <div className="grid grid-cols-1 sm:gride-cols-2 lg:grid-cols-3 xl:grid-4 gap-6">
      { 
        books.map((book)=>(<div>
           <BookCard key={book._id} book={book}/>
        </div>))
      }
    </div>
  )}
</div>
  );
};

export default Home;
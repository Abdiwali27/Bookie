import { Download } from "lucide-react";
import { useState } from "react";
const BookFrom = ({onSubmit, isLoading}) => {
  const [formData, setFormData] = useState({
    title:"",
    author:"",
    price:'',
    description:'',
    coverImage:'',
    Download: ''
  })
  const handleChange = (e) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};
const handleSubmit=(e)=>{
e.preventDefault();
onSubmit({
  ...formData, price:Number(formData.price)
})
}
  console.log(formData)
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Book Title
        </label>

        <input
          type="text"
          id="title"
          name="title"
          required
          value={formData.title}
          className="input-field"
          placeholder="Enter Book Title"
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="Author"
          className="block text-sm font-medium text-gray-700"
        >
          Author Name
        </label>

        <input
          type="text"
          id="author"
          name="author"
          required
           value={formData.author}
          className="input-field"
          placeholder="Enter Author Name"
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="Price"
          className="block text-sm font-medium text-gray-700"
        >
          Price ($)
        </label>

        <input
          type="Number"
          id="Price"
          name="price"
          min="0"
          step={0.01}
          required
          value={formData.price}
          className="input-field"
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="Description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>

        <textarea
          type="Number"
          id="Description"
          name="description"
          rows="4"
          required
           value={formData.description}
          className="input-field"
          placeholder="Enter Description"
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="coverImage"
          className="block text-sm font-medium text-gray-700"
        >
          coverImage (Optional)
        </label>

        <input
          type="url"
          id="coverImage"
          name="coverImage"
           value={formData.coverImage}
          className="input-field"
          placeholder="https://example.com/image.png"
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="DownloadLink"
          className="block text-sm font-medium text-gray-700"
        >
          DownloadLink (Optional)
        </label>

        <input
          type="url"
          id="DownloadLink"
          name="downloadLink"
           value={formData.downloadLink}
          className="input-field"
          placeholder="https://example.com/book.pdf"
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary w-full sm:w-auto min-w-[120px">
          Add Book
        </button>
      </div>
    </form>
  );
};

export default BookFrom;

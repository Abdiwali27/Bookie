const BookFrom = () => {
  return (
    <form className="space-y-5">
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
          value=""
          className="input-field"
          placeholder="Enter Book Title"
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
          id="Author"
          name="Author"
          required
          value=""
          className="input-field"
          placeholder="Enter Author Name"
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
          name="Price"
          min="0"
          step={0.01}
          required
          value=""
          className="input-field"
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
          name="Description"
          rows="4"
          required
          value=""
          className="input-field"
          placeholder="Enter Description"
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
          value=""
          className="input-field"
          placeholder="https://example.com/image.png"
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
          name="DownloadLink"
          value=""
          className="input-field"
          placeholder="https://example.com/book.pdf"
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

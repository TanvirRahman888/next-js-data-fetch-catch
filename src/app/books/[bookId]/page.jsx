import { error } from 'next/dist/build/output/log';
import React from 'react';

const BookDetails = async({params}) => {
    const {bookId}= await params
    const res = await fetch(`http://localhost:3001/books/${bookId}`)
    const book=await res.json();
    if(!res.ok){
        throw new Error("Failed to fetch book");

    }
    return (
            <div className="container mx-auto p-6">

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

        {/* Book Image */}
        <div>
          <img
            src={book.image}
            alt={book.name}
            className="h-[500px] w-full rounded-lg object-cover"
          />
        </div>

        {/* Book Details */}
        <div className="flex flex-col">

          <p className="mb-2 text-sm text-gray-500">
            {book.category}
          </p>

          <h1 className="mb-3 text-4xl font-bold">
            {book.name}
          </h1>

          <p className="mb-4 text-lg text-gray-600">
            By {book.author}
          </p>

          <div className="mb-5 flex gap-6">
            <p className="text-2xl font-bold">
              ${book.price}
            </p>

            <p className="text-lg">
              ⭐ {book.rating}
            </p>
          </div>

          <p className="mb-6 text-gray-700">
            {book.long_description}
          </p>

          {/* Book Information */}
          <div className="mb-6 space-y-2 rounded-lg bg-gray-100 p-5">

            <p>
              <strong>Publication Year:</strong>{" "}
              {book.publication_year}
            </p>

            <p>
              <strong>Pages:</strong>{" "}
              {book.pages}
            </p>

            <p>
              <strong>ISBN:</strong>{" "}
              {book.isbn}
            </p>

            <p>
              <strong>Stock:</strong>{" "}
              {book.stock}
            </p>

          </div>

          {/* Button */}
          <button className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default BookDetails;
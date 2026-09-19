import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-white shadow">

      <Image
        src={book.image}
        alt={book.name}
        width={300}
        height={400}
        unoptimized
        className="h-64 w-full object-cover"
      />

      <div className="flex flex-1 flex-col p-5">

        <h2 className="mb-1 text-xl font-bold">
          {book.name}
        </h2>

        <p className="mb-2 text-sm text-gray-600">
          By {book.author}
        </p>

        <p className="mb-3 text-sm text-gray-500">
          {book.category}
        </p>

        <p className="text-sm text-gray-600">
          {book.short_description}
        </p>

        <div className="mt-auto">

          <div className="mb-3 flex items-center justify-between">
            <p className="text-xl font-bold">
              ${book.price}
            </p>

            <p className="text-sm">
              ⭐ {book.rating}
            </p>
          </div>

          <Link href={`books/${book.id}`}>
          <button className="w-full rounded bg-black px-4 py-2 text-white">
            Show Details
          </button>

          </Link>
        </div>

      </div>
    </div>
  );
};

export default BookCard;
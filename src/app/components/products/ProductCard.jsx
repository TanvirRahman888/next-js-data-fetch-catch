import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="flex max-w-md flex-col overflow-hidden rounded-lg border bg-white shadow">

      {/* Image */}
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        className="h-60 w-full object-cover"
      />

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 gap-2">

        <h2 className="mb-2 text-xl font-bold">
          {product.name}
        </h2>

        <p className="text-sm text-gray-600">
          {product.short_description}
        </p>

        {/* Always at bottom */}
        <div className="mt-auto flex items-center justify-between">
          <p className="text-xl font-bold">
            ${product.price}
          </p>

          <button className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
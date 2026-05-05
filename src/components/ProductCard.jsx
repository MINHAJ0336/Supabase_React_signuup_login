function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />

      <h2 className="font-bold mt-3 text-sm line-clamp-2">
        {product.title}
      </h2>

      <p className="text-green-600 font-bold mt-2">
        ${product.price}
      </p>

      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
import React from "react";

const Modal = ({
  isOpen,
  onClose,
  product,
  cart,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      aria-hidden={!isOpen}
    >
      <div
        className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-xl relative"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full"
          onClick={onClose}
          aria-label="Close"
        >
          ✖
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-64 object-contain mb-4 rounded-md shadow-sm"
          />
          <h2
            id="modal-title"
            className="text-2xl font-bold text-gray-800 text-center"
          >
            {product.title}
          </h2>
          <p
            id="modal-description"
            className="text-gray-600 my-4 text-center text-sm"
          >
            {product.description}
          </p>
          <div className="text-lg font-semibold text-gray-700">
            Price: ${product.price}
          </div>

          {/* Cart Management */}
          {cart[product.id] ? (
            <div className="mt-4 flex justify-center items-center gap-4">
              <button
                onClick={() => handleRemoveFromCart(product)}
                className="text-xl bg-gray-200 text-gray-700 rounded-full px-3 py-1 shadow hover:bg-red-200 hover:text-red-600 transition"
              >
                -
              </button>
              <div className="text-lg font-semibold text-black">
                {cart[product.id]}
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="text-xl bg-gray-200 text-gray-700 rounded-full px-3 py-1 shadow hover:bg-green-200 hover:text-green-600 transition"
              >
                +
              </button>
            </div>
          ) : (
            <div className="mt-4">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                Add to Cart
              </button>
            </div>
          )}

          {/* Close Button */}
          <div className="mt-6">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

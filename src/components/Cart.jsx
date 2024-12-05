const Cart = ({
  isOpen,
  onClose,
  cart,
  data,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  if (!isOpen) return null;

  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const product = data.find((prod) => prod.id === parseInt(id));
    return product ? (
      <div
        key={product.id}
        className="flex items-center justify-between p-4 border-b border-gray-200"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-14 h-14 object-cover rounded-md shadow-md mr-4"
        />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-800">{product.title}</h3>
          <p className="text-xs text-gray-500">
            ${product.price.toFixed(2)} x {qty}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleRemoveFromCart(product)}
            className="text-lg bg-gray-100 text-gray-700 rounded-full px-3 py-1 shadow hover:bg-red-100 hover:text-red-600 transition"
          >
            -
          </button>
          <div className="text-lg font-semibold">{qty}</div>
          <button
            onClick={() => handleAddToCart(product)}
            className="text-lg bg-gray-100 text-gray-700 rounded-full px-3 py-1 shadow hover:bg-green-100 hover:text-green-600 transition"
          >
            +
          </button>
        </div>
      </div>
    ) : null;
  });

  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = data.find((prod) => prod.id === parseInt(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className="bg-white text-gray-800 w-96 p-6 rounded-lg shadow-2xl">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <div className="max-h-64 overflow-y-auto">{cartItems}</div>
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-900">
            Total: ${totalPrice.toFixed(2)}
          </h3>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded text-gray-700 hover:bg-gray-300 hover:text-gray-900 transition shadow"
          >
            Close
          </button>
          <button className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 transition shadow">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

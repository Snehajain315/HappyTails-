import { Package } from "lucide-react";

export default function ProductCard({
  item,
  imageClass = "",
  containerClass = "",
  onAddToCart,
  onAddToWishlist,
  onIncreaseQty,
  onDecreaseQty,
  onRemove,
  showQuantity = false,
  showRemove = false,
  showWishlist = false,
  showOverlayButton = false,
  overlayButtonText,
  overlayButtonLogo,
  onClick,
}) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${containerClass}`} >
      
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.poster}
          alt={item.name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay Button */}
        {showOverlayButton && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="absolute bottom-0 p-4 w-full">
              <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-2 w-full rounded-md font-medium transition duration-300 hover:from-emerald-600 hover:to-teal-500 flex items-center justify-center space-x-2">
                {overlayButtonLogo}
                <span onClick={onClick}>{overlayButtonText}</span>
              </button>
            </div>
          </div>
        )}

        {/* Wishlist Heart */}
        {showWishlist && (
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110">
              <Heart
                size={20}
                className="text-red-500 fill-red-500 cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Remove Button */}
        {showRemove && <div>
          </div>}

        {/* Info Section */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
            {item.name}
          </h2>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {item.description}
          </p>

          {/* Weight info */}
          {item.weight && (
            <div className="flex items-center mb-4 text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
              <Package size={16} className="mr-2 text-purple-500" />
              <span className="font-medium">
                {item.weight.value} {item.weight.unit}
              </span>
            </div>
          )}
           
           {/* Price Info */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ₹{item.price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ₹{Math.round(item.price * 1.2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

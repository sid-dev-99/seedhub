import { ShoppingCart, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartItems } = useCart();
  
  return (
    <nav className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8" />
            <span className="font-bold text-xl">SeedHub</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/shop" className="hover:text-green-200">Shop</Link>
            <Link to="/about" className="hover:text-green-200">About</Link>
            <Link to="/cart" className="relative hover:text-green-200">
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
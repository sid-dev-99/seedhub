import { Plus } from 'lucide-react';
import { Seed } from '../types';
import { useCart } from '../context/CartContext';

interface SeedCardProps {
  seed: Seed;
}

export default function SeedCard({ seed }: SeedCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={seed.image} 
        alt={seed.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{seed.name}</h3>
        <p className="text-gray-600 mt-1">{seed.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-green-600 font-bold">${seed.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(seed)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-1 hover:bg-green-700"
          >
            <Plus className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
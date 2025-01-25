import SeedCard from '../components/SeedCard';
import { seeds } from '../data/seeds';

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Seeds Collection</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {seeds.map(seed => (
          <SeedCard key={seed.id} seed={seed} />
        ))}
      </div>
    </div>
  );
}
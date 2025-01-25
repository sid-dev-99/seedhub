import { Leaf, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About SeedHub</h1>
          <p className="text-xl">Growing a better future, one seed at a time.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, SeedHub began with a simple mission: to provide gardeners with the highest quality seeds while promoting sustainable and organic growing practices.
            </p>
            <p className="text-gray-600">
              We work directly with small farms and seed producers who share our commitment to quality and sustainability. Every seed in our collection is carefully selected and tested to ensure the best possible growing success for our customers.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Leaf className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Sustainability</h3>
              </div>
              <p className="text-gray-600">
                We're committed to sustainable practices in every aspect of our business, from seed sourcing to packaging.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Quality</h3>
              </div>
              <p className="text-gray-600">
                Every seed batch is tested for germination rate and purity before being offered to our customers.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Community</h3>
              </div>
              <p className="text-gray-600">
                We support local farming communities and educational programs to promote sustainable agriculture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Find Homes for Sale & Rent | RealEstatePro",
  description: "Browse real estate listings for sale and rent. Find your dream home with RealEstatePro.",
  keywords: ["real estate", "homes for sale", "rentals", "apartments", "houses"],
  openGraph: {
    title: "Find Homes for Sale & Rent | RealEstatePro",
    description: "Browse real estate listings for sale and rent.",
    url: "https://yourdomain.com",
    images: [{ url: "https://yourdomain.com/og-image.jpg" }],
  },
};

import Image from "next/image";
import { MapPin, Bed, Bath, Square, Star, Heart } from "lucide-react";

export default function Home() {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      beds: 5,
      baths: 4,
      sqft: 3500,
      price: 1250000,
      rating: 4.9,
      type: "For Sale"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      title: "Contemporary Family Home",
      location: "Austin, TX",
      beds: 4,
      baths: 3,
      sqft: 2800,
      price: 750000,
      rating: 4.7,
      type: "For Sale"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      title: "Elegant Townhouse",
      location: "Seattle, WA",
      beds: 3,
      baths: 2,
      sqft: 2200,
      price: 4500,
      rating: 4.8,
      type: "For Rent"
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* ...existing code... */}

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury home hero"
          width={1920}
          height={600}
          className="w-full h-96 sm:h-[500px] object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Find Your Perfect
              <span className="block text-green-300">Dream Home</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Discover exceptional properties for sale and rent. Your journey to the perfect home starts with our curated collection of premium listings.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-4 shadow-2xl max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  placeholder="Enter location, city, or zip code"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
                />
                <select className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700">
                  <option>Any Price</option>
                  <option>Under $500K</option>
                  <option>$500K - $1M</option>
                  <option>$1M+</option>
                </select>
                <button className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors font-semibold">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-200">10,000+</div>
              <div className="text-green-100">Properties Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-200">5,000+</div>
              <div className="text-green-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-200">50+</div>
              <div className="text-green-100">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-200">15+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties that offer exceptional value and stunning features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {property.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded-lg">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{property.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-green-700">
                        ${property.price.toLocaleString()}
                        {property.type === "For Rent" && <span className="text-sm text-gray-500">/month</span>}
                      </span>
                    </div>
                    <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors font-semibold">
              View All Properties
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their perfect property with RealEstatePro. 
            Let our expert team guide you through your real estate journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Search
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-700 transition-colors font-semibold">
              Speak with Agent
            </button>
          </div>
        </div>
      </div>

      {/* ...existing code... */}
    </div>
  );
}
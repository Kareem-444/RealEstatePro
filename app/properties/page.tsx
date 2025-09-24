"use client";

import Image from "next/image";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar, 
  Heart, 
  Share2, 
  Phone, 
  Mail, 
  Star,
  Camera,
  Car,
  Wifi,
  Shield,
  TreePine,
  Waves,
  ChevronLeft,
  ChevronRight,
  // Swimming
} from "lucide-react";
import { useState } from "react";

export default function PropertyDetails() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  // Enhanced property data
  const property = {
    title: "Luxury Villa in Beverly Hills",
    price: 2500000,
    priceType: "sale",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    beds: 5,
    baths: 6,
    sqft: 7000,
    address: "123 Beverly Hills Drive, Beverly Hills, CA 90210",
    yearBuilt: 2018,
    lotSize: "0.75 acres",
    propertyType: "Single Family Home",
    description: "Experience unparalleled luxury in this stunning contemporary villa nestled in the prestigious Beverly Hills. This architectural masterpiece seamlessly blends modern sophistication with timeless elegance, offering breathtaking views and world-class amenities. The open-concept design features soaring ceilings, floor-to-ceiling windows, and premium finishes throughout.",
    features: [
      "Gourmet chef's kitchen with premium appliances",
      "Master suite with private terrace and spa-like bathroom",
      "Wine cellar and tasting room",
      "Home theater with stadium seating",
      "Infinity pool with spa and outdoor kitchen",
      "3-car garage with electric vehicle charging",
      "Smart home automation system",
      "Private gym and yoga studio"
    ],
    amenities: [
      { icon: Car, label: "3-Car Garage" },
      { icon: Waves, label: "Swimming Pool" },
      { icon: Wifi, label: "Smart Home" },
      { icon: Shield, label: "Security System" },
      { icon: TreePine, label: "Landscaped Garden" },
      { icon: Camera, label: "Home Theater" }
    ],
    agent: {
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      phone: "(555) 123-4567",
      email: "sarah@realestatepro.com",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=150&q=80",
      rating: 4.9,
      sales: 247
    },
    neighborhood: {
      walkScore: 85,
      transitScore: 72,
      schools: "9/10",
      crime: "Very Low"
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* ...existing code... */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  width={1200}
                  height={600}
                  className="w-full h-96 object-cover"
                  priority
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  For Sale
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 relative ${index === currentImageIndex ? 'ring-2 ring-green-500' : ''} rounded-lg overflow-hidden`}
                    >
                      <Image
                        src={image}
                        alt={`Property ${index + 1}`}
                        width={100}
                        height={80}
                        className="w-20 h-16 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{property.address}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-700">
                    ${property.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    ${Math.round(property.price / property.sqft)} per sqft
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-green-50 rounded-xl">
                <div className="text-center">
                  <Bed className="w-6 h-6 text-green-700 mx-auto mb-1" />
                  <div className="font-semibold">{property.beds}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="w-6 h-6 text-green-700 mx-auto mb-1" />
                  <div className="font-semibold">{property.baths}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Square className="w-6 h-6 text-green-700 mx-auto mb-1" />
                  <div className="font-semibold">{property.sqft.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
                <div className="text-center">
                  <Calendar className="w-6 h-6 text-green-700 mx-auto mb-1" />
                  <div className="font-semibold">{property.yearBuilt}</div>
                  <div className="text-sm text-gray-600">Year Built</div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                <div>
                  <span className="text-gray-600">Property Type:</span>
                  <span className="ml-2 font-semibold">{property.propertyType}</span>
                </div>
                <div>
                  <span className="text-gray-600">Lot Size:</span>
                  <span className="ml-2 font-semibold">{property.lotSize}</span>
                </div>
                <div>
                  <span className="text-gray-600">Year Built:</span>
                  <span className="ml-2 font-semibold">{property.yearBuilt}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <amenity.icon className="w-5 h-5 text-green-700 mr-2" />
                      <span className="text-sm text-gray-700">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Neighborhood Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Neighborhood</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">{property.neighborhood.walkScore}</div>
                  <div className="text-sm text-gray-600">Walk Score</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">{property.neighborhood.transitScore}</div>
                  <div className="text-sm text-gray-600">Transit Score</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">{property.neighborhood.schools}</div>
                  <div className="text-sm text-gray-600">School Rating</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">A+</div>
                  <div className="text-sm text-gray-600">Safety Grade</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Agent */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <Image
                  src={property.agent.image}
                  alt={property.agent.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mx-auto mb-3"
                />
                <h3 className="text-xl font-semibold text-gray-900">{property.agent.name}</h3>
                <p className="text-green-700 font-medium">{property.agent.title}</p>
                <div className="flex items-center justify-center mt-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{property.agent.rating}</span>
                  <span className="ml-2 text-sm text-gray-500">({property.agent.sales} sales)</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full bg-green-700 text-white py-3 px-4 rounded-lg hover:bg-green-800 transition-colors font-semibold flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Call {property.agent.phone}
                </button>
                <button className="w-full border-2 border-green-700 text-green-700 py-3 px-4 rounded-lg hover:bg-green-50 transition-colors font-semibold flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </button>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3 text-gray-900">Schedule a Tour</h4>
                <div className="space-y-3">
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Select Time</option>
                    <option>9:00 AM</option>
                    <option>11:00 AM</option>
                    <option>2:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                  <button className="w-full bg-green-100 text-green-700 py-3 px-4 rounded-lg hover:bg-green-200 transition-colors font-semibold">
                    Schedule Tour
                  </button>
                </div>
              </div>
            </div>

            {/* Mortgage Calculator */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Mortgage Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label>
                  <input
                    type="text"
                    defaultValue={`$${(property.price * 0.8).toLocaleString()}`}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
                  <input
                    type="text"
                    defaultValue="6.5"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Term (Years)</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>30</option>
                    <option>15</option>
                    <option>20</option>
                  </select>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Estimated Monthly Payment</span>
                    <span className="text-xl font-bold text-green-700">$12,847</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
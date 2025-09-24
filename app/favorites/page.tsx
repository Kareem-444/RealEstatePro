
import Image from "next/image";

export default function Favorites() {
  // Sample favorite properties data
  const favoriteProperties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      location: "San Francisco, CA",
      price: "$850,000",
      bedrooms: 2,
      bathrooms: 2,
      sqft: "1,200",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      dateAdded: "3 days ago"
    },
    {
      id: 2,
      title: "Luxury Family Home",
      location: "Austin, TX",
      price: "$1,250,000",
      bedrooms: 4,
      bathrooms: 3,
      sqft: "2,800",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      dateAdded: "1 week ago"
    },
    {
      id: 3,
      title: "Cozy Beach Cottage",
      location: "Malibu, CA",
      price: "$2,100,000",
      bedrooms: 3,
      bathrooms: 2,
      sqft: "1,800",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      dateAdded: "2 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <Image
              src="https://images.unsplash.com/photo-1503389152951-9c3d0e6b8aee?auto=format&fit=crop&w=400&q=80"
              alt="Favorite properties"
              width={120}
              height={120}
              className="object-cover w-24 h-24 rounded-full mx-auto shadow-lg"
            />
            <div className="absolute -top-2 -right-2 bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              {favoriteProperties.length}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-3">Your Favorite Properties</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Keep track of properties you love. Compare, organize, and revisit your top picks anytime.
          </p>
        </div>

        {/* Filter and Sort Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-700">Sort by:</span>
              <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none">
                <option>Recently Added</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Location</option>
              </select>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span>{favoriteProperties.length} saved properties</span>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        {favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow duration-300 group">
                {/* Property Image */}
                <div className="relative">
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 bg-white/90 hover:bg-white text-red-500 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                  <div className="absolute bottom-3 left-3 bg-emerald-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                    Added {property.dateAdded}
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-emerald-700 transition-colors duration-200">
                    {property.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    {property.location}
                  </p>
                  
                  {/* Property Stats */}
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                    <span>{property.bedrooms} bd</span>
                    <span>{property.bathrooms} ba</span>
                    <span>{property.sqft} sqft</span>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-700">
                      {property.price}
                    </span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-sm border border-emerald-600 text-emerald-600 rounded-md hover:bg-emerald-50 transition-colors duration-200">
                        View
                      </button>
                      <button className="px-3 py-1 text-sm bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-200">
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="bg-white rounded-xl shadow-lg p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">No favorites yet</h3>
              <p className="text-slate-600 mb-6">Start browsing properties and save the ones you love to see them here.</p>
              <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200">
                Browse Properties
              </button>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Quick Actions</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors duration-200">
                Compare Properties
              </button>
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200">
                Schedule Viewings
              </button>
              <button className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-200">
                Export List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
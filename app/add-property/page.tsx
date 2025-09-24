
import Image from "next/image";

export default function AddProperty() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Add New Property</h1>
          <p className="text-slate-600">Create a professional property listing</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          {/* Hero Image */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80"
              alt="Property showcase"
              width={800}
              height={280}
              className="object-cover w-full h-64"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <form className="space-y-6">
              {/* Property Title */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Property Title
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 outline-none text-slate-800 placeholder-slate-400"
                  placeholder="Enter property name or title"
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Location
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 outline-none text-slate-800 placeholder-slate-400"
                  placeholder="City, State or Full Address"
                />
              </div>

              {/* Price and Property Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Price
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 outline-none text-slate-800 placeholder-slate-400"
                    placeholder="$000,000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Property Type
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 outline-none text-slate-800 bg-white">
                    <option value="">Select type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
              </div>

              {/* Property Details Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Bedrooms
                  </label>
                  <input 
                    type="number"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 outline-none text-slate-800 placeholder-slate-400"
                    placeholder="3"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Bathrooms
                  </label>
                  <input 
                    type="number"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 outline-none text-slate-800 placeholder-slate-400"
                    placeholder="2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Sq Ft
                  </label>
                  <input 
                    type="number"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 outline-none text-slate-800 placeholder-slate-400"
                    placeholder="1,200"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Property Description
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 outline-none text-slate-800 placeholder-slate-400 resize-none"
                  placeholder="Describe the property features, amenities, and unique selling points..."
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  type="button"
                  className="flex-1 px-6 py-3 border-2 border-emerald-700 text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200"
                >
                  Save as Draft
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white rounded-lg font-semibold hover:from-emerald-800 hover:to-emerald-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Publish Property
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-slate-500 text-sm">
            All fields are required. Your listing will be reviewed before going live.
          </p>
        </div>
      </div>
    </div>
  );
}
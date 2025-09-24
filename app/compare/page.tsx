"use client";

import Image from "next/image";
import { useState } from "react";

export default function Compare() {
  const [selectedProperties, setSelectedProperties] = useState<typeof availableProperties>([]);
  const [showComparison, setShowComparison] = useState(false);

  // Sample properties data
  const availableProperties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      location: "San Francisco, CA",
      price: 850000,
      priceDisplay: "$850,000",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      yearBuilt: 2018,
      parkingSpaces: 1,
      propertyType: "Condo",
      lotSize: "N/A",
      hoa: "$450/month",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      features: ["Hardwood Floors", "Granite Countertops", "City Views", "In-Unit Laundry", "Gym Access"]
    },
    {
      id: 2,
      title: "Luxury Family Home",
      location: "Austin, TX",
      price: 1250000,
      priceDisplay: "$1,250,000",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      yearBuilt: 2020,
      parkingSpaces: 2,
      propertyType: "Single Family",
      lotSize: "0.5 acres",
      hoa: "None",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      features: ["Open Floor Plan", "Chef's Kitchen", "Master Suite", "Swimming Pool", "2-Car Garage"]
    },
    {
      id: 3,
      title: "Cozy Beach Cottage",
      location: "Malibu, CA",
      price: 2100000,
      priceDisplay: "$2,100,000",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      yearBuilt: 1985,
      parkingSpaces: 2,
      propertyType: "Single Family",
      lotSize: "0.25 acres",
      hoa: "None",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      features: ["Ocean Views", "Private Beach Access", "Fireplace", "Deck", "Updated Kitchen"]
    },
    {
      id: 4,
      title: "Urban Penthouse",
      location: "New York, NY",
      price: 3500000,
      priceDisplay: "$3,500,000",
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2200,
      yearBuilt: 2015,
      parkingSpaces: 1,
      propertyType: "Penthouse",
      lotSize: "N/A",
      hoa: "$1,200/month",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      features: ["Private Terrace", "Floor-to-Ceiling Windows", "Doorman", "Rooftop Access", "Wine Cellar"]
    }
  ];

  const toggleProperty = (property: typeof availableProperties[number]) => {
    if (selectedProperties.find(p => p.id === property.id)) {
      setSelectedProperties(selectedProperties.filter(p => p.id !== property.id));
    } else if (selectedProperties.length < 3) {
      setSelectedProperties([...selectedProperties, property]);
    }
  };

  const clearAll = () => {
    setSelectedProperties([]);
    setShowComparison(false);
  };

  const compareProperties = () => {
    if (selectedProperties.length >= 2) {
      setShowComparison(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <Image
              src="https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80"
              alt="Compare properties"
              width={120}
              height={120}
              className="object-cover w-24 h-24 rounded-full mx-auto shadow-lg"
            />
            <div className="absolute -top-2 -right-2 bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              {selectedProperties.length}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-3">Compare Properties</h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Select up to 3 properties to compare features, prices, and specifications side by side.
          </p>
        </div>

        {/* Selection Panel */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-700">
                Selected: {selectedProperties.length}/3 properties
              </span>
              {selectedProperties.length > 0 && (
                <div className="flex gap-2">
                  {selectedProperties.map(property => (
                    <span key={property.id} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                      {property.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-3">
              {selectedProperties.length > 0 && (
                <button 
                  onClick={clearAll}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors duration-200"
                >
                  Clear All
                </button>
              )}
              {selectedProperties.length >= 2 && (
                <button 
                  onClick={compareProperties}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors duration-200"
                >
                  Compare Now
                </button>
              )}
            </div>
          </div>
        </div>

        {!showComparison ? (
          /* Property Selection Grid */
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Available Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {availableProperties.map((property) => {
                const isSelected = selectedProperties.find(p => p.id === property.id);
                const canSelect = selectedProperties.length < 3 || isSelected;
                
                return (
                  <div 
                    key={property.id} 
                    className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                      isSelected ? 'border-emerald-500 ring-4 ring-emerald-100' : 'border-slate-200 hover:border-emerald-300'
                    } ${!canSelect ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => canSelect && toggleProperty(property)}
                  >
                    <div className="relative">
                      <Image
                        src={property.image}
                        alt={property.title}
                        width={400}
                        height={200}
                        className="object-cover w-full h-40"
                      />
                      <div className={`absolute top-3 right-3 w-6 h-6 rounded-full border-2 ${
                        isSelected ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-slate-300'
                      } flex items-center justify-center`}>
                        {isSelected && (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-slate-800 mb-1">{property.title}</h3>
                      <p className="text-slate-600 text-sm mb-2">{property.location}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-emerald-700">{property.priceDisplay}</span>
                        <span className="text-sm text-slate-600">{property.bedrooms}bd • {property.bathrooms}ba</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Comparison Table */
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="p-6 bg-emerald-50 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">Property Comparison</h2>
                <button 
                  onClick={() => setShowComparison(false)}
                  className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg text-sm font-medium hover:bg-emerald-100 transition-colors duration-200"
                >
                  ← Back to Selection
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left p-4 font-semibold text-slate-700 bg-slate-50">Feature</th>
                    {selectedProperties.map(property => (
                      <th key={property.id} className="p-4 text-center min-w-64">
                        <div className="space-y-3">
                          <Image
                            src={property.image}
                            alt={property.title}
                            width={200}
                            height={120}
                            className="object-cover w-full h-24 rounded-lg"
                          />
                          <div>
                            <h3 className="font-bold text-slate-800 text-sm">{property.title}</h3>
                            <p className="text-slate-600 text-xs">{property.location}</p>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Price", key: "priceDisplay" },
                    { label: "Property Type", key: "propertyType" },
                    { label: "Bedrooms", key: "bedrooms" },
                    { label: "Bathrooms", key: "bathrooms" },
                    { label: "Square Feet", key: "sqft", format: (val: number) => val.toLocaleString() + " sqft" },
                    { label: "Year Built", key: "yearBuilt" },
                    { label: "Parking Spaces", key: "parkingSpaces" },
                    { label: "Lot Size", key: "lotSize" },
                    { label: "HOA Fees", key: "hoa" }
                  ].map((row, index) => (
                    <tr key={row.key} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="p-4 font-semibold text-slate-700 bg-slate-100">{row.label}</td>
                      {selectedProperties.map(property => (
                        <td key={property.id} className="p-4 text-center text-slate-800">
                          {row.format && typeof property[row.key as keyof typeof property] === 'number'
                            ? row.format(property[row.key as keyof typeof property] as number)
                            : property[row.key as keyof typeof property]}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-slate-50">
                    <td className="p-4 font-semibold text-slate-700 bg-slate-100">Key Features</td>
                    {selectedProperties.map(property => (
                      <td key={property.id} className="p-4">
                        <ul className="text-sm text-slate-700 space-y-1">
                          {property.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200">
                  Schedule Viewings
                </button>
                <button className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200">
                  Save Comparison
                </button>
                <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors duration-200">
                  Export PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
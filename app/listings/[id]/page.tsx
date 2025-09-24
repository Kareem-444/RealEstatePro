export const metadata = {
  title: "Property Listing | RealEstatePro",
  description: "Details for this property listing. Contact agent to buy or rent.",
  keywords: ["property", "listing", "real estate", "buy", "rent"],
};

import Image from "next/image";

export default function ListingPage({ params }: { params: { id: string } }) {
  // Example property data
  const property = {
    id: params.id,
    title: "Modern 3BR Apartment in Downtown",
    price: "$2,500/mo",
    image: "https://th.bing.com/th/id/OIP.GJrioxpDorNqBathnd_5jQHaE7?w=259&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "Spacious 3 bedroom apartment with city views, close to amenities.",
    address: "123 Main St, Metropolis",
  };

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-lg mb-4">{property.price}</p>
      <Image src={property.image} alt={property.title} width={259} height={180} />
      <p className="mt-4 mb-2">{property.description}</p>
      <p className="text-sm text-gray-500">{property.address}</p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Residence",
            "name": property.title,
            "address": property.address,
            "description": property.description,
            "image": property.image,
            "offers": { "price": property.price }
          })
        }}
      />
    </main>
  );
}

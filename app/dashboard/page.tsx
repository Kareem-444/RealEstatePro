
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
          alt="Dashboard"
          width={400}
          height={200}
          className="object-cover w-full h-40"
        />
        <div className="p-6 w-full">
          <h1 className="text-2xl font-bold mb-2 text-center">Welcome to Your Dashboard</h1>
          <p className="text-gray-600 mb-4 text-center">Manage your properties, favorites, and account settings here.</p>
        </div>
      </div>
    </div>
  );
}

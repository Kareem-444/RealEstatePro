
import Image from "next/image";

export default function BlogPost() {
  // Example post data
  const post = {
    title: "How to Buy Your First Home",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    content: "Buying your first home is a big step. Here are some tips to help you navigate the process and make smart decisions...",
  };
  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        <Image
          src={post.img}
          alt={post.title}
          width={800}
          height={400}
          className="object-cover w-full h-64"
        />
        <div className="p-6 flex-1 flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-4">{post.content}</p>
        </div>
      </div>
    </div>
  );
}

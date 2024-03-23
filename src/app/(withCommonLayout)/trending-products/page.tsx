import { TTrendingProduct } from "@/types";
import { CirclePlus } from "lucide-react";
import Image from "next/image";

const TrendingProductsPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/trending-products", {
    next: {
      revalidate: 30,
    },
  });
  const TrendingProducts = await res.json();
  return (
    <div>
      <h1 className="text-center text-2xl">Here all Trending Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-24 py-10">
        {TrendingProducts.map((data: TTrendingProduct) => (
          <div
            key={data._id}
            className="relative bg-white rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative">
              <Image
                src={data.image}
                alt={data.name}
                height={200}
                width={200}
                className="object-cover w-full h-72"
              />
              <p className="text-sm text-white bg-black px-1 rounded-full absolute top-5 left-5">
                -{data.offer}%
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <h1 className="text-lg font-semibold">{data.name}</h1>
              <div className="flex justify-between items-center mt-5">
                <p className="text-gray-700 text-xl">${data.amount}</p>
                <CirclePlus />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProductsPage;

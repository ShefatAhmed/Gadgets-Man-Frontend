import { TTrendingProduct } from "@/types";
import { ChevronRight, CirclePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TrendingProduct = async () => {
  const res = await fetch("http://localhost:5000/api/v1/trending-products", {
    next: {
      revalidate: 30,
    },
  });
  const TrendingProducts = await res.json();
  return (
    <div>
      <div className="mx-4 md:mx-24 my-24">
        <div className="flex flex-row justify-between items-center mb-8">
          <div className="my-5">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">
              Most Popular Product
            </h1>
            <p>
              You can see here our most popular products. <br /> If you want to
              satisfyed please order <br /> and if you are not please see our all
              products.
            </p>
          </div>
          <Link
            href="/products"
            className="bg-black text-white rounded-full px-4 py-2 flex"
          >
            See All Products <ChevronRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TrendingProducts.slice(0, 6).map((data: TTrendingProduct) => (
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
    </div>
  );
};

export default TrendingProduct;

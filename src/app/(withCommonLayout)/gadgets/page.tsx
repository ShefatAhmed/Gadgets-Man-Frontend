import { TAllProduct } from "@/types";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TProps = { searchParams: { category: string } };

const ALlProductPage = async (props: TProps) => {
  let url = "http://localhost:5000/api/v1/products";
  if (props.searchParams && props.searchParams.category) {
    url += `?category=${props.searchParams.category}`;
  }
  const res = await fetch(url, { cache: "no-store" });
  const productsData = await res.json();
  let title = "Products";
  if (props.searchParams && props.searchParams.category) {
    title = props.searchParams.category;
  }
  return (
    <div>
      <div className="mx-4 md:mx-24 my-24">
        <div>
          <h1 className="text-center my-5 text-2xl font-bold">
            Here Shown All <span className="uppercase">{title}</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {productsData.map((product: TAllProduct) => (
            <div
              key={product._id}
              className="relative bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  height={200}
                  width={200}
                  className="object-cover mx-auto h-96 w-full"
                />
                <p className="text-sm text-white bg-black px-1 rounded-full absolute top-5 left-5">
                  -{product.offer}%
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <h1 className="text-lg font-semibold">{product.name}</h1>
                <div className="flex justify-between items-center mt-5 my-1">
                  <p className="text-gray-700 text-xl">${product.amount}</p>
                  <CirclePlus />
                </div>
                <div className="text-center">
                  <Link
                    href={`/gadgets/${product._id}`}
                    className="underline hover:font-extrabold mt-5"
                  >
                    view detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ALlProductPage;

import { TFlashSale } from "@/types";
import { ChevronRight, CirclePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/api/v1/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <div className="mx-4 md:mx-24 my-24">
      <div className="flex flex-row justify-between items-center mb-8">
        <h1 className="text-xl font-bold mb-4 md:mb-0">Flash Sale</h1>
        <Link href="/flash-sale" className="bg-black text-white rounded-full px-4 py-2 flex">
          View All <ChevronRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.slice(0, 4).map((sale: TFlashSale) => (
          <div
            key={sale._id}
            className="relative bg-white rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative">
              <Image
                src={sale.image}
                alt={sale.name}
                height={200}
                width={200}
                className="object-cover w-full h-72"
              />
              <p className="text-sm text-white bg-black px-1 rounded-full absolute top-5 left-5">
                -{sale.offer}%
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <h1 className="text-lg font-semibold">{sale.name}</h1>
              <div className="flex justify-between items-center mt-5">
                <p className="text-gray-700 text-xl">${sale.amount}</p>
                <CirclePlus />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;

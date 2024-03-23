import { TFlashSale } from "@/types";
import Countdown from "@/utils/Countdown";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
const FlashSalePage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/flash-sale", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="mx-4 md:mx-24 my-24">
      <div>
        <h1 className="text-center my-5 text-2xl font-bold">Flash Sale</h1>
      </div>
      <Countdown />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((sale: TFlashSale) => (
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

export default FlashSalePage;

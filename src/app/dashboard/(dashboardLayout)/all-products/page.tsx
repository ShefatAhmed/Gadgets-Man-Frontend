import { TAllProduct } from "@/types";
import Image from "next/image";

const AllProductsPage = async () => {
  const res = await fetch("https://gadgetsman.vercel.app/api/v1/products", {
    cache: "no-store",
  });
  const products = await res.json();
  return (
    <div>
      <h1 className="uppercase text-center font-bold my-5">
        Here is shown all products
      </h1>
      <div className="overflow-x-auto mx-8 mb-36">
        <table className="table table-compact w-full">
          <thead className="bg-gray-300">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Ratings</th>
            </tr>
          </thead>
          {products.map((product: TAllProduct) => (
            <tbody className="text-center" key={product._id}>
              <tr>
                <td>
                  <Image
                    src={product.image}
                    width={50}
                    height={50}
                    alt={product.name}
                    className="mx-auto"
                  />
                </td>
                <td>{product.name}</td>
                <td className="uppercase">{product.category}</td>
                <td>${product.amount}</td>
                <td>{product.ratings}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllProductsPage;

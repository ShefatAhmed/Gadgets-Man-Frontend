import Image from "next/image";

interface ProductId {
  params: {
    productId: string;
  };
}
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const data = await res.json();
  return data.slice(0, 10).map((product: any) => ({
    productId: product._id,
  }));
};
const ProductDetailPage = async ({ params }: ProductId) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/products/${params.productId}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();
  return (
    <main className="max-w-4xl mx-auto py-8 px-4">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            height={400}
            width={400}
            className="object-cover h-96 mx-auto"
          />
        </div>
        <div className="px-6 py-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold ml-2">
                $ {product.amount}
              </span>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-700">
              Ratings: <span className="font-bold">{product.ratings}</span>
            </span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-700">Product Category:</span>
            <span className="ml-2 font-bold uppercase">{product.category}</span>
          </div>
          <hr />
          <p className="text-gray-700 my-4">{product.description}</p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;

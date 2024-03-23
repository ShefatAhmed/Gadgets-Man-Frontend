import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold">Top Categories</h1>
      <p className="my-2">
        Here are our top product categories. <br /> Click on a category to
        explore more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 py-10">
        <div className="relative border mx-auto flex flex-col items-center justify-center p-10">
          <Link href={`/gadgets/?category=headphone`}>
            <Image
              src="https://www.startech.com.bd/image/cache/catalog/headphone/joyroom/w105-joyful/w105-joyful-02-500x500.jpg"
              alt="headphone"
              width={400}
              height={400}
            />
            <h1 className="text-2xl font-extrabold absolute bottom-0">
              Headphone
            </h1>
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative border mx-auto flex flex-col items-center justify-center p-10">
            <Link href={`/gadgets/?category=fan`}>
              <Image
                src="https://waltonbd.com/image/cache/catalog/fan/rechargeable-fan/w170a-ms-364x364.jpg"
                alt="rechargeable fan"
                width={200}
                height={200}
              />
              <h1 className="text-2xl font-extrabold absolute bottom-0">
                Rechargeable Fan
              </h1>
            </Link>
          </div>
          <div className="relative border mx-auto flex flex-col items-center justify-center p-10">
            <Link href={`/gadgets/?category=powerbank`}>
              <Image
                src="https://www.startech.com.bd/image/cache/catalog/power-bank/xiaomi/pb100dzm/pb100dzm-blue-01-500x500.webp"
                alt="powerbank"
                width={200}
                height={200}
              />
              <h1 className="text-2xl font-extrabold absolute bottom-0">
                Power Bank
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative border mx-auto flex flex-col items-center justify-center p-10">
            <Link href={`/gadgets/?category=gimbal`}>
              <Image
                src="https://www.startech.com.bd/image/cache/catalog/gimbal/zhiyun/smooth-xs/smooth-xs-07-500x500.jpg"
                alt="gimbal"
                width={200}
                height={200}
              />
              <h1 className="text-2xl font-extrabold absolute bottom-0">
                Gimbal
              </h1>
            </Link>
          </div>
          <div className="relative border mx-auto flex flex-col items-center justify-center p-10">
            <Link href={`/gadgets/?category=light`}>
              <Image
                src="https://www.startech.com.bd/image/cache/catalog/gimbal/zhiyun/fiveray-fr100c/zhiyun-fiveray-fr100c-tube-light-combo-01-500x500.webp"
                alt="stick light"
                width={200}
                height={200}
              />
              <h1 className="text-2xl font-extrabold absolute bottom-0">
                Stick Light
              </h1>
            </Link>
          </div>
        </div>
        <div className="relative border mx-auto flex flex-col items-center justify-center p-10">
          <Link href={`/gadgets/?category=blower`}>
            <Image
              src="https://www.startech.com.bd/image/cache/catalog/blower/super-0023-500x500.jpg"
              alt="blower"
              width={400}
              height={400}
            />
            <h1 className="text-2xl font-extrabold absolute bottom-0">
              Electric Blower
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;

import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Image
        src="https://i.postimg.cc/gJQxCrDt/oops-404-error-with-broken-robot-concept-illustration-114360-5529.avif"
        alt="404 Error"
        width={200}
        height={200}
        className="max-w-full h-auto"
      />
      <p className="text-gray-600 text-lg mt-8">
        Oops! The page you&#39;re looking for could not be found.
      </p>
      <Link
        href="/"
        className="mt-4 bg-black text-white font-bold py-2 px-4 rounded inline-block"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;

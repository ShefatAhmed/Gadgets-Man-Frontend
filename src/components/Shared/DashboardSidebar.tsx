import Link from "next/link";
import React from "react";

const DashboardSidebar = () => {
  return (
    <div className="col-span-2 h-screen sticky left-0 top-0 overflow-auto p-4 lg:p-5 flex flex-col bg-gray-300">
      <Link href="/dashboard" className="text-2xl font-extrabold uppercase">
       Dashboard
      </Link>
      <nav className="flex flex-col gap-5 mt-8">
        <Link href="/dashboard/all-products" className="bg-gray-100 rounded-lg p-2 hover:bg-gray-200 font-bold">All Products</Link>
      </nav>
    </div>
  );
};

export default DashboardSidebar;

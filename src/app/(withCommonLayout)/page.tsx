import Categories from "@/components/UI/HomePage/Categories";
import FlashSale from "@/components/UI/HomePage/FlashSale";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import TrendingProduct from "@/components/UI/HomePage/TrendingProduct";

const HomePage = async () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <HeroSection />
      <FlashSale />
      <Categories />
      <TrendingProduct />
    </div>
  );
};

export default HomePage;

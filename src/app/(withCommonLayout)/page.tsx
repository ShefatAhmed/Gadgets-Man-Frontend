import FlashSale from "@/components/UI/HomePage/FlashSale";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import TrendingProduct from "@/components/UI/HomePage/TrendingProduct";

const HomePage = async () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <HeroSection />
      <FlashSale />
      <TrendingProduct />
    </div>
  );
};

export default HomePage;

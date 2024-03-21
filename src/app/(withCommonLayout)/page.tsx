import FlashSale from "@/components/UI/HomePage/HeroSection/FlashSale";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";

const HomePage = async () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <HeroSection />
      <FlashSale />
    </div>
  );
};

export default HomePage;

import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  
  const session = await getServerSession(authOptions)
  return (
    <div>
      <Navbar session={session} />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;

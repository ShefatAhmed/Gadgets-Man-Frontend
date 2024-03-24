import DashboardNavbar from "@/components/Shared/DashboardNavbar";
import DashboardSidebar from "@/components/Shared/DashboardSidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12">
      <DashboardSidebar />
      <div className="col-span-10">
        <DashboardNavbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

import Image from "next/image";
import dashboardData from "./dashboardData";
import SingleDashboard from "./singleDashboard";

const DashboardsSection = () => {
  const dashboardCards = dashboardData.slice(0, 2);

  return (
    <section className="pt-[80px] pb-[40px]">
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl dark:text-white">
          Dashboards
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
  {dashboardCards.map((dashboard) => (
    <div
      key={dashboard.id}
      className="w-full sm:w-[48%] md:w-[48%] lg:w-[45%] xl:w-[45%] px-2"
    >
      <SingleDashboard dashboard={dashboard} />
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default DashboardsSection;

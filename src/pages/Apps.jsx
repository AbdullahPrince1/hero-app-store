import AllAppsCard from "../components/AllAppsCard";
import { useData } from "../hooks/useData";

export default function Apps() {
  const { appData } = useData();
  if (!appData.data) {
    return <h1>Loading...</h1>;
  }
  const allAppsData = appData.data;
  return (
    <>
      <div className="mt-20 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-bold text-5xl text-[#001931]">
            Our All Applications
          </h1>
          <p className="text-xl text-[#627382] mt-4">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-2xl">(9)Apps Found</h2>
          <input
            type="search"
            className="bg-gray-100 rounded w-80 p-2 text-black focus:outline-none"
            placeholder="Search Apps"
          />
        </div>
        <div className="grid grid-cols-4 gap-6 ">
          {allAppsData.map((app) => (
            <AllAppsCard app={app}></AllAppsCard>
          ))}
        </div>
      </div>
    </>
  );
}

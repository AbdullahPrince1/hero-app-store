import { useState } from "react";
import AllAppsCard from "../components/AllAppsCard";
import { useData } from "../hooks/useData";

export default function Apps() {
  const [search, setSearch] = useState("");
  const { appData } = useData();
  if (!appData.data) {
    return <h1>Loading...</h1>;
  }
  const allAppsData = appData.data;
  const searchData = allAppsData.filter((item) =>
    item.title.trim().toLowerCase().includes(search.trim().toLowerCase())
  );
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
          <h2 className="font-semibold text-2xl">
            ({searchData.length})Apps Found
          </h2>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-100 rounded w-80 p-2 text-black focus:outline-none"
            placeholder="Search Apps"
          />
        </div>
        <div className="grid grid-cols-4 gap-6 ">
          {searchData.map((app) => (
            <AllAppsCard key={app.id} app={app}></AllAppsCard>
          ))}
        </div>
      </div>
    </>
  );
}

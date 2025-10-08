import { NavLink } from "react-router";
import { useData } from "../hooks/useData";
import TrendingAppsCard from "./TrendingAppsCard";

export default function TrendingApps() {
  const { appData } = useData();
  if (!appData.data) {
    return <h1>Loading...</h1>;
  }

  const trendingApps = appData.data.slice(0, 8);

  return (
    <>
      <div className="mt-20 max-w-7xl mx-auto flex flex-col ">
        <div className="mb-10">
          <h1 className="text-center font-bold text-5xl">Trending Apps</h1>
          <p className="text-center  text-xl mt-3">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid p-3 grid-cols-2 sm:grid-cols-4 gap-6">
          {trendingApps.map((app) => (
            <TrendingAppsCard key={app.id} app={app} />
          ))}
        </div>
        <div className="flex items-center justify-center">

        <NavLink
          to={"/apps"}
          className="text-center px-4 py-2 seeBtn font-semibold my-10 "
          type="button"
          >
          See All
        </NavLink>
          </div>
      </div>
    </>
  );
}

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
      <div className="mt-20 max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-10">
          <h1 className="text-center font-bold text-5xl">Trending Apps</h1>
          <p className="text-center  text-xl mt-3">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {trendingApps.map((app) => (
            <TrendingAppsCard key={app.id} app={app} />
          ))}
        </div>
        <button
          className="text-center px-4 py-2 bg-blue-300 rounded font-semibold my-10"
          type="button"
        >
          See more
        </button>
      </div>
    </>
  );
}

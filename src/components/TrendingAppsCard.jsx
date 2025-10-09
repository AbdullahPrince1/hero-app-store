import { FaRegStar } from "react-icons/fa";
import { PiDownloadSimple } from "react-icons/pi";
import { Link } from "react-router";

export default function TrendingAppsCard({ app }) {
  return (
    <>
      <Link to={`/details/${app.id}`}>
        <div className="p-4 bg-white">
          <figure className="rounded-lg flex justify-center items-center flex-col bg-gray-100 p-2 sm:h-50 ">
            <img className="sm:h-40 h-25" src={app.image} alt="" />
          </figure>
          <div>
            <h2 className="font-medium text-xl text-[#001931] mt-4">
              {app.title}
            </h2>
            <div className="flex items-center justify-between mt-4">
              <span className="flex items-center gap-1 text-green-400 ">
                <PiDownloadSimple />
                {app.downloads}M
              </span>
              <span className="flex items-center gap-1 text-orange-400  ">
                <FaRegStar />
                {app.ratingAvg}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

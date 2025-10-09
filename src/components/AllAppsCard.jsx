import { Link } from "react-router";
import { FaRegStar } from "react-icons/fa";
import { PiDownloadSimple } from "react-icons/pi";

export default function AllAppsCard({ app }) {
  return (
    <>
      <Link to={`/details/${app.id}`}>
        <div className="p-4 bg-white rounded ">
          <figure className="rounded-lg flex justify-center items-center flex-col bg-gray-100 p-2 sm:h-50">
            <img className="h-25 sm:h-40" src={app.image} alt={app.title} />
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
              <span className="flex items-center gap-1 text-orange-400 ">
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

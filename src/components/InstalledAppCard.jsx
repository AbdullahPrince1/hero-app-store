import { PiDownloadSimple } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";

export default function InstalledAppCard({ data, handleDelete }) {
  const { image, title, ratingAvg, size, downloads, id } = data;
  
  return (
    <>
      <div className="p-4 flex justify-between items-center bg-white rounded">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt=""
            className="w-15 h-15 sm:w-20 sm:h-20 rounded"
          />
          <div>
            <h1 className="mb-4 font-semibold text-xl">{title}</h1>
            <div className="flex gap-4 items-center font-medium">
              <span className="flex items-center gap-1 text-green-400 ">
                <PiDownloadSimple />
                {downloads}M
              </span>
              <span className="sm:flex items-center gap-1 text-orange-400 hidden ">
                <FaRegStar />
                {ratingAvg}
              </span>
              <h4>{size}MB</h4>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleDelete(id)}
          className="px-3 sm:px-4 py-2 bg-[#00d390] text-white rounded"
          type="button"
        >
          Uninstall
        </button>
      </div>
    </>
  );
}

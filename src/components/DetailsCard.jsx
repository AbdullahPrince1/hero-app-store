import { useParams } from "react-router";
import { useData } from "../hooks/useData";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export default function DetailsCard() {
  const [isInstalled, setIsInstalled] = useState(false);
  const { id } = useParams();
  const { appData } = useData();
  if (!appData.data) {
    return <h1>Loading....</h1>;
  }

  const appDetail = appData.data.find((app) => app.id === Number(id));
  const handleClick = () => {
    toast("App installed!");
    setIsInstalled(true);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-10 mb-10">
        <figure>
          <img className="h-80 w-80" src={appDetail.image} alt="" />
        </figure>
        <div>
          <div className="mb-7">
            <h1 className="text-3xl font-bold text-[#001931]">
              {appDetail.title}
            </h1>
            <p className="font-medium text-xl">
              Developed by {appDetail.companyName}
            </p>
          </div>
          <div className="mt-7 flex items-center gap-6">
            <div className="flex flex-col items-center">
              <img src="/icon-downloads.png" alt="" />
              <p>Downloads</p>
              <span>{appDetail.downloads}M</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icon-ratings.png" alt="" />
              <p>Average Ratings</p>
              <span>{appDetail.ratingAvg}M</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icon-review.png" alt="" />
              <p>Total Reviews</p>
              <span>{appDetail.reviews}K</span>
            </div>
          </div>
          <button
            onClick={() => handleClick()}
            disabled={isInstalled}
            className="bg-blue-400 px-4 py-2 rounded font-semibold"
            type="button"
          >
            {isInstalled ? "Installed" : ` Install now (${appDetail.size}MB)`}

            <ToastContainer />
          </button>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-2xl text-[#001931] mb-6">Ratings</h2>
        <div>
          <BarChart
            width={1000}
            height={400}
            data={appDetail.ratings}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />

            <Bar dataKey="count" fill="#FF8811" />
          </BarChart>
        </div>
      </div>

      <div>
        <h1>Description</h1>
        <p>{appDetail.description}</p>
      </div>
    </>
  );
}

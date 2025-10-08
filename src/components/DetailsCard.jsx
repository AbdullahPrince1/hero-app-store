import { useParams } from "react-router";
import { useData } from "../hooks/useData";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const getDataFromLs = () => {
  const getData = localStorage.getItem("appList");
  if (getData) {
    const parseData = JSON.parse(getData);
    return parseData;
  } else {
    return [];
  }
};

export default function DetailsCard() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [addToLs, setAddToLs] = useState(getDataFromLs());
  useEffect(() => {
    localStorage.setItem("appList", JSON.stringify(addToLs));
  }, [addToLs]);

  const { id } = useParams();
  const { appData } = useData();
  if (!appData.data) {
    return <h1>Loading....</h1>;
  }

  const appDetail = appData.data.find((app) => app.id === Number(id));
  const handleClick = (data) => {
    setIsInstalled(true);

    const isAdded = addToLs.find((app) => app.id == data.id);
    if (isAdded) {
      Swal.fire({
        title: "Already Exist!",
        icon: "error",
        draggable: true,
      });
      return;
    } else {
      Swal.fire({
        title: " Installing.!",
        icon: "success",
        draggable: true,
      });
      setAddToLs([...addToLs, data]);
    }
  };

  return (
    <>
      <section className="max-w-7xl mx-auto mb-20 ">
        <div className="flex sm:flex-row flex-col  gap-10 mb-10 mt-20 p-3">
          <figure>
            <img className="h-80 w-80" src={appDetail.image} alt="" />
          </figure>
          <div>
            <div className="mb-7 ">
              <h1 className="text-3xl font-bold text-[#001931]">
                {appDetail.title}
              </h1>
              <p className="font-medium mt-1 text-[#627382]">
                Developed by{" "}
                <span className="text-blue-500">{appDetail.companyName}</span>
              </p>
            </div>
            <div className="border-b border-b-gray-300"></div>
            <div className="mt-7 flex items-center gap-8">
              <div className="flex flex-col items-center">
                <img src="../icon-downloads.png" alt="" />
                <p className="sm:block hidden">Downloads</p>
                <span className="font-bold text-lg sm:text-3xl">
                  {appDetail.downloads}M
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src="../icon-ratings.png" alt="" />
                <p className="sm:block hidden">Average Ratings</p>
                <span className="font-bold text-lg sm:text-3xl">
                  {appDetail.ratingAvg}M
                </span>
              </div>
              <div className="flex flex-col items-center ">
                <img src="../icon-review.png" alt="" />
                <p className="sm:block hidden">Total Reviews</p>
                <span className="font-bold text-lg sm:text-3xl">
                  {appDetail.reviews}K
                </span>
              </div>
            </div>
            <button
              onClick={() => handleClick(appDetail)}
              disabled={isInstalled}
              className="bg-[#00d390] text-white px-4 py-2 rounded font-semibold mt-7"
              type="button"
            >
              {isInstalled ? "Installed" : ` Install now (${appDetail.size}MB)`}
            </button>
          </div>
        </div>

        <div className="p-3">
          <h2 className="font-semibold text-2xl text-[#001931] mb-6">
            Ratings
          </h2>
          <div style={{ width: "100%", height: "400px" }}>
            <ResponsiveContainer>
              <BarChart
                width={700}
                height={400}
                data={appDetail.ratings}
                layout="vertical"
                margin={{ top: 10, bottom: 20 }}
              >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Bar dataKey="count" fill="#FF8811" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-6 p-3">
          <h1 className="text-[#001931] font-semibold mb-4 text-2xl">
            Description
          </h1>
          <p className="text-[#627382]">{appDetail.description}</p>
        </div>
      </section>
    </>
  );
}

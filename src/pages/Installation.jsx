import { useEffect, useState } from "react";
import InstalledAppCard from "../components/InstalledAppCard";
import Swal from "sweetalert2";

export default function Installation() {
  const [deleteApp, setDeleteApp] = useState([]);
  const [sort, setSort] = useState("");

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "high") {
      const sortedHigh = [...deleteApp].sort(
        (a, b) => b.downloads - a.downloads
      );
      setDeleteApp(sortedHigh);
    }
    if (sortType === "low") {
      const sortedHigh = [...deleteApp].sort(
        (a, b) => a.downloads - b.downloads
      );
      setDeleteApp(sortedHigh);
    }
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("appList"));
    setDeleteApp(localData);
  }, []);

  const handleDelete = (id) => {
    const deleteItem = deleteApp.filter((item) => item.id !== id);
    localStorage.setItem("appList", JSON.stringify(deleteItem));
    Swal.fire({
      title: "Uninstall Successful.!",
      icon: "success",
      draggable: true,
    });
    setDeleteApp(deleteItem);
  };

  if (deleteApp == null) {
    return <h1>No data</h1>;
  }
  return (
    <>
      <div className="mt-20 max-w-7xl mx-auto">
        <div className="text-center mb-10 p-3">
          <h1 className="font-bold text-5xl text-[#001931]">
            Your Installed Apps
          </h1>
          <p className="text-xl text-[#627382] mt-4">
            Explore All Apps on the Market developed by us.
          </p>
        </div>
        <div className="flex p-3 items-center justify-between mb-6">
          <h2 className="font-semibold text-2xl">
            {deleteApp.length} Apps Found
          </h2>
          <select
            defaultValue="Sort by"
            onChange={(e) => handleSort(e.target.value)}
            className="p-2 border rounded border-gray-200"
          >
            <option disabled={true}>Sort by</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
          </select>
        </div>

        <div className="space-y-4 mb-20 p-3">
          {deleteApp.map((data) => (
            <InstalledAppCard
              key={data.id}
              data={data}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}

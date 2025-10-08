import { useEffect, useState } from "react";
import InstalledAppCard from "../components/InstalledAppCard";
import { toast } from "react-toastify";

export default function Installation() {
  const [deleteApp, setDeleteApp] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("appList"));
    setDeleteApp(localData);
  }, []);

  const handleDelete = (id) => {
    const deleteItem = deleteApp.filter((item) => item.id !== id);
    localStorage.setItem("appList", JSON.stringify(deleteItem));
    setDeleteApp(deleteItem);
    toast("Uninstall Successful");
  };

  if (deleteApp == null) {
    return <h1>No data</h1>;
  }
  return (
    <>
      <div className="mt-20 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-bold text-5xl text-[#001931]">
            Your Installed Apps
          </h1>
          <p className="text-xl text-[#627382] mt-4">
            Explore All Apps on the Market developed by us.
          </p>
        </div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-2xl">
            {deleteApp.length} Apps Found
          </h2>
          <select
            defaultValue="Short By Download"
            className=" p-2 border rounded "
          >
            <option disabled={true} value="">
              Short By Download
            </option>
            <option value="">High to Low</option>
            <option value="">Low to High</option>
          </select>
        </div>

        <div className="space-y-4 mb-20">
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

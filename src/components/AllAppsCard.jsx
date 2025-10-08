import { Link } from "react-router";

export default function AllAppsCard({ app }) {
  return (
    <>
      <Link to={`/details/${app.id}`}>
        <div className="p-4 bg-gray-100 ">
          <figure className="flex items-center flex-col">
            <img className="h-40" src={app.image} alt={app.title} />
          </figure>
          <div>
            <h2>{app.title}</h2>
            <div className="flex items-center justify-between">
              <p>{app.downloads}M</p>
              <p>6</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

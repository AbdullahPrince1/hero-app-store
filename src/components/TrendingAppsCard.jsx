export default function TrendingAppsCard({ app }) {
  
  return (
    <>
      <div className="p-4 bg-gray-100">
        <figure>
          <img className="h-40" src={app.image} alt="" />
        </figure>
        <div>
          <h2>{app.title}</h2>
          <div className="flex items-center justify-between">
            <p>{app.downloads}M</p>
            <p>6</p>
          </div>
        </div>
      </div>
    </>
  );
}

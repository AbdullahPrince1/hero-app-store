export default function SummeryReview() {
  return (
    <>
      <div className="bg-blue-300 flex flex-col items-center gap-10 p-20">
        <h1 className="text-center font-bold text-4xl">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center flex-col px-10 py-5">
            <h4>Total Downloads</h4>
            <h1 className="font-extrabold text-6xl my-2">23.7M</h1>
            <p>21% more than last month</p>
          </div>
          <div className="flex items-center flex-col  px-10 py-5">
            <h4>Total Reviews</h4>
            <h1 className="font-extrabold text-6xl my-2">899K</h1>
            <p>67% more than last month</p>
          </div>
          <div className="flex items-center flex-col  px-10 py-5">
            <h4>Active Apps</h4>
            <h1 className="font-extrabold text-6xl my-2">237+</h1>
            <p>81% more than last month</p>
          </div>
        </div>
      </div>
    </>
  );
}

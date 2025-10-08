import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <>
      <div className="flex justify-center items-center flex-col relative">
        <figure>
          <img
            className="h-[100vh] w-fit object-cover px-20 pb-20 pt-10"
            src="../error-404.png"
            alt="Error Page"
            sn
          />
        </figure>
        <Link to={"/"} className="seeBtn px-3 py-2 absolute bottom-5">
          Go Back
        </Link>
      </div>
    </>
  );
}
